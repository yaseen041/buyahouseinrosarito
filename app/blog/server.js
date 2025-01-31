import { api } from "../utils/api";
import { url } from "../utils/urls";

export async function fetchSEOData() {
    try {
      const data = await api.Get(url.BLOG_SEO);
      if (data) {
        return {
          title: data.data.meta_title || "Default Title",
          description: data.data.meta_description || "Default Description",
          keywords:data.data.meta_keywords || "buyahouse, rosarito",
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

  export async function fetchBlogDetailSEOData(slug) {
    try {
        
        const data = await api.Get(`${url.SINGLEBLOG}${slug}`);
        if (Object.keys(data).length>0) {
            return {
                title: data.data.meta_title || "Default Title",
                description: data.data.meta_description || "Default Description",
                keywords: data.data.meta_keywords || "buyahouse, rosarito",
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