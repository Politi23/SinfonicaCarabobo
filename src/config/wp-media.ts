import { fetchGraphQL } from "./wp-graphql";

export interface WPMediaItem {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

type MediaNode = {
  sourceUrl?: string | null;
  altText?: string | null;
  mimeType?: string | null;
  mediaType?: string | null;
  mediaDetails?: {
    width?: number | null;
    height?: number | null;
  } | null;
};

type MediaConnection = {
  mediaItems?: {
    nodes?: Array<MediaNode | null> | null;
  } | null;
};

const QUERY_WITH_WHERE = `
  query GetLatestMedia($first: Int!) {
    mediaItems(first: $first, where: { mimeTypes: IMAGE }) {
      nodes {
        sourceUrl
        altText
        mimeType
        mediaType
        mediaDetails {
          width
          height
        }
      }
    }
  }
`;

const QUERY_FALLBACK = `
  query GetLatestMediaFallback($first: Int!) {
    mediaItems(first: $first) {
      nodes {
        sourceUrl
        altText
        mimeType
        mediaType
        mediaDetails {
          width
          height
        }
      }
    }
  }
`;

const toValidDimension = (value: unknown): number | undefined => {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return undefined;
  }

  const parsed = Math.floor(value);
  return parsed > 0 ? parsed : undefined;
};

const isValidUrl = (value: unknown): value is string => {
  if (typeof value !== "string" || value.trim().length === 0) return false;

  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};

const isImageNode = (node: MediaNode): boolean => {
  const mimeType = node.mimeType?.toLowerCase() || "";
  const mediaType = node.mediaType?.toLowerCase() || "";

  return mimeType.startsWith("image/") || mediaType === "image";
};

const hasValidImageSource = (
  node: MediaNode | null,
): node is MediaNode & { sourceUrl: string } => {
  if (!node) {
    return false;
  }

  return isValidUrl(node.sourceUrl) && isImageNode(node);
};

const mapNodes = (nodes: Array<MediaNode | null>): WPMediaItem[] => {
  return nodes
    .filter(hasValidImageSource)
    .map((node) => ({
      src: node.sourceUrl,
      alt: node.altText?.trim() || undefined,
      width: toValidDimension(node.mediaDetails?.width),
      height: toValidDimension(node.mediaDetails?.height),
    }));
};

export const getLatestMedia = async (limit = 30): Promise<WPMediaItem[]> => {
  const first = Number.isFinite(limit) ? Math.max(1, Math.floor(limit)) : 30;

  const primary = await fetchGraphQL<MediaConnection>(QUERY_WITH_WHERE, {
    first,
  });

  if (primary) {
    const nodes = primary.mediaItems?.nodes;

    if (Array.isArray(nodes)) {
      return mapNodes(nodes);
    }
  }

  const fallback = await fetchGraphQL<MediaConnection>(QUERY_FALLBACK, {
    first,
  });

  if (!fallback) {
    return [];
  }

  const nodes = fallback.mediaItems?.nodes;

  if (!Array.isArray(nodes)) {
    return [];
  }

  return mapNodes(nodes);
};
