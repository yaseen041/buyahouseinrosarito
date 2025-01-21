
import dynamic from 'next/dynamic';
const BlogDetailComponent = dynamic(() => import("@/app/components/blogDetail"))

export async function generateStaticParams() {
  const slugs = ['property1', 'property2', 'property3']; // List your slugs here

  return slugs.map((slug) => ({
    slug: slug  // The dynamic parameter for the route (in this case, [slug])
  }));
}

const BlogDetail = ({params}) => {
  const { slug } = params;
  return (
    <div>
      <h1>Property: {slug}</h1>
      <BlogDetailComponent/>
    </div>
  )
}

export default BlogDetail