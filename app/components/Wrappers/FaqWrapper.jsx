"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const FaqComponent = dynamic(()=>import("@/app/components/faq"),{ssr:false})
const FaqWrapper = () => {
    return (
        <>
            <FaqComponent  />
        </>
    );
};

export default FaqWrapper;
