const domain = import.meta.env.WP_DOMAIN;
const apiBase = `${domain}/wp-json/wp/v2`;

export interface WPReconocimiento {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
          large?: { source_url: string };
        };
      };
    }>;
  };
}

const API_URL = "http://localhost:10004/wp-json/wp/v2/reconocimientos?_embed";

export const getReconocimientos = async (): Promise<WPReconocimiento[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error("Error al conectar con WordPress");
    }

    const data = await res.json();
    return data as WPReconocimiento[];
  } catch (error) {
    console.error("Error fetching reconocimientos:", error);
    return [];
  }
};