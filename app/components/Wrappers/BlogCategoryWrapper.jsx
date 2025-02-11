import React from 'react';
import CategoryBlogComponent from '@/app/components/category';

const BlogCategoryWrapper = ({slug,search}) => {
    
    return (
        <>
            <CategoryBlogComponent slug={slug} searchParams={search}  />
        </>
    );
};

export default BlogCategoryWrapper;
