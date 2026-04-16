import { fetchAPI } from "./wp-client";
import { cleanText } from "./wp-utils";

export type MusicoPosition = "Principal" | "Asistente" | "Fila";

export interface MusicoACF {
	member_since: number | null;
	position: MusicoPosition | null;
	instrument: string;
}

export interface WPMusico {
	id: number;
	slug: string;
	title: string;
	content: string;
	excerpt: string;
	acf: MusicoACF;
	image: string;
	imageAlt: string;
}

const parsePosition = (value: unknown): MusicoPosition | null => {
	if (value === "Principal" || value === "Asistente" || value === "Fila") {
		return value;
	}

	return null;
};

const parseMemberSince = (value: unknown): number | null => {
	if (typeof value === "number" && Number.isFinite(value)) {
		return Math.trunc(value);
	}

	if (typeof value === "string") {
		const parsed = Number.parseInt(value, 10);
		return Number.isFinite(parsed) ? parsed : null;
	}

	return null;
};

const parseInstrument = (value: unknown): string => {
	if (typeof value !== "string") return "Sin asignar";
	const normalized = value.trim();
	return normalized.length > 0 ? normalized : "Sin asignar";
};

const mapMusico = (item: any): WPMusico => {
	const acfRaw = item?.acf ?? {};
	const featuredMedia = item?._embedded?.["wp:featuredmedia"]?.[0];

	return {
		id: typeof item?.id === "number" ? item.id : 0,
		slug: typeof item?.slug === "string" ? item.slug : "",
		title: cleanText(item?.title?.rendered ?? ""),
		content: item?.content?.rendered ?? "",
		excerpt: cleanText(item?.excerpt?.rendered ?? ""),
		acf: {
			member_since: parseMemberSince(acfRaw.member_since),
			position: parsePosition(acfRaw.position),
			instrument: parseInstrument(acfRaw.instrument),
		},
		image: typeof featuredMedia?.source_url === "string" ? featuredMedia.source_url : "",
		imageAlt: typeof featuredMedia?.alt_text === "string" ? featuredMedia.alt_text : "",
	};
};

export const getMusicos = async (): Promise<WPMusico[]> => {
	try {
		const data = await fetchAPI("/musicos?_embed=1&status=publish&per_page=100");

		if (!Array.isArray(data)) return [];

		return data.map(mapMusico).filter((musico) => musico.slug.length > 0);
	} catch (error) {
		console.error("Error fetching musicos:", error);
		return [];
	}
};

export const getMusicoBySlugState = async (
	slug: string,
): Promise<{ musico: WPMusico | null; offline: boolean }> => {
	const data = await fetchAPI(`/musicos?slug=${slug}&_embed=1&status=publish`);

	if (!data) {
		return { musico: null, offline: true };
	}

	if (!Array.isArray(data) || data.length === 0) {
		return { musico: null, offline: false };
	}

	return {
		musico: mapMusico(data[0]),
		offline: false,
	};
};
