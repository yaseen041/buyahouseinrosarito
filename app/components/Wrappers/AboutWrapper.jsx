import React from 'react';
import dynamic from 'next/dynamic';
import AboutComponent from '../about';
// const AboutComponent = dynamic(()=>import("@/app/components/about"),{ssr:false})
const AboutWrapper = ({search}) => {
    return (
        <>
            <AboutComponent  />
        </>
    );
};

export default AboutWrapper;
