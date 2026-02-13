import { fetchAPI } from "./wp-client";

export interface EventoACF {
	event_date: string; // Formato que devuelve ACF: "20260226" (YYYYMMDD)
	event_time: string; // "10:00:00"
	event_venue: string; // "UJAP"
	event_price: string; // "Gratuito"
	event_description: string; // "Las HUNTRX en Valencia"
}

export interface WPEvento {
	id: number;
	slug: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
	acf: EventoACF;
	featured_media: number;
	_embedded?: {
		"wp:featuredmedia"?: Array<{
			source_url: string;
			alt_text?: string;
		}>;
	};
}

export const getEventos = async (
	perPage: number = 9,
): Promise<WPEvento[]> => {
	try {
		const data = await fetchAPI(
			`/evento?_embed&status=publish&per_page=${perPage}`,
		);

		if (!data || !Array.isArray(data)) return [];

		return data as WPEvento[];
	} catch (error) {
		console.error("Error obteniendo los eventos:", error);
		return [];
	}
};
