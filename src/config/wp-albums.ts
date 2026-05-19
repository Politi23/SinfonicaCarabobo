import { fetchAPI, domain } from "./wp-client";
import { cleanText, extractImagesFromContent } from "./wp-utils";

const ALBUM_ENDPOINTS = ["/album", "/albums"] as const;
const MAX_ALBUMS_PER_PAGE = 9;

const fetchAlbumsWithFallback = async (query: string) => {
	for (const endpoint of ALBUM_ENDPOINTS) {
		const data = await fetchAPI(`${endpoint}${query}`);
		if (Array.isArray(data)) {
			return data;
		}
	}

	return [];
};

const headAlbumsInfoWithFallback = async (perPage: number) => {
	const safePerPage = Math.min(Math.max(1, perPage), MAX_ALBUMS_PER_PAGE);

	for (const endpoint of ALBUM_ENDPOINTS) {
		const res = await fetch(`${domain}/wp-json/wp/v2${endpoint}?per_page=${safePerPage}`, {
			method: "HEAD",
		});

		if (res.ok) {
			return {
				total: Number(res.headers.get("X-WP-Total") || 0),
				totalPages: Number(res.headers.get("X-WP-TotalPages") || 0),
			};
		}
	}

	return { total: 0, totalPages: 1 };
};

// Helper para procesar la respuesta de la API y convertirla en un objeto WPAlbum
const processAlbum = (item: any): WPAlbum => {
	// 1. Extraer Portada (Featured Media)
	const cover = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

	// 2. Extraer Fotos del Contenido HTML (Usando el helper)
	const content = item.content?.rendered || "";
	const extractedPhotos = extractImagesFromContent(content);

	// 3. Unir portada + fotos internas (evitando duplicados)
	const allPhotos = [...new Set([...extractedPhotos])].filter(
		(url) => url.length > 0,
	);

	return {
		id: item.id,
		slug: item.slug,
		title: cleanText(item.title?.rendered),
		excerpt: cleanText(item.excerpt?.rendered || ""),
		content: item.content?.rendered || "",
		date: item.date,
		dateTaken: item.acf?.date_taken || "",
		coverImage: cover,
		imageCaption: item._embedded?.["wp:featuredmedia"]?.[0]?.caption?.rendered || "",
		category: item._embedded?.["wp:term"]?.[0]?.[0]?.name || "",
		author: item._embedded?.author?.[0]?.name || "",
		photos: allPhotos,
	};
};

export interface WPAlbum {
	id: number;
	slug: string;
	title: string;
	date: string;
	dateTaken: string;
	excerpt: string;
	content: string;
	coverImage: string;
	imageCaption: string;
	category: string;
	author: string;
	photos: string[];
}

export interface AlbumsPagination {
	currentPage: number;
	totalPages: number;
	hasPrev: boolean;
	hasNext: boolean;
	prevPage: number | null;
	nextPage: number | null;
}

export const getAlbums = async (
	page = 1,
	perPage = 9,
	orderby: "date" | "title" | "modified" = "date",
	order: "asc" | "desc" = "desc",
): Promise<WPAlbum[]> => {
	try {
		const safePerPage = Math.min(Math.max(1, perPage), MAX_ALBUMS_PER_PAGE);
		const data = await fetchAlbumsWithFallback(
			`?_embed=1&per_page=${safePerPage}&page=${page}&orderby=${orderby}&order=${order}`,
		);
		return data.map(processAlbum);
	} catch (error) {
		console.error("Error obteniendo los álbumes:", error);
		return [];
	}
};

// Función para obtener todos los álbumes (sin paginación)
export const getAllAlbums = async (): Promise<WPAlbum[]> => {
	try {
		const data = await fetchAlbumsWithFallback("?_embed=1&per_page=100");
		return data.map(processAlbum);
	} catch (error) {
		console.error("Error obteniendo los álbumes:", error);
		return [];
	}
};

export const getAlbumCategories = async (): Promise<string[]> => {
	try {
		const all = await getAllAlbums();
		const cats = [...new Set(all.map((a) => a.category).filter(Boolean))];
		return cats.sort((a, b) => a.localeCompare(b, "es"));
	} catch {
		return [];
	}
};

// Función para obtener información de paginación
export const getAlbumsInfo = async (): Promise<{ total: number; totalPages: number }> => {
	try {
		return await headAlbumsInfoWithFallback(MAX_ALBUMS_PER_PAGE);
	} catch (error) {
		console.error("Error obteniendo información de álbumes:", error);
		return { total: 0, totalPages: 1 };
	}
};

export const getAlbumsPagination = async (
	page = 1,
	perPage = 9,
): Promise<AlbumsPagination> => {
	const safePage = Math.max(1, Number.isFinite(page) ? Math.floor(page) : 1);
	const safePerPage = Math.min(Math.max(1, perPage), MAX_ALBUMS_PER_PAGE);

	try {
		const info = await headAlbumsInfoWithFallback(safePerPage);
		const totalPagesFromHeader = Number.isFinite(info.totalPages)
			? Math.floor(info.totalPages)
			: 0;
		const totalFromHeader = Number.isFinite(info.total) ? Math.floor(info.total) : 0;
		const totalPagesFromTotal =
			totalFromHeader > 0 ? Math.ceil(totalFromHeader / safePerPage) : 0;
		const totalPages = Math.max(
			1,
			totalPagesFromTotal > 0 ? totalPagesFromTotal : totalPagesFromHeader || 1,
		);
		const currentPage = Math.min(safePage, totalPages);

		return {
			currentPage,
			totalPages,
			hasPrev: currentPage > 1,
			hasNext: currentPage < totalPages,
			prevPage: currentPage > 1 ? currentPage - 1 : null,
			nextPage: currentPage < totalPages ? currentPage + 1 : null,
		};
	} catch (error) {
		console.error("Error obteniendo paginación de álbumes:", error);
		return {
			currentPage: 1,
			totalPages: 1,
			hasPrev: false,
			hasNext: false,
			prevPage: null,
			nextPage: null,
		};
	}
};

// Función para obtener un álbum específico
export const getAlbumBySlug = async (slug: string): Promise<WPAlbum | null> => {
	try {
		const data = await fetchAlbumsWithFallback(`?slug=${slug}&_embed=1`);
		if (data.length === 0) return null;
		return processAlbum(data[0]);
	} catch (error) {
		console.error(`Error obteniendo el álbum ${slug}:`, error);
		return null;
	}
};
