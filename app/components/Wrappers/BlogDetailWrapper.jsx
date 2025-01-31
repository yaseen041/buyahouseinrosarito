"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const BlogDetailComponent = dynamic(()=>import("@/app/components/blogDetail"),{ssr:false})
const BlogDetailWrapper = () => {
    return (
        <>
            <BlogDetailComponent  />
        </>
    );
};

export default BlogDetailWrapper;
