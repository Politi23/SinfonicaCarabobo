import { fetchAPI, domain } from "./wp-client";
import { cleanText, extractImagesFromContent } from "./wp-utils";
import logoSimpleBbg from "@assets/images/logo/logosimplebbg.webp";

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
		date: item.date,
		coverImage: cover || logoSimpleBbg.src,
		photos: allPhotos,
	};
};

export interface WPAlbum {
	id: number;
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	coverImage: string;
	photos: string[];
}

export const getAlbums = async (page = 1, perPage = 9): Promise<WPAlbum[]> => {
	try {
		// Pedimos albumes, imagen destacada y paginación
		const data = await fetchAPI(`/album?_embed=1&per_page=${perPage}&page=${page}`);

		if (!data || !Array.isArray(data)) return [];

		return data.map(processAlbum);
	} catch (error) {
		console.error("Error obteniendo los álbumes:", error);
		return [];
	}
};

// Función para obtener todos los álbumes (sin paginación)
export const getAllAlbums = async (): Promise<WPAlbum[]> => {
	try {
		const data = await fetchAPI(`/album?_embed=1&per_page=100`);

		if (!data || !Array.isArray(data)) return [];

		return data.map(processAlbum);
	} catch (error) {
		console.error("Error obteniendo los álbumes:", error);
		return [];
	}
};

// Función para obtener información de paginación
export const getAlbumsInfo = async (): Promise<{ total: number; totalPages: number }> => {
	try {
		// Hacemos fetch manual (HEAD) para obtener los headers de paginación
		const res = await fetch(`${domain}/wp-json/wp/v2/album?per_page=1`, {
			method: "HEAD",
		});

		return {
			total: Number(res.headers.get("X-WP-Total") || 0),
			totalPages: Number(res.headers.get("X-WP-TotalPages") || 0),
		};
	} catch (error) {
		console.error("Error obteniendo información de álbumes:", error);
		return { total: 0, totalPages: 1 };
	}
};

// Función para obtener un álbum específico
export const getAlbumBySlug = async (slug: string): Promise<WPAlbum | null> => {
	try {
		const data = await fetchAPI(`/album?slug=${slug}&_embed=1`);
		if (!data || !Array.isArray(data) || data.length === 0) return null;
		return processAlbum(data[0]);
	} catch (error) {
		console.error(`Error obteniendo el álbum ${slug}:`, error);
		return null;
	}
};
