import React from 'react';
import BlogComponent from '@/app/components/blog';

const BlogWrapper = ({search}) => {
    return (
        <>
            <BlogComponent searchParams={search} />
        </>
    );
};

export default BlogWrapper;
