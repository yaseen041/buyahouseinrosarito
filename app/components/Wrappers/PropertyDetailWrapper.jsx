"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const PropertyDetailComponent = dynamic(() => import("@/app/components/propertyDetail"),{ssr:false})
const PropertieDetailWrapper = () => {
    return (
        <>
            <PropertyDetailComponent  />
        </>
    );
};

export default PropertieDetailWrapper;
