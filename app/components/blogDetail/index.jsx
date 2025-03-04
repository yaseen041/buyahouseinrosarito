"use client";
import { useState, useEffect } from "react";
import Header3 from "../header3";
import Footer from "../footer";
import Link from "next/link";
import CustomScript from "@/app/scripts";
import Loader from "../loader/Loader";
import { url } from "@/app/utils/urls";
import NotFound from "../NotFound/NotFound";
import HomeSizeCalculator from "../SizeCalculeter";
import parse from "html-react-parser";

const BlogDetail = ({slug}) => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function truncate(text, charLimit = 150) {
    if (text.length > charLimit) {
      return text.slice(0, charLimit) + "...";
    }
    return text;
  }
  useEffect(() => {
    if (slug) {

      const fetchBlogData = async () => {
        try {
          const formData = new FormData()
          const encodeSlug = slug.join("/")
          formData.append("post_url", encodeSlug)
          const response = await fetch(`${url.SINGLEBLOG}`, {
            method: "POST",
            body: formData
          });
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


  const replaceShortcodes = (htmlString) => {
    return parse(htmlString, {
      replace: (domNode) => {
        if (
          domNode.type === "text" &&
          domNode.data.includes("[cost_calculator_app]")
        ) {
          return <HomeSizeCalculator />;
        }
      },
    });
  };


  return (
    <>

      <div id="wrapper">
        <div id="page" className="">
          <Header3 />
          <div className='flat-title inner-page' style={{ backgroundImage: blog !== null ? `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(${blog.featured_image})` : "", height: "auto", paddingTop: 97 }} >
            <div className="cl-container full">
              <div className="row">
                <div className="col-12">
                  <div className="content">
                    <h1>{blog?.title}</h1>
                    <ul className="breadcrumbs">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>/</li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>/</li>
                      <li>{blog?.title}</li>
                    </ul>
                    {blog !== null && (
                      <div style={{ fontSize: 15, color: "#FFF", marginTop: 15 }} >
                        {" "}
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(blog?.publish_date))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-content spacing-20">

            <div className="blog-single-wrap">
              {loading ? (
                <Loader />
              ) : (
                blog === null ?
                  <NotFound message="We couldn't find any post." />
                  :
                  <>

                    {/* <div className="image-head" style={{ paddingTop: 90 }} >
                      <img src={blog?.featured_image} alt={blog?.title} />
                    </div> */}

                    <div className="cl-container">
                      <div className="row justify-center">
                        <div className="col-xl-8 col-12">
                          <div className="blog-single-inner">
                            {/* <div>
                              <h2 className="wow fadeInUp">{blog?.title}</h2>
                              <div className="sub-blog style-color wow fadeInUp">
                                <div>{blog?.category.title}</div>
                                <div>
                                  {" "}
                                  {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }).format(new Date(blog?.publish_date))}
                                </div>
                              </div>
                            </div> */}
                            <div

                              className="blog_content ck_editor_content"
                            >
                              {replaceShortcodes(blog?.description)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
              )}
            </div>
            {/* wg-related-posts */}

          </div>
          {relatedblog?.length>0 && (
            <div className="wg-related-posts">
              <div className="cl-container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-section">
                      <h2 className="wow fadeInUp">Related Posts</h2>
                      {/* <div className="text wow fadeInUp">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="row ">

                  {relatedblog?.map((blog) => (
                    <div className="col-xl-4 col-lg-6 col-12" key={blog?.id}>
                      <div className="wg-blog wow fadeInUp">
                        <div className="image">
                          <img
                            src={
                              blog?.featured_image ||
                              "/assets/images/blog/blog-grid-1.jpg"
                            }
                            alt={blog?.title || "Blog Image"}
                          />
                        </div>
                        <div className="content">
                          <div className="sub-blog">
                            <div>{blog?.category.title}</div>
                            <div>
                              {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }).format(new Date(blog?.publish_date))}
                            </div>
                          </div>
                          <div style={{ minHeight: 150 }} >
                            <div className="name">
                              <Link href={`/${blog?.post_url}`}>{blog?.title}</Link>
                            </div>
                            <div>
                              <p>{truncate(blog?.meta_description)}</p>
                            </div>
                          </div>
                          <Link href={`/${blog?.post_url}`} className="tf-button-no-bg" >
                            Read More
                            <i className="icon-arrow-right-add"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          )}
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
