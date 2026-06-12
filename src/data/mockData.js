export const mockDestination = {
  country: {
    name: "Canada",
    officialName: "Canada",

    flag: {
      emoji: "🇨🇦",
      image: "https://flagsapi.com/CA/flat/64.png",
    },

    capital: "Ottawa",

    region: "Americas",

    subregion: "North America",

    population: 41575585,

    area: 9984670,

    languages: ["English", "French"],

    currency: {
      code: "CAD",
      name: "Canadian Dollar",
      symbol: "$",
    },

    timezone: "UTC -5",

    drivingSide: "Right",

    callingCode: "+1",

    website: "https://www.canada.ca",

    shortInfo:
      "Canada is the second-largest country in the world by area, located in North America and stretching from the Atlantic to the Pacific and Arctic oceans.",
  },

  weather: {
    temperature: 21,

    feelsLike: 19,

    condition: "Partly Cloudy",

    humidity: 67,

    windSpeed: 12,

    visibility: 10,
  },

  travel: {
    bestTimeToVisit: "May - September",

    averageDailyBudget: 140,

    safetyRating: 8.5,

    touristPopularity: "High",
  },

  attractions: [
    {
      id: 1,
      name: "Niagara Falls",
      category: "Nature",
    },

    {
      id: 2,
      name: "Banff National Park",
      category: "Nature",
    },

    {
      id: 3,
      name: "CN Tower",
      category: "Landmark",
    },

    {
      id: 4,
      name: "Old Quebec",
      category: "Historic",
    },
  ],

  gallery: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
    },

    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225",
    },

    {
      id: 3,
      image: "https://images.unsplash.com/photo-1508261305436-ae82f86f5a48",
    },

    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ],
};

export const compareDestination = {
  country: {
    name: "Japan",
    flag: {
      emoji: "🇯🇵",
    },

    capital: "Tokyo",

    population: 123900000,

    region: "Asia",

    currency: {
      code: "JPY",
      symbol: "¥",
    },
  },

  weather: {
    temperature: 27,
    condition: "Sunny",
  },

  travel: {
    averageDailyBudget: 180,
    safetyRating: 9.2,
  },
};
