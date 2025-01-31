import ContactWrapper from '../components/Wrappers/ContactWrapper';
import { fetchSEOData } from './server';

export const metadata = async () => {
  
  const seoData = await fetchSEOData();

  return {
    title: seoData.title || 'Default Title', 
    description: seoData.description || 'Default Description',
    keywords: seoData.keywords || 'Default Keywords',
    openGraph: {
      title: seoData.title || 'Default FB Title',
      description: seoData.description || 'Default FB Description',
      url: 'https://buyhomeinrosarito.com/contact', 
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
    jsonLd: seoData.jsonLd || '{}', 
  };
};

const Contact = () => {
  

    return (
     <ContactWrapper />
    )
}

export default Contact