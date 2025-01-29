  
import React from 'react';
import HomeComponent from '@/app/components/home';

const HomeWrapper = ({ initialData,seoData }) => {
   console.log("seo data.......",seoData)
    return <HomeComponent {...initialData}/>;
};

export default HomeWrapper;
