"use client";
import dynamic from 'next/dynamic';
const BlogDetailComponent = dynamic(() => import("@/app/components/blogDetail"), { ssr: false })
const BlogDetail = () => {
  return (
   <BlogDetailComponent/>
  )
}

export default BlogDetail