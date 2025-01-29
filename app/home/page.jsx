import React, { Suspense } from 'react';
import HomeWrapper from '@/app/components/Wrappers/HomeWrapper';
import { fetchHomeData, fetchSEOData } from './server';

// ✅ This must be a Server Component (NO 'use client' here)

export async function generateMetadata() {
    const seoData = await fetchSEOData(); 
    
    return {
        title: seoData?.title || 'Default Title',
        description: seoData?.description || 'Default description',
    };
}

export default async function HomePage() {
    const data = await fetchHomeData(); // ✅ Fetch main page data on the server
    const seoData = await fetchSEOData();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeWrapper initialData={data} seoData={seoData} />
        </Suspense>
    );
}
