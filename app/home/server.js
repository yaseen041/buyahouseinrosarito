import { api } from "@/app/utils/api";
import { url } from "@/app/utils/urls";

// ✅ Fetch SEO metadata
export async function fetchSEOData() {
    try {
      const data = await api.Get(url.HOME_SEO);
      if (data) {
        return {
          title: data.data.meta_title || "Default Title",
          description: data.data.meta_description || "Default Description",
          openGraph: {
            title: data.data.fb_title || "Default OG Title",
            description: data.data.fb_description || "Default OG Description",
            images: [{ url: data.data.fb_image || "/default-og-image.jpg" }],
          },
          twitter: {
            title: data.data.twitter_title || "Default Twitter Title",
            description: data.data.twitter_description || "Default Twitter Description",
            image: data.data.twitter_image || "/default-twitter-image.jpg",
          },
          jsonLd: data.data.json_ld_code || '{}', // JSON-LD structured data
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
