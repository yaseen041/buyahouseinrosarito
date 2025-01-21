"use client";
import dynamic from 'next/dynamic';
const BlogComponent = dynamic(() => import("@/app/components/blog"))
const Blog = () => {
    return (
     <BlogComponent />
    )
}

export default Blog