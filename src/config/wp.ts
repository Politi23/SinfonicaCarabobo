const domain = import.meta.env.WP_DOMAIN
const apiBase = `${domain}/wp-json/wp/v2`

export const getPage = async (slug: string) => {
  const response = await fetch(`${apiBase}/pages?slug=${slug}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch page info for slug: ${slug}`)
  }
  const data = await response.json()
  return data[0]
}

export const getPosts = async ({ perPage = 2} : {perPage?: number} = {}) => {
  if (!domain) throw new Error('WP_DOMAIN environment variable is not set')
  // Request embedded resources so we can access featured media and terms
  const response = await fetch(`${apiBase}/posts?per_page=${perPage}&_embed=1`)
  if (!response.ok) {
    throw new Error(`Failed to fetch posts`)
  }
  const data = await response.json()
  if (!data.length) {
    throw new Error(`No posts found`)
  }
  const posts = data.map((post: any) => {
    const date: string = post.date
    const slug: string = post.slug

    // Title & excerpt come as rendered HTML from WP; strip tags for summary
    const titleRaw = post.title?.rendered || ''
    const excerptRaw = post.excerpt?.rendered || ''
    const stripHtml = (s: string) => s.replace(/<[^>]*>/g, '').trim()
    const title = stripHtml(titleRaw)
    const excerpt = stripHtml(excerptRaw)

    // Featured image (using _embedded)
    let image = ''
    try {
      const fm = post._embedded?.['wp:featuredmedia']?.[0]
      image = fm?.source_url || ''
    } catch (e) {
      image = ''
    }

    // Category: take first term in taxonomy if present
    let category = ''
    try {
      const terms = post._embedded?.['wp:term']?.[0]
      category = terms?.[0]?.name || ''
    } catch (e) {
      category = ''
    }

    return { date, title, excerpt, slug, image, category }
  })
  return posts
}

export const getPost = async (slug: string) => {
  if (!domain) throw new Error('WP_DOMAIN environment variable is not set')
  const response = await fetch(`${apiBase}/posts?slug=${slug}&_embed=1`)
  if (!response.ok) throw new Error('Failed to fetch post')
  const data = await response.json()
  const post = data?.[0]
  if (!post) return null

  const stripHtml = (s: string) => (s || '').replace(/<[^>]*>/g, '').trim()
  const title = stripHtml(post.title?.rendered || '')
  const excerpt = stripHtml(post.excerpt?.rendered || '')
  const date = post.date
  const slugOut = post.slug

  let image = ''
  try {
    image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''
  } catch (e) {
    image = ''
  }

  let category = ''
  try {
    category = post._embedded?.['wp:term']?.[0]?.[0]?.name || ''
  } catch (e) {
    category = ''
  }

  return { title, excerpt, date, slug: slugOut, image, category, content: post.content?.rendered || '' }
}