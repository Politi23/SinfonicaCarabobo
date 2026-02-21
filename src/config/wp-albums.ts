import { fetchAPI } from "./wp-client";
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

export const getAlbums = async (): Promise<WPAlbum[]> => {
	try {
		// Pedimos albumes, imagen destacada y pedimos 100 por página
		const data = await fetchAPI("/album?_embed=1&per_page=100");

		if (!data || !Array.isArray(data)) return [];

		return data.map(processAlbum);
	} catch (error) {
		console.error("Error obteniendo los álbumes:", error);
		return [];
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
