


import { fetchSEOData } from './server';
import HomeWrapper from './components/Wrappers/HomeWrapper';
export async function generateMetadata() {
  // Fetch the SEO data
  const seoData = await fetchSEOData();

  return {
    title: seoData.title || 'Default Title',
    description: seoData.description || 'Default Description',
    keywords: seoData.keywords || 'Default Keywords',
    openGraph: {
      title: seoData.title || 'Default FB Title',
      description: seoData.description || 'Default FB Description',
      url: 'https://buyhomeinrosarito.com', 
      images: [
        {
          url: seoData.image, 
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


export default async function Home({searchParams}) {
    const search = await searchParams
    
    return (    
      <>
      
                <HomeWrapper search={search}  />
      </>

    );
}
