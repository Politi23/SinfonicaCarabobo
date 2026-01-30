const domain = import.meta.env.WP_DOMAIN;
const apiBase = `${domain}/wp-json/wp/v2`;

export interface ConciertoACF {
  event_date: string;        // Formato que devuelve ACF: "20260226" (YYYYMMDD)
  event_time: string;        // "10:00:00"
  event_venue: string;       // "UJAP"
  event_price: string;       // "Gratuito"
  event_description: string; // "Las HUNTRX en Valencia"
}

export interface WPConcierto {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: ConciertoACF;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
}

export const getConciertos = async (perPage: number = 9): Promise<WPConcierto[]> => {
  try {
    const API_URL = `${apiBase}/conciertos?_embed&status=publish&per_page=${perPage}`;

    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Error fetching conciertos: ${res.statusText}`);
    }

    const data = await res.json();
    return data as WPConcierto[];
  } catch (error) {
    console.error("Error obteniendo los conciertos:", error);
    return [];
  }
};