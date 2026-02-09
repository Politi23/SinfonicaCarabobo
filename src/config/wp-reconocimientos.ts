import { fetchAPI } from "./wp-client";

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

export const getReconocimientos = async (): Promise<WPReconocimiento[]> => {
	try {
		const data = await fetchAPI("/reconocimiento?_embed");

		if (!data || !Array.isArray(data)) return [];

		return data as WPReconocimiento[];
	} catch (error) {
		console.error("Error fetching reconocimientos:", error);
		return [];
	}
};
