"use client";
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
const BlogComponent = dynamic(() => import("@/app/components/blog"))
const Blog = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}> 
     <BlogComponent />
     </Suspense>
    )
}

export default Blog