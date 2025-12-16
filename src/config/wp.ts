const domain = import.meta.env.WP_DOMAIN
const apiBase = `${domain}/wp-json/wp/v2`

function decodeHtmlEntities(text: string): string {
    if (!text) return "";
    return text.replace(/&#(\d+);/g, (match, dec) => {
        return String.fromCharCode(dec);
    }).replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

export const getPage = async (slug: string) => {
  const response = await fetch(`${apiBase}/pages?slug=${slug}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch page info for slug: ${slug}`)
  }
  const data = await response.json()
  return data[0]
}

export const getPosts = async ({ perPage = 100, page = 1 } : {perPage?: number, page?: number} = {}) => {
  if (!domain) throw new Error('WP_DOMAIN environment variable is not set')
  // Request embedded resources so we can access featured media and terms
  const response = await fetch(`${apiBase}/posts?per_page=${perPage}&page=${page}&_embed=1`)
  if (!response.ok) {
    throw new Error(`Failed to fetch posts`)
  }
  const data = await response.json()
  if (!data.length) {
    console.log(`No posts found for page ${page}`)
    return []
  }
  const posts = data.map((post: any) => {
    const date: string = post.date
    const slug: string = post.slug

    // Title & excerpt come as rendered HTML from WP; strip tags for summary
    const titleRaw = post.title?.rendered || ''
    const excerptRaw = post.excerpt?.rendered || ''
    const stripHtml = (s: string) => s.replace(/<[^>]*>/g, '').trim()
    const title = decodeHtmlEntities(stripHtml(titleRaw))
    const excerpt = decodeHtmlEntities(stripHtml(excerptRaw))

    // Featured image (using _embedded)
    let image = ''
    let imageCaption = ''
    try {
      const fm = post._embedded?.['wp:featuredmedia']?.[0]
      image = fm?.source_url || ''
      imageCaption = fm?.caption?.rendered || ''
    } catch (e) {
      image = ''
      imageCaption = ''
    }

    // Category: take first term in taxonomy if present
    let category = ''
    try {
      const terms = post._embedded?.['wp:term']?.[0]
      category = terms?.[0]?.name || ''
    } catch (e) {
      category = ''
    }

    let author = ''
    try {
      author = post._embedded?.['author']?.[0]?.name || ''
    } catch (e) {
      author = ''
    }

    return { date, title, excerpt, slug, image, imageCaption, category, author }
  })
  return posts
}

export const getPostsInfo = async ({ perPage = 1 }: { perPage?: number } = {}) => {
  if (!domain) throw new Error('WP_DOMAIN environment variable is not set')

  // Make a HEAD request to get headers without the body
  const response = await fetch(`${apiBase}/posts?per_page=${perPage}`, { method: 'HEAD' });
  if (!response.ok) {
    throw new Error('Failed to fetch post info');
  }

  const totalPosts = Number(response.headers.get('X-WP-Total') || 0);
  const totalPages = Number(response.headers.get('X-WP-TotalPages') || 0);

  return { totalPosts, totalPages };
}

export const getPost = async (slug: string) => {
  if (!domain) throw new Error('WP_DOMAIN environment variable is not set')
  const response = await fetch(`${apiBase}/posts?slug=${slug}&_embed=1`)
  if (!response.ok) throw new Error('Failed to fetch post')
  const data = await response.json()
  const post = data?.[0]
  if (!post) return null

  const title = post.title?.rendered || ''
  const excerpt = post.excerpt?.rendered || ''
  const date = post.date
  const slugOut = post.slug

  let image = ''
  let imageCaption = ''
  try {
    const fm = post._embedded?.['wp:featuredmedia']?.[0]
    image = fm?.source_url || ''
    imageCaption = fm?.caption?.rendered || ''
  } catch (e) {
    image = ''
    imageCaption = ''
  }

  let category = ''
  try {
    category = post._embedded?.['wp:term']?.[0]?.[0]?.name || ''
  } catch (e) {
    category = ''
  }

  let author = ''
  try {
    author = post._embedded?.['author']?.[0]?.name || ''
  } catch (e) {
    author = ''
  }

  return { title, excerpt, date, slug: slugOut, image, imageCaption, category, author, content: post.content?.rendered || '' }
}