export async function searchCountries(query) {
  const url = `https://api.restcountries.com/countries/v5/name?q=${query}&limit=5`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_COUNTRIES_PK}` },
  });

  if (!response.ok) {
    console.log(response.status);
    console.log(await response.text());
    throw new Error("Failed to fetch country");
  }

  const data = await response.json();

  return data;
}
