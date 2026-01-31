import { fetchAPI } from "./wp-client";
import { cleanText, extractImagesFromContent } from "./wp-utils";

export interface WPAlbum {
  id: number;
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  photos: string[];
}

export const getAlbums = async (): Promise<WPAlbum[]> => {
  // Pedimos albumes, imagen destacada y pedimos 100 por página
  const data = await fetchAPI("/albumes?_embed=1&per_page=100");
  
  if (!data || !Array.isArray(data)) return [];

  return data.map((item: any) => {
    // 1. Extraer Portada (Featured Media)
    const cover = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
    
    // 2. Extraer Fotos del Contenido HTML (Usando el helper)
    const content = item.content?.rendered || "";
    const extractedPhotos = extractImagesFromContent(content);

    // 3. Unir portada + fotos internas (evitando duplicados)
    // A veces queremos que la portada sea la primera foto de la galería
    const allPhotos = [...new Set([cover, ...extractedPhotos])].filter(url => url.length > 0);

    return {
      id: item.id,
      slug: item.slug,
      title: cleanText(item.title?.rendered),
      date: item.date,
      coverImage: cover || "/logosimplebbg.webp",
      photos: allPhotos
    };
  });
};

// Función para obtener un álbum específico (reutiliza la lógica anterior para consistencia)
export const getAlbumBySlug = async (slug: string): Promise<WPAlbum | null> => {
  const allAlbums = await getAlbums();
  return allAlbums.find(a => a.slug === slug) || null;
};