// Helper: Limpia caracteres HTML (para títulos y excerpts)
export const cleanText = (text: string): string => {
  if (!text) return "";
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
    .replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    .trim();
};

// Helper: Extrae TODAS las URLs de imágenes dentro del contenido HTML
export const extractImagesFromContent = (html: string): string[] => {
  if (!html) return [];
  
  // Esta Regex busca <img ... src="URL" ... >
  const regex = /<img[^>]+src="([^">]+)"/g;
  const images: string[] = [];
  let match;
  
  while ((match = regex.exec(html)) !== null) {
    // match[1] es la URL capturada
    images.push(match[1]);
  }
  
  // Eliminamos duplicados
  return [...new Set(images)];
};