import { fetchAPI } from "./wp-client";
import { cleanText } from "./wp-utils";

const MEDIA_PAGE_SIZE = 100;

export interface WPMediaImage {
  id: number;
  source_url: string;
  alt_text?: string;
  media_details?: {
    width?: number;
    height?: number;
  };
}

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const fetchImageMedia = async (page: number = 1): Promise<WPMediaImage[]> => {
  const data = await fetchAPI(
    `/media?media_type=image&per_page=${MEDIA_PAGE_SIZE}&page=${page}`,
  );

  if (!data || !Array.isArray(data)) return [];

  return data as WPMediaImage[];
};

export const fetchAlbumImageMedia = async (
  albumId: number,
): Promise<WPMediaImage[]> => {
  if (!Number.isFinite(albumId) || albumId <= 0) return [];

  const images: WPMediaImage[] = [];
  let currentPage = 1;

  while (true) {
    const data = await fetchAPI(
      `/media?parent=${albumId}&media_type=image&per_page=${MEDIA_PAGE_SIZE}&page=${currentPage}`,
    );

    if (!data || !Array.isArray(data) || data.length === 0) break;

    images.push(...(data as WPMediaImage[]));

    if (data.length < MEDIA_PAGE_SIZE) break;

    currentPage += 1;
  }

  const uniqueBySource = new Map<string, WPMediaImage>();

  for (const image of images) {
    if (!image.source_url || uniqueBySource.has(image.source_url)) continue;

    uniqueBySource.set(image.source_url, {
      ...image,
      alt_text: cleanText(image.alt_text || ""),
    });
  }

  return Array.from(uniqueBySource.values());
};
