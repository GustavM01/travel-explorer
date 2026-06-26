export async function getWeather(query) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_PK}&q=${query}&days=1&aqi=no&alerts=no`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch country");
  }

  const data = await response.json();

  return data;
}
