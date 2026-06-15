export async function getImages(query) {
  const url = `https://api.pexels.com/v1/search?query=${query}&orientation=landscape&per_page=4`;
  const response = await fetch(url, {
    headers: { Authorization: `${import.meta.env.VITE_PEXELS_PK}` },
  });

  if (!response.ok) {
    console.log(response.status);
    console.log(await response.text());
    throw new Error("Failed to fetch images");
  }

  const data = await response.json();

  return data.photos;
}
