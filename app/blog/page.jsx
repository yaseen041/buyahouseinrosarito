"use client";
import dynamic from 'next/dynamic';
const BlogComponent = dynamic(() => import("@/app/components/blog"), { ssr: false })
const Blog = () => {
    return (
     <BlogComponent />
    )
}

export default Blog