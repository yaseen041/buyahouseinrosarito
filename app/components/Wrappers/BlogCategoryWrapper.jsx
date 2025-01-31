"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const CategoryComponent = dynamic(()=>import("@/app/components/category"),{ssr:false})
const BlogCategoryWrapper = () => {
    return (
        <>
            <CategoryComponent  />
        </>
    );
};

export default BlogCategoryWrapper;
