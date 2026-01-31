import { fetchAPI } from "./wp-client";
import { cleanText } from "./wp-utils";

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

// Obtener información general (para paginación)
export const getPostsInfo = async ({ perPage = 6, category = undefined }: { perPage?: number, category?: string } = {}) => {
  if (!import.meta.env.WP_DOMAIN) throw new Error('WP_DOMAIN missing');
  let url = `/posts?per_page=${perPage}`;

  if (category) {
    const catRes = await fetch(`${import.meta.env.WP_DOMAIN}/wp-json/wp/v2/categories?search=${encodeURIComponent(category)}`);
    if (catRes.ok) {
      const cats = await catRes.json();
      if (cats.length) url += `&categories=${cats[0].id}`;
    }
  }

  const res = await fetch(import.meta.env.WP_DOMAIN + "/wp-json/wp/v2" + url, { method: "HEAD" });
  return {
    totalPosts: Number(res.headers.get("X-WP-Total") || 0),
    totalPages: Number(res.headers.get("X-WP-TotalPages") || 0),
  };
};

// Obtener lista de posts
export const getPosts = async ({ perPage = 6, page = 1, category = undefined }: { perPage?: number, page?: number, category?: string } = {}): Promise<WPPost[]> => {
  let url = `/posts?per_page=${perPage}&page=${page}&_embed=1`;

  if (category) {
    const catRes = await fetch(`${import.meta.env.WP_DOMAIN}/wp-json/wp/v2/categories?search=${encodeURIComponent(category)}`);
    if (catRes.ok) {
      const cats = await catRes.json();
      if (cats.length) url += `&categories=${cats[0].id}`;
    }
  }

  const data = await fetchAPI(url);
  if (!data || !Array.isArray(data)) return [];

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