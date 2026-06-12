import { fetchAPI } from "./wp-client";
import { cleanText } from "./wp-utils";

// Assumes a WordPress CPT with slug "video" and ACF fields:
// - youtube_url: string (full YouTube URL)
// - video_thumbnail: optional ACF image field (source_url)

const VIDEO_ENDPOINTS = ["/video", "/videos"] as const;

const fetchVideosWithFallback = async (query: string) => {
  for (const endpoint of VIDEO_ENDPOINTS) {
    const data = await fetchAPI(`${endpoint}${query}`);
    if (Array.isArray(data) && data.length >= 0) return data;
  }
  return [];
};

export const extractYoutubeId = (url: string): string | null => {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
};

export interface WPVideo {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  youtubeUrl: string;
  youtubeId: string | null;
  thumbnail: string;
  category: string;
}

const processVideo = (item: any): WPVideo => {
  const youtubeUrl: string = item.acf?.youtube_url || item.acf?.video_url || "";
  const youtubeId = extractYoutubeId(youtubeUrl);

  const acfThumb: string = item.acf?.video_thumbnail?.url || item.acf?.video_thumbnail || "";
  const wpThumb: string = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const ytThumb = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : "";

  // Description priority: ACF video_description > WP excerpt
  const description: string =
    item.acf?.video_description ||
    cleanText(item.excerpt?.rendered || "");

  return {
    id: item.id,
    slug: item.slug,
    title: cleanText(item.title?.rendered),
    excerpt: description,
    date: item.date,
    youtubeUrl,
    youtubeId,
    thumbnail: acfThumb || wpThumb || ytThumb,
    category: item._embedded?.["wp:term"]?.[0]?.[0]?.name || "",
  };
};

export const getVideos = async (perPage = 12, page = 1): Promise<WPVideo[]> => {
  try {
    const data = await fetchVideosWithFallback(
      `?_embed=1&per_page=${perPage}&page=${page}&orderby=date&order=desc`,
    );
    return data.map(processVideo);
  } catch (error) {
    console.error("Error obteniendo videos:", error);
    return [];
  }
};

export const getVideoCategories = async (): Promise<string[]> => {
  try {
    const all = await getVideos(100, 1);
    return [...new Set(all.map((v) => v.category).filter(Boolean))].sort();
  } catch {
    return [];
  }
};
