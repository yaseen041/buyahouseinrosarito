"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const BlogComponent = dynamic(()=>import("@/app/components/blog"),{ssr:false})
const BlogWrapper = () => {
    return (
        <>
            <BlogComponent  />
        </>
    );
};

export default BlogWrapper;
