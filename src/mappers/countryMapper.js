export const mapCountry = (country) => {
  return {
    name: country?.names?.common,
    officialName: country?.names?.official,

    flag: {
      emoji: country?.flag?.emoji,
      image: country?.flag?.url_png,
    },

    capital: country?.capitals?.[0]?.name,

    region: country?.region,
    subregion: country?.subregion,

    population: country?.population,

    area: {
      kilometers: country?.area?.kilometers,
      miles: country?.area?.miles,
    },

    languages:
      country?.languages?.map((lang) => ({
        name: lang?.name,
        native_name: lang?.native_name,
      })) || [],

    codes: country?.codes,

    currency: country?.currencies?.[0]
      ? {
          code: country.currencies[0].code,
          name: country.currencies[0].name,
          symbol: country.currencies[0].symbol,
        }
      : null,

    timezone: country?.timezones?.[0],

    drivingSide: country?.cars?.driving_side,

    callingCode: country?.calling_codes?.[0],

    website: country?.links?.official,

    shortInfo:
      country?.names?.official ||
      `${name} is a beautiful country worth exploring.`,

    weather: {},

    gallery: [],
  };
};
