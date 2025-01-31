"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const HomeComponent = dynamic(()=>import("@/app/components/home"),{ssr:false})
const HomeWrapper = ({ initialData }) => {
    return (
        <>
            <HomeComponent {...initialData} />
        </>
    );
};

export default HomeWrapper;
