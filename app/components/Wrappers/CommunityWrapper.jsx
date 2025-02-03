"use client";
import React from 'react';
import dynamic from 'next/dynamic';
const CommunityComponent = dynamic(()=>import("@/app/components/community"),{ssr:false})
const CommunityWrapper = () => {
    return (
        <>
            <CommunityComponent  />
        </>
    );
};

export default CommunityWrapper;
