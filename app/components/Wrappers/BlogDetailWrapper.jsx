import React from 'react';

import BlogDetail from '@/app/components/blogDetail';

const BlogDetailWrapper = ({slug}) => {
    return (
        <>
            <BlogDetail slug={slug}  />
        </>
    );
};

export default BlogDetailWrapper;
