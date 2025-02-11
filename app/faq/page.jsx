import FaqWrapper from '../components/Wrappers/FaqWrapper';
import { fetchSEOData } from './server';

export async function generateMetadata() {
  // Fetch the SEO data
  const seoData = await fetchSEOData();

  return {
    title: seoData.title || 'Default Title', // Use a fallback if necessary
    description: seoData.description || 'Default Description',
    keywords: seoData.keywords || 'Default Keywords',
    openGraph: {
      title: seoData.title || 'Default FB Title',
      description: seoData.description || 'Default FB Description',
      url: 'https://buyhomeinrosarito.com/faq', // Update if necessary
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


const page = () => {
  return (
  <FaqWrapper />
  )
}

export default page