import { fetchAPI } from "./wp-client";

const MEDIA_PAGE_SIZE = 100;

interface WPMediaImage {
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

  console.log(data.length)

  return data as WPMediaImage[];
};
