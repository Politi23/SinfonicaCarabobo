import { domain, fetchAPI } from "./wp-client";
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

export interface MediaPagination {
  currentPage: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

const headMediaInfo = async (perPage: number) => {
  const res = await fetch(
    `${domain}/wp-json/wp/v2/media?media_type=image&per_page=${perPage}`,
    {
      method: "HEAD",
    },
  );

  return {
    total: Number(res.headers.get("X-WP-Total") || 0),
    totalPages: Number(res.headers.get("X-WP-TotalPages") || 0),
  };
};

export const fetchImageMedia = async (
  page: number = 1,
  perPage: number = MEDIA_PAGE_SIZE,
): Promise<WPMediaImage[]> => {
  const safePerPage = Math.min(Math.max(1, perPage), MEDIA_PAGE_SIZE);
  const safePage = Math.max(1, Number.isFinite(page) ? Math.floor(page) : 1);
  const data = await fetchAPI(
    `/media?media_type=image&per_page=${safePerPage}&page=${safePage}`,
  );

  if (!data || !Array.isArray(data)) return [];

  return data as WPMediaImage[];
};

export const getImageMediaPagination = async (
  page: number = 1,
  perPage: number = MEDIA_PAGE_SIZE,
): Promise<MediaPagination> => {
  const safePerPage = Math.min(Math.max(1, perPage), MEDIA_PAGE_SIZE);
  const safePage = Math.max(1, Number.isFinite(page) ? Math.floor(page) : 1);

  try {
    const info = await headMediaInfo(safePerPage);
    const totalPagesFromHeader = Number.isFinite(info.totalPages)
      ? Math.floor(info.totalPages)
      : 0;
    const totalFromHeader = Number.isFinite(info.total) ? Math.floor(info.total) : 0;
    const totalPagesFromTotal = totalFromHeader > 0 ? Math.ceil(totalFromHeader / safePerPage) : 0;
    const totalPages = Math.max(1, totalPagesFromHeader || totalPagesFromTotal || 1);
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
    console.error("Error obteniendo paginacion de media:", error);
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
