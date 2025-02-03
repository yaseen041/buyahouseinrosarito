import { url } from "../utils/urls";
import { api } from "../utils/api";

export async function fetchSEOData(slug) {
    try {
        const data = await api.Get(`${url.COOMUNITY_PAGE}/${slug}`);
        if (data) {
            return {
                title: data.response.neighborhood.meta_title || "Default Title",
                description: data.response.neighborhood.meta_description || "Default Description",
                keywords: data.response.neighborhood.meta_keywords || "buyahouse, rosarito",
                openGraph: {
                    title: data.response.neighborhood.fb_title || "Default OG Title",
                    description: data.response.neighborhood.fb_description || "Default OG Description",
                    images: [{ url: data.response.neighborhood.fb_image || "/default-og-image.jpg" }],
                },
                twitter: {
                    title: data.response.neighborhood.twitter_title || "Default Twitter Title",
                    description: data.response.neighborhood.twitter_description || "Default Twitter Description",
                    image: data.response.neighborhood.twitter_image || "/default-twitter-image.jpg",
                },
                jsonLd: data.response.neighborhood.json_ld_code || '{}', // JSON-LD structured data
            };
        }
    } catch (error) {
        console.log("SEO fetch error:", error);
    }
    return {};
}