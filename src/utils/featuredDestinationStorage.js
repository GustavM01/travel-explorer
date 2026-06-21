const FEATURED_DESTINATION = "featuredDestination";
const TWO_WEEKS = 24 * 60 * 60 * 14 * 1000;

export function saveFeaturedDestination(destination) {
  const data = {
    savedAt: Date.now(),
    destination,
  };

  localStorage.setItem(FEATURED_DESTINATION, JSON.stringify(data));
}

export function getFeaturedDestination() {
  try {
    const saved = localStorage.getItem(FEATURED_DESTINATION);
    if (!saved) return null;

    const parsed = JSON.parse(saved);
    const isFresh = Date.now() - parsed.savedAt < TWO_WEEKS;

    if (!isFresh) {
      localStorage.removeItem(FEATURED_DESTINATION);
      return null;
    }

    return parsed.destination;
  } catch {
    localStorage.removeItem(FEATURED_DESTINATION);
    return null;
  }
}
