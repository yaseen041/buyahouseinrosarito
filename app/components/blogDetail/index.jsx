"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header3 from "../header3";
import Footer from "../footer";
import Link from "next/link";
import CustomScript from "@/app/scripts";
import Head from "next/head";
import Loader from "../loader/Loader";
import { url } from "@/app/utils/urls";
import NotFound from "../NotFound/NotFound";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchBlogData = async () => {
        try {
          const response = await fetch(`${url.SINGLEBLOG}${slug}`);
          if (!response.ok) {
            throw new Error("Failed to fetch blog data");
          }
          const data = await response.json();
          setBlog(data.data);
          setRelatedBlog(data.data.relevant_blogs);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchBlogData();
    }
  }, [url, slug]);

  return (
    <>
    <Head>
          <title>{"El Real Estate | Blog | " +blog?.title }</title>
          <meta name="description" content={blog?.meta_description || ""} />
          <meta name="keywords" content={blog?.meta_keywords || ""} />
          <meta property="og:title" content={blog?.fb_title || blog?.meta_title || ""} />
          <meta property="og:description" content={blog?.fb_description || blog?.meta_description || ""} />
          <meta property="og:image" content={blog?.fb_image || ""} />
          <meta property="og:url" content={`https://yourwebsite.com/blog/${blog?.slug}`} />
          <meta name="twitter:title" content={blog?.twitter_title || blog?.meta_title || ""} />
          <meta name="twitter:description" content={blog?.twitter_description || blog?.meta_description || ""} />
          <meta name="twitter:image" content={blog?.twitter_image || ""} />
          <script type="application/ld+json">
          {blog?.json_ld_code || "{}"}
          </script>
    </Head>
        <div id="wrapper">
          <div id="page" className="">
            <Header3 />
            <div className="main-content spacing-20">
              <div className="blog-single-wrap">
                {loading ? (
                  <Loader />
                ) : (
                  blog === null ? 
                  <NotFound message="We couldn't find any post." />
                    :
                    <>
                    <div className="image-head">
                      <img src={blog.featured_image} alt={blog.title} />
                    </div>

                    <div className="cl-container">
                      <div className="row justify-center">
                        <div className="col-xl-8 col-12">
                          <div className="blog-single-inner">
                            <div>
                              <h2 className="wow fadeInUp">{blog.title}</h2>
                              <div className="sub-blog style-color wow fadeInUp">
                                <div>{blog.category.title}</div>
                                <div>
                                  {" "}
                                  {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }).format(new Date(blog.publish_date))}
                                </div>
                              </div>
                            </div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: blog.description,
                              }}
                              className="blog_content"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* wg-related-posts */}
              <div className="wg-related-posts">
                <div className="cl-container">
                  <div className="row">
                    <div className="col-12">
                      <div className="heading-section text-center">
                        <h2 className="wow fadeInUp">Related Posts</h2>
                        <div className="text wow fadeInUp">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    {relatedblog.length > 0 ? (
                      relatedblog.map((blog) => (
                        <div className="col-xl-3 col-lg-6 col-12" key={blog.id}>
                          <div className="wg-blog wow fadeInUp">
                            <div className="image">
                              <img
                                src={
                                  blog.featured_image ||
                                  "/assets/images/blog/blog-grid-1.jpg"
                                }
                                alt={blog.title || "Blog Image"}
                              />
                            </div>
                            <div className="content">
                              <div className="sub-blog">
                                <div>{blog.category?.title}</div>
                                <div>
                                  {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }).format(new Date(blog.publish_date))}
                                </div>
                              </div>
                              <div className="name">
                                <Link href={`/blog/${blog.slug}`}>
                                  {blog.title || "Untitled Blog"}
                                </Link>
                              </div>
                              <Link
                                href={`/blog/${blog.slug}`}
                                className="tf-button-no-bg"
                              >
                                Read More
                                <i className="icon-arrow-right-add" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-xl-3 col-lg-6 col-12">
                        <div className=" wow fadeInUp">
                        <NotFound message="We couldn't find any related post." />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>

        <CustomScript
          src="/assets/js/jquery.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            if (window.jQuery) {
              console.log("jQuery loaded successfully.");
            }
          }}
          onError={(e) => console.error("Failed to load jQuery:", e)}
        />
        <CustomScript
          src="/assets/js/jquery.fancybox.js"
          strategy="afterInteractive"
        />
        <CustomScript
          src="/assets/js/jquery.nice-select.min.js"
          strategy="afterInteractive"
        />
        <CustomScript
          src="/assets/js/magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <CustomScript src="/assets/js/main.js" />
    </>
  );
};

export default BlogDetail;
