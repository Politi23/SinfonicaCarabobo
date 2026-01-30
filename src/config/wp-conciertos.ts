const domain = import.meta.env.WP_DOMAIN;
const apiBase = `${domain}/wp-json/wp/v2`;

// 1. Interfaz para los campos de Advanced Custom Fields (ACF)
export interface ConciertoACF {
  event_date: string;        // Formato que devuelve ACF: "20260226" (YYYYMMDD)
  event_time: string;        // "10:00:00"
  event_venue: string;       // "UJAP"
  event_price: string;       // "Gratuito"
  event_description: string; // "Las HUNTRX en Valencia"
}

// 2. Interfaz principal del Post tipo 'Concierto'
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
      source_API_URL: string;
      alt_text?: string;
    }>;
  };
}

// 3. Función Fetch
export const getConciertos = async (): Promise<WPConcierto[]> => {
  try {
    const API_URL = `${apiBase}/conciertos?_embed&status=publish`;
    
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