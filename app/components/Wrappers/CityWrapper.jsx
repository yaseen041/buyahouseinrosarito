"use client";
import React from 'react';
import dynamic from 'next/dynamic';
const CityComponent = dynamic(()=>import("@/app/components/city"),{ssr:false})
const CityWrapper = () => {
    return (
        <>
            <CityComponent  />
        </>
    );
};

export default CityWrapper;
