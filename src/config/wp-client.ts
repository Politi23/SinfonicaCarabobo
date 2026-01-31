export const domain = import.meta.env.WP_DOMAIN || "http://localhost:10004"; 
export const apiBase = `${domain}/wp-json/wp/v2`;

export const fetchAPI = async (endpoint: string) => {
  const res = await fetch(`${apiBase}${endpoint}`);
  if (!res.ok) {
    console.error(`Error fetching ${endpoint}: ${res.statusText}`);
    return null;
  }
  return await res.json();
};