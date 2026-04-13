import { fetchAPI, domain } from "./wp-client";

const MAX_EVENTOS_PER_PAGE = 100;

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

export interface EventosPagination {
	currentPage: number;
	totalPages: number;
	hasPrev: boolean;
	hasNext: boolean;
	prevPage: number | null;
	nextPage: number | null;
}

const headEventosInfo = async (perPage: number) => {
	const res = await fetch(`${domain}/wp-json/wp/v2/evento?status=publish&per_page=${perPage}`, {
		method: "HEAD",
	});

	return {
		total: Number(res.headers.get("X-WP-Total") || 0),
		totalPages: Number(res.headers.get("X-WP-TotalPages") || 0),
	};
};

export const getEventos = async (
	perPage: number = 9,
	page: number = 1,
): Promise<WPEvento[]> => {
	try {
		const safePerPage = Math.min(Math.max(1, perPage), MAX_EVENTOS_PER_PAGE);
		const safePage = Math.max(1, Number.isFinite(page) ? Math.floor(page) : 1);
		const data = await fetchAPI(
			`/evento?_embed&status=publish&per_page=${safePerPage}&page=${safePage}`,
		);

		if (!data || !Array.isArray(data)) return [];

		return data as WPEvento[];
	} catch (error) {
		console.error("Error obteniendo los eventos:", error);
		return [];
	}
};

export const getEventosPagination = async (
	page: number = 1,
	perPage: number = 9,
): Promise<EventosPagination> => {
	const safePage = Math.max(1, Number.isFinite(page) ? Math.floor(page) : 1);
	const safePerPage = Math.min(Math.max(1, perPage), MAX_EVENTOS_PER_PAGE);

	try {
		const info = await headEventosInfo(safePerPage);
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
		console.error("Error obteniendo paginación de eventos:", error);
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

export const getEventoBySlug = async (slug: string): Promise<WPEvento | null> => {
	try {
		const data = await fetchAPI(
			`/evento?slug=${slug}&_embed=1&status=publish`,
		);

		if (!data || !Array.isArray(data) || data.length === 0) return null;

		return data[0] as WPEvento;
	} catch (error) {
		console.error(`Error obteniendo el evento ${slug}:`, error);
		return null;
	}
};

export const getEventoBySlugState = async (
	slug: string,
): Promise<{ evento: WPEvento | null; offline: boolean }> => {
	const data = await fetchAPI(`/evento?slug=${slug}&_embed=1&status=publish`);

	if (!data) {
		return { evento: null, offline: true };
	}

	if (!Array.isArray(data) || data.length === 0) {
		return { evento: null, offline: false };
	}

	return {
		evento: data[0] as WPEvento,
		offline: false,
	};
};
