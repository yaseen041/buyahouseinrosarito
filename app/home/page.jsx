import React, { Suspense } from 'react';
import HomeWrapper from '@/app/components/Wrappers/HomeWrapper';
import { fetchHomeData, fetchSEOData } from './server';
import Head from 'next/head';



export default async function HomePage() {
    const seoData = await fetchSEOData();
    const homeData = await fetchHomeData();
    const { title, description, openGraph, twitter, jsonLd } = seoData || {};
    return (
        <>
            <Head>
                <title>{title || 'Default Title'}</title>
                <meta name="description" content={description || 'Default description'} />
                <meta property="og:title" content={openGraph?.title || 'Default OG Title'} />
                <meta property="og:description" content={openGraph?.description || 'Default OG Description'} />
                <meta property="og:image" content={openGraph?.images?.[0]?.url || '/default-og-image.jpg'} />
                <meta name="twitter:title" content={twitter?.title || 'Default Twitter Title'} />
                <meta name="twitter:description" content={twitter?.description || 'Default Twitter Description'} />
                <meta name="twitter:image" content={twitter?.image || '/default-twitter-image.jpg'} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
            </Head>
            <Suspense fallback={<div>Loading...</div>}>
                <HomeWrapper initialData={homeData} seoData={seoData} />
            </Suspense>
        </>

    );
}
