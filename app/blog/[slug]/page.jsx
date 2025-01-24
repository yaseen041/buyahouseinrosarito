import dynamic from 'next/dynamic';
const BlogDetailComponent = dynamic(() => import("@/app/components/blogDetail"))
import { Suspense } from 'react';
const BlogDetail = () => {
  
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}> 
      <BlogDetailComponent/>
      </Suspense>
    </div>
  )
}

export default BlogDetail