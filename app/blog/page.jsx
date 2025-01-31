
import { Suspense } from 'react';
import BlogWrapper from '../components/Wrappers/BlogWrapper';
import { fetchSEOData } from './server';

export const metadata = async () => {
  // Fetch the SEO data
  const seoData = await fetchSEOData();

  return {
    title: seoData.title || 'Default Title', // Use a fallback if necessary
    description: seoData.description || 'Default Description',
    keywords: seoData.keywords || 'Default Keywords',
    openGraph: {
      title: seoData.title || 'Default FB Title',
      description: seoData.description || 'Default FB Description',
      url: 'https://buyhomeinrosarito.com/blog', // Update if necessary
      images: [
        {
          url: seoData.image, // Use the image URL
          width: 1200,
          height: 630,
          alt: seoData.fb_title || 'Default Image Alt Text',
        },
      ],
    },
    twitter: {
      title: seoData.title || 'Default Twitter Title',
      description: seoData.description || 'Default Twitter Description',
      image: seoData.image,
    },
    jsonLd: seoData.jsonLd || '{}', // JSON-LD data
  };
};
const Blog = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}> 
     <BlogWrapper />
     </Suspense>
    )
}

export default Blog