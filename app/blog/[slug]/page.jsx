import dynamic from 'next/dynamic';
const BlogDetailComponent = dynamic(() => import("@/app/components/blogDetail"))

const BlogDetail = () => {
  
  return (
    <div>
      <BlogDetailComponent/>
    </div>
  )
}

export default BlogDetail