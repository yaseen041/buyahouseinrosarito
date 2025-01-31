"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const ContactComponent = dynamic(()=>import("@/app/components/contact"),{ssr:false})
const ContactWrapper = () => {
    return (
        <>
            <ContactComponent  />
        </>
    );
};

export default ContactWrapper;
