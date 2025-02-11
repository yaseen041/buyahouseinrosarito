
import React from 'react'
import CityWrapper from '@/app/components/Wrappers/CityWrapper';
import { fetchSEOData } from '../server';
export async function generateMetadata({ params }) {
  
  const resolvedParams = await params;

  if (!resolvedParams?.slug) {
    console.error("Slug not found in params");
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }

  // Fetch SEO data using the slug
  const seoData = await fetchSEOData(resolvedParams.slug);

  return {
    title: seoData.title || "Default Title",
    description: seoData.description || "Default Description",
    keywords: seoData.keywords || "Default Keywords",
    openGraph: {
      title: seoData.openGraph?.title || "Default OG Title",
      description: seoData.openGraph?.description || "Default OG Description",
      url: `https://buyhomeinrosarito.com/city/${resolvedParams.slug}`,
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


const CityProperties = () => {
   

    return (
        <div>
            <CityWrapper 
            />
        </div>
    )
}

export default CityProperties