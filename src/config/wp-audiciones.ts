import { fetchAPI } from "./wp-client";
import { cleanText } from "./wp-utils";

// Asume un CPT en WordPress con slug "audicion" (o "audiciones") y campos ACF:
// - instrument_name: string   -> Ej: "Contrabajo"
// - level_label: string       -> Ej: "Nivel Fila", "Nivel Pasante"
// - drive_url: string         -> Link de "Compartir" de Google Drive del archivo
// - sort_order: number (opcional) -> orden dentro del instrumento

const AUDICION_ENDPOINTS = ["/audicion", "/audiciones"] as const;

const fetchAudicionesWithFallback = async (query: string) => {
  for (const endpoint of AUDICION_ENDPOINTS) {
    const data = await fetchAPI(`${endpoint}${query}`);
    if (Array.isArray(data)) return data;
  }
  return null;
};

export interface WPAudicion {
  id: number;
  slug: string;
  title: string;
  instrument: string;
  level: string;
  downloadUrl: string;
  sortOrder: number;
}

// Convierte un link de "Compartir" de Google Drive en un link de descarga directa.
export const toDriveDownloadLink = (url: string): string => {
  if (!url) return "";
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  const fileId = match?.[1];
  if (!fileId) return url;
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

const processAudicion = (item: any): WPAudicion => {
  const acf = item.acf || {};
  const title = cleanText(item.title?.rendered || "");

  return {
    id: item.id,
    slug: item.slug,
    title,
    instrument: acf.instrument_name || "",
    level: acf.level_label || title,
    downloadUrl: toDriveDownloadLink(acf.drive_url || ""),
    sortOrder: Number.isFinite(Number(acf.sort_order)) ? Number(acf.sort_order) : 0,
  };
};

export const getAudicionesState = async (): Promise<{
  audiciones: WPAudicion[];
  offline: boolean;
}> => {
  const data = await fetchAudicionesWithFallback("?per_page=100&status=publish");

  if (!data) return { audiciones: [], offline: true };

  const audiciones = data.map(processAudicion).filter((a) => a.instrument);

  return { audiciones, offline: false };
};

export interface InstrumentGroup {
  name: string;
  files: { title: string; link: string }[];
}

export const groupAudicionesByInstrument = (
  audiciones: WPAudicion[],
): InstrumentGroup[] => {
  const grouped = new Map<
    string,
    { title: string; link: string; order: number }[]
  >();

  for (const a of audiciones) {
    const key = a.instrument.trim();
    const existing = grouped.get(key) ?? [];
    existing.push({ title: a.level, link: a.downloadUrl, order: a.sortOrder });
    grouped.set(key, existing);
  }

  return [...grouped.entries()]
    .map(([name, files]) => ({
      name,
      files: files
        .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, "es"))
        .map(({ title, link }) => ({ title, link })),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "es"));
};
