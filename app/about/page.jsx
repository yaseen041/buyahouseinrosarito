
import React from 'react';

import { fetchSEOData } from './server';
import AboutWrapper from '../components/Wrappers/AboutWrapper';

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
      url: 'https://buyhomeinrosarito.com/about', // Update if necessary
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


const About = () => {
 


  return (
   <AboutWrapper />

  )
}

export default About