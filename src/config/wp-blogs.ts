import { fetchAPI, domain } from "./wp-client";
import { cleanText } from "./wp-utils";

const MAX_BLOGS_PER_PAGE = 100;

const resolveCategoryId = async (category?: string): Promise<number | null> => {
  if (!category) return null;

  try {
    const catRes = await fetch(
      `${domain}/wp-json/wp/v2/categories?search=${encodeURIComponent(category)}`,
    );

    if (!catRes.ok) return null;

    const cats = await catRes.json();
    return cats.length ? cats[0].id : null;
  } catch {
    return null;
  }
};

const headBlogsInfo = async ({
  perPage,
  categoryId,
}: {
  perPage: number;
  categoryId?: number | null;
}) => {
  let url = `/posts?per_page=${perPage}`;

  if (categoryId) {
    url += `&categories=${categoryId}`;
  }

  const res = await fetch(`${domain}/wp-json/wp/v2${url}`, {
    method: "HEAD",
  });

  return {
    totalPosts: Number(res.headers.get("X-WP-Total") || 0),
    totalPages: Number(res.headers.get("X-WP-TotalPages") || 0),
  };
};

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

export interface BlogsPagination {
  currentPage: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
  prevPage: number | null;
  nextPage: number | null;
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
    const safePerPage = Math.min(Math.max(1, perPage), MAX_BLOGS_PER_PAGE);
    const categoryId = await resolveCategoryId(category);
    return await headBlogsInfo({ perPage: safePerPage, categoryId });
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
    const safePerPage = Math.min(Math.max(1, perPage), MAX_BLOGS_PER_PAGE);
    const safePage = Math.max(1, Number.isFinite(page) ? Math.floor(page) : 1);
    const categoryId = await resolveCategoryId(category);

    let endpoint = `/posts?per_page=${safePerPage}&page=${safePage}&_embed=1`;

    if (categoryId) {
      endpoint += `&categories=${categoryId}`;
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

export const getBlogsPagination = async ({
  page = 1,
  perPage = 6,
  category = undefined,
}: {
  page?: number;
  perPage?: number;
  category?: string;
} = {}): Promise<BlogsPagination> => {
  const safePage = Math.max(1, Number.isFinite(page) ? Math.floor(page) : 1);
  const safePerPage = Math.min(Math.max(1, perPage), MAX_BLOGS_PER_PAGE);

  try {
    const categoryId = await resolveCategoryId(category);
    const info = await headBlogsInfo({ perPage: safePerPage, categoryId });
    const totalPagesFromHeader = Number.isFinite(info.totalPages)
      ? Math.floor(info.totalPages)
      : 0;
    const totalPosts = Number.isFinite(info.totalPosts) ? Math.floor(info.totalPosts) : 0;
    const totalPagesFromTotal = totalPosts > 0 ? Math.ceil(totalPosts / safePerPage) : 0;
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
    console.error("Error obteniendo paginación de blogs:", error);
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
