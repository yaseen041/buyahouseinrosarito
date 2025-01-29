import React, { Suspense } from 'react';
import HomeWrapper from '@/app/components/Wrappers/HomeWrapper';
import { fetchHomeData, fetchSEOData } from './server';




export default async function HomePage() {
    const seoData = await fetchSEOData(); 
    const homeData = await fetchHomeData();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeWrapper initialData={homeData} seoData={seoData} />
        </Suspense>
    );
}
