
import BlogDetailWrapper from '@/app/components/Wrappers/BlogDetailWrapper';
import { fetchBlogDetailSEOData } from '../server';

export async function generateMetadata({ params }) {
  
  const resolvedParams = await params;

  if (!resolvedParams?.slug) {
    console.error("Slug not found in params");
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }

  
  const seoData = await fetchBlogDetailSEOData(resolvedParams.slug);

  return {
    title: seoData.title || "Default Title",
    description: seoData.description || "Default Description",
    keywords: seoData.keywords || "Default Keywords",
    openGraph: {
      title: seoData.openGraph?.title || "Default OG Title",
      description: seoData.openGraph?.description || "Default OG Description",
      url: `https://buyhomeinrosarito.com/blog/${resolvedParams.slug}`,
      images: seoData.openGraph?.images || [
        { url: "/default-og-image.jpg", width: 1200, height: 630, alt: "Default Image Alt Text" },
      ],
    },
    twitter: {
      title: seoData.twitter?.title || "Default Twitter Title",
      description: seoData.twitter?.description || "Default Twitter Description",
      image: seoData.twitter?.image || "/default-twitter-image.jpg",
    },
    jsonLd: seoData.jsonLd || "{}",
  };
}



const BlogDetail = async({params}) => {
  const { slug } = await params; 
  return (
    <div>
      
      <BlogDetailWrapper slug={slug} />
     
    </div>
  )
}

export default BlogDetail