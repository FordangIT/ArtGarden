export async function loadNew() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3060/api/performances/new");
  const data = await res.json();
  return data;
}

export async function loadBest() {
  try {
    const response = await fetch("http://localhost:3060/api/performances/best");
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error fetching datat", error);
  }
}
