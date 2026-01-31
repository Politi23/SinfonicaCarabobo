const domain = import.meta.env.WP_DOMAIN;
const apiBase = `${domain}/wp-json/wp/v2`;

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  imageCaption?: string;
  category: string;
  author: string;
}

// Helper para limpiar caracteres HTML
function cleanText(text: string): string {
  if (!text) return "";
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
    .replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&apos;/g, "'").replace(/&nbsp;/g, " ")
    .trim();
}

// Obtener información general (para paginación)
export const getPostsInfo = async ({ perPage = 6, category = undefined }: { perPage?: number, category?: string } = {}) => {
  if (!domain) throw new Error('WP_DOMAIN missing');
  let url = `${apiBase}/posts?per_page=${perPage}`;
  
  if (category) {
    const catRes = await fetch(`${apiBase}/categories?search=${encodeURIComponent(category)}`);
    if (catRes.ok) {
      const cats = await catRes.json();
      if (cats.length) url += `&categories=${cats[0].id}`;
    }
  }

  const res = await fetch(url, { method: "HEAD" });
  return {
    totalPosts: Number(res.headers.get("X-WP-Total") || 0),
    totalPages: Number(res.headers.get("X-WP-TotalPages") || 0),
  };
};

// Obtener lista de posts
export const getPosts = async ({ perPage = 6, page = 1, category = undefined }: { perPage?: number, page?: number, category?: string } = {}): Promise<WPPost[]> => {
  let url = `${apiBase}/posts?per_page=${perPage}&page=${page}&_embed=1`;
  
  if (category) {
    const catRes = await fetch(`${apiBase}/categories?search=${encodeURIComponent(category)}`);
    if (catRes.ok) {
      const cats = await catRes.json();
      if (cats.length) url += `&categories=${cats[0].id}`;
    }
  }

  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.length) return [];

  return data.map((post: any) => ({
    id: post.id,
    date: post.date,
    slug: post.slug,
    title: cleanText(post.title?.rendered),
    excerpt: cleanText(post.excerpt?.rendered),
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    imageCaption: post._embedded?.["wp:featuredmedia"]?.[0]?.caption?.rendered || "",
    category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "",
    author: post._embedded?.["author"]?.[0]?.name || "",
    content: post.content?.rendered || "",
  }));
};

// Obtener un solo post completo (para [slug])
export const getAllPostsSlugs = async () => {
  // Pedimos 100 para generar las rutas estáticas
  return await getPosts({ perPage: 100 });
};