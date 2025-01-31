"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const PropertyComponent = dynamic(() => import("@/app/components/property"),{ssr:false})
const PropertiesWrapper = () => {
    return (
        <>
            <PropertyComponent  />
        </>
    );
};

export default PropertiesWrapper;
