import { url } from "../utils/urls";
import { api } from "../utils/api";

export async function fetchSEOData(slug) {
    try {
        const data = await api.Get(`${url.CITY_PAGE}/${slug}`);
        if (data) {
            return {
                title: data.response.city.meta_title || "Default Title",
                description: data.response.city.meta_description || "Default Description",
                keywords: data.response.city.meta_keywords || "buyahouse, rosarito",
                openGraph: {
                    title: data.response.city.fb_title || "Default OG Title",
                    description: data.response.city.fb_description || "Default OG Description",
                    images: [{ url: data.response.city.fb_image || "/default-og-image.jpg" }],
                },
                twitter: {
                    title: data.response.city.twitter_title || "Default Twitter Title",
                    description: data.response.city.twitter_description || "Default Twitter Description",
                    image: data.response.city.twitter_image || "/default-twitter-image.jpg",
                },
                jsonLd: data.response.city.json_ld_code || '{}', // JSON-LD structured data
            };
        }
    } catch (error) {
        console.log("SEO fetch error:", error);
    }
    return {};
}