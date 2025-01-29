import { api } from "@/app/utils/api";
import { url } from "@/app/utils/urls";

// ✅ Fetch SEO metadata
export async function fetchSEOData() {
  try {
    const data = await api.Get(url.HOME_SEO);
    if (data) {
      return {
        title: data.data.title || "Default Title",
        description: data.data.description || "Default Description",
        openGraph: {
          title: data.data.ogTitle || "Default OG Title",
          description: data.data.ogDescription || "Default OG Description",
          images: [{ url: data.data.ogImage || "/default-og-image.jpg" }],
        },
      };
    }
  } catch (error) {
    console.log("SEO fetch error:", error);
  }
  return {};
}

// ✅ Fetch all required data in parallel
export async function fetchHomeData() {
  try {
    const [
      types,
      cities,
      recentForRent,
      recentForSale,
      communities,
      filters,
      bestDeals,
    ] = await Promise.all([
      api.Get(url.PROPERTY_TYPES).then((res) => res.data).catch(() => []),
      api.Get(url.CITIES).then((res) => res.data).catch(() => []),
      api.Get(url.RECENT_FOR_RENT).then((res) => res.data).catch(() => []),
      api.Get(url.RECENT_FOR_SALE).then((res) => res.data).catch(() => []),
      api.Get(url.COMMUNITY).then((res) => res.data).catch(() => []),
      api.Get(url.FILTERS).then((res) => res.data).catch(() => []),
      api.Get(url.BESTDEALS).then((res) => res.data).catch(() => []),
    ]);

    return {
      types,
      cities,
      recentForRent,
      recentForSale,
      community: communities,
      filters,
      BestDeals: bestDeals,
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return {}; // Return empty object to prevent crashes
  }
}
