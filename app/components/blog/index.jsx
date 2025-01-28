"use client";
import React, { useState, useEffect } from "react";
import Header3 from "../header3";
import Link from "next/link";
import Footer from "../footer";
import CustomScript from "@/app/scripts";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "../loader/Loader";
import { url } from "@/app/utils/urls";
import NotFound from "../NotFound/NotFound";

const BlogComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryQuery = searchParams.get("category");
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const pageQuery = searchParams.get("page");
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    next: null,
    prev: null,
  });

  const fetchBlogs = async (url, setter) => {
    try {
      const response = await fetch(url);

      const data = await response.json();
      setter(data.data.data);
      setPagination({
        currentPage: data.data.current_page,
        totalPages: data.data.last_page,
        // next: data.data.from ? data.data.from + 1 : null,
        next: data.data.current_page + 1,
        prev: data.data.current_page - 1,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchCategories = async (url, setter) => {
    try {
      const response = await fetch(url);
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }

      const data = await response.json();
      setter(data.data);
    } catch (err) {
      //   console.error("Failed to fetch data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const blogsUrl = `${url.BLOGS}?page=${pageQuery}${
      categoryQuery ? `&category=${categoryQuery}` : ""
    }${searchQuery ? `&search=${searchQuery}` : ""}`;

    fetchBlogs(blogsUrl, setBlogs);
    fetchCategories(url.CATEGORIES, setCategories);
  }, [url, pageQuery, categoryQuery, searchQuery]);

  function truncate(text, wordLimit = 10) {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.totalPages) {
      router.push(
        `?page=${page}${categoryQuery ? `&category=${categoryQuery}` : ""}${
          searchQuery ? `&search=${searchQuery}` : ""
        }`
      );
    }
  };

  useEffect(() => {
    // Sync the searchQuery state with the search parameter in the URL on mount
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = (e) => {
    const newValue = e.target.value;

    // If the new value is different from the current searchQuery, update the query
    if (newValue !== searchQuery) {
      setSearchQuery(newValue);
      const newQuery = { ...searchParams, search: newValue };
      router.push(
        {
          pathname: router.pathname,
          query: newQuery,
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <>
      <div id="wrapper">
        <div id="page">
          <Header3 />
          <div className="main-content style-1">
            <div className="flat-title ">
              <div className="cl-container full">
                <div className="row">
                  <div className="col-12">
                    <div className="content">
                      <h2>Blogs</h2>
                      <ul className="breadcrumbs">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>/</li>
                        <li>Blogs List</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cl-container">
              <div className="row">
                <div className="col-lg-8">
                  {loading ? (
                    <Loader />
                  ) : blogs.length > 0 ? (
                    <div className="row wow fadeInUp">
                      {blogs.map((blog) => (
                        <div className="col-xl-4 col-md-6 col-12 mb-20" style={{paddingRight: '0px'}} key={blog.id} >
                          <div className="wg-blog wow fadeInUp animated" style={{ visibility: "visible", animationName: "fadeInUp", height: "100% !important", }} >
                            <div className="image">
                              <img src={blog.featured_image || "/assets/images/blog/blog-grid-1.jpg" } alt={blog.title} />
                            </div>
                            <div className="content">
                              <div className="sub-blog">
                                <div>{blog.category.title}</div>
                                <div>
                                  {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }).format(new Date(blog.publish_date))}
                                </div>
                              </div>
                              <div className="name">
                                <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                              </div>
                              <div>
                                <p>{truncate(blog.meta_description)}</p>
                              </div> 
                              <a href={`/blog/${blog.slug}`} className="tf-button-no-bg" >
                                Read More
                                <i className="icon-arrow-right-add"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <NotFound message="We couldn't find anything matching your category. Please try again with a different category." />
                  )}
                  {pagination.totalPages > 1 && (
                    <ul
                      className="wg-pagination justify-center wow fadeInUp"
                      role="navigation"
                      aria-label="Pagination"
                    >
                      <li
                        className={`previous ${
                          pagination.currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <a
                          onClick={() =>
                            handlePageChange(pagination.currentPage - 1)
                          }
                          aria-label="Previous page"
                          rel="prev"
                          role="button"
                          tabIndex={pagination.currentPage === 1 ? -1 : 0}
                          aria-disabled={pagination.currentPage === 1}
                        >
                          &lt;
                        </a>
                      </li>

                      {Array.from(
                        { length: pagination.totalPages },
                        (_, idx) => (
                          <li
                            key={idx}
                            className={
                              pagination.currentPage === idx + 1 ? "active" : ""
                            }
                          >
                            <a
                              onClick={() => handlePageChange(idx + 1)}
                              aria-label={`Page ${page}${
                                pagination.currentPage === page
                                  ? " is your current page"
                                  : ""
                              }`}
                              aria-current={
                                pagination.currentPage === page
                                  ? "page"
                                  : undefined
                              }
                              rel={
                                pagination.currentPage === page
                                  ? "canonical"
                                  : undefined
                              }
                              role="button"
                              tabIndex={0}
                            >
                              {idx + 1}
                            </a>
                          </li>
                        )
                      )}

                      <li
                        className={`next ${
                          pagination.currentPage === pagination.totalPages
                            ? "disabled"
                            : ""
                        }`}
                      >
                        <a
                          onClick={() =>
                            handlePageChange(pagination.currentPage + 1)
                          }
                          aria-label="Next page"
                          rel="next"
                          role="button"
                          tabIndex={
                            pagination.currentPage === pagination.totalPages
                              ? -1
                              : 0
                          }
                        >
                          &gt;
                        </a>
                      </li>
                    </ul>
                  )}
                </div>

                <div className="col-lg-4">
                  <div className="sidebar">
                    <div className="sidebar-item sidebar-search">
                      <form className="form-search">
                        <fieldset className="name">
                          <input
                            type="text"
                            placeholder="Search"
                            name="search"
                            tabIndex={2}
                            value={searchQuery}
                            onChange={handleSearch}
                            required
                          />
                        </fieldset>
                        <div className="button-submit style-absolute-right-center">
                          <button className="style-icon-default" type="submit">
                            <i className="flaticon-magnifiying-glass" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="sidebar-item sidebar-categories">
                      <div className="sidebar-title">Categories</div>
                      <ul>
                        {categories.map((category) => (
                          <li
                            key={category.slug}
                            className={
                              category.slug === categoryQuery
                                ? "active"
                                : ""
                            }
                          >
                            <Link href={`?category=${category.slug}`}>
                              {category.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      <CustomScript
        src="/assets/js/jquery.nice-select.min.js"
        strategy="afterInteractive"
      />
      <CustomScript
        src="/assets/js/jquery.fancybox.js"
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

export default BlogComponent;
