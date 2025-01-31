"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const AboutComponent = dynamic(()=>import("@/app/components/about"),{ssr:false})
const AboutWrapper = () => {
    return (
        <>
            <AboutComponent  />
        </>
    );
};

export default AboutWrapper;
