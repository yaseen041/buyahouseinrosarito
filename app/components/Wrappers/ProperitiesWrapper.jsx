"use client";
import React from 'react';
import PropertyComponent from '@/app/components/property';
const PropertiesWrapper = ({search}) => {
    return (
        <>
            <PropertyComponent search={search}  />
        </>
    );
};

export default PropertiesWrapper;
