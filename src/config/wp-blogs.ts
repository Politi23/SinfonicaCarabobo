import { fetchAPI, domain } from "./wp-client";
import { cleanText } from "./wp-utils";

export interface WPBlog {
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
export const getBlogsInfo = async ({
  perPage = 6,
  category = undefined,
}: {
  perPage?: number;
  category?: string;
} = {}) => {
  try {
    let url = `/posts?per_page=${perPage}`;

    // Lógica para filtrar por categoría, ACF soporta categorías estándar
    if (category) {
      const catRes = await fetch(
        `${domain}/wp-json/wp/v2/categories?search=${encodeURIComponent(category)}`
      );
      if (catRes.ok) {
        const cats = await catRes.json();
        if (cats.length) url += `&categories=${cats[0].id}`;
      }
    }

    // Hacemos fetch manual (HEAD) porque necesitamos leer los headers, 
    // y fetchAPI suele devolver el JSON directo.
    const res = await fetch(`${domain}/wp-json/wp/v2${url}`, {
      method: "HEAD",
    });

    return {
      totalPosts: Number(res.headers.get("X-WP-Total") || 0),
      totalPages: Number(res.headers.get("X-WP-TotalPages") || 0),
    };
  } catch (error) {
    console.error("Error obteniendo la información de blogs:", error);
    return {
      totalPosts: 0,
      totalPages: 0,
    };
  }
};

// Obtener lista de blogs
export const getBlogs = async ({
  perPage = 6,
  page = 1,
  category = undefined,
}: {
  perPage?: number;
  page?: number;
  category?: string;
} = {}): Promise<WPBlog[]> => {
  try {
    let endpoint = `/posts?per_page=${perPage}&page=${page}&_embed=1`;

    if (category) {
      const catRes = await fetch(
        `${domain}/wp-json/wp/v2/categories?search=${encodeURIComponent(category)}`
      );
      if (catRes.ok) {
        const cats = await catRes.json();
        if (cats.length) endpoint += `&categories=${cats[0].id}`;
      }
    }

    const data = await fetchAPI(endpoint);

    if (!data || !Array.isArray(data)) return [];

    return data.map((post: any) => ({
      id: post.id,
      date: post.date,
      slug: post.slug,
      title: cleanText(post.title?.rendered),
      excerpt: cleanText(post.excerpt?.rendered),
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
      imageCaption:
        post._embedded?.["wp:featuredmedia"]?.[0]?.caption?.rendered || "",
      category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "",
      author: post._embedded?.["author"]?.[0]?.name || "",
      content: post.content?.rendered || "",
    }));
  } catch (error) {
    console.error("Error obteniendo los blogs:", error);
    return [];
  }
};

export const getAllBlogsRecursive = async () => {
  const { totalPages } = await getBlogsInfo({ perPage: 100 });
  let allBlogs: WPBlog[] = [];

  for (let i = 1; i <= totalPages; i++) {
    const blogsBatch = await getBlogs({ perPage: 100, page: i });
    allBlogs = [...allBlogs, ...blogsBatch];
  }

  return allBlogs;
};

// Obtener un solo blog por slug (útil para el detalle [slug].astro)
export const getBlogBySlug = async (slug: string): Promise<WPBlog | null> => {
  const data = await fetchAPI(`/posts?slug=${slug}&_embed=1`);

  if (!data || !Array.isArray(data) || data.length === 0) return null;

  const post = data[0];

  return {
    id: post.id,
    date: post.date,
    slug: post.slug,
    title: cleanText(post.title?.rendered),
    excerpt: cleanText(post.excerpt?.rendered),
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    imageCaption:
      post._embedded?.["wp:featuredmedia"]?.[0]?.caption?.rendered || "",
    category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "",
    author: post._embedded?.["author"]?.[0]?.name || "",
    content: post.content?.rendered || "",
  };
};