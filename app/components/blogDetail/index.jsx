"use client";
import React from 'react'
import Header3 from '../header3';
import Footer from '../footer';
import Link from 'next/link'
import CustomScript from '@/app/scripts';
const BlogDetail = () => {
  return (
    <>
    
    <div id="wrapper">
  {/* #page */}
  <div id="page" className="">
    {/* header */}
    <Header3 /> 
    {/* /header */}
    {/* main-content */}
    <div className="main-content spacing-20">
      {/* blog-single-wrap */}
      <div className="blog-single-wrap">
        {/* image-head */}
        <div className="image-head">
          <img src="/elrealestate/assets/images/blog/blog-detail-1.jpg" alt="" />
        </div>
        {/* /image-head */}
        {/* blog-single-inner */}
        <div className="cl-container">
          <div className="row justify-center">
            <div className="col-xl-8 col-12">
              <div className="blog-single-inner">
                <div>
                  <h2 className="wow fadeInUp">
                    Retail banks wake up to digital lending this year
                  </h2>
                  <div className="sub-blog style-color wow fadeInUp">
                    <div>Tips &amp; Tricks</div>
                    <div>April 26, 2024</div>
                  </div>
                </div>
                <div>
                  <h4 className="wow fadeInUp">
                    Quisque This Is A Link Nibh Facilisis At Malesuada
                  </h4>
                  <p className="wow fadeInUp">
                    Sit arcu odio aenean vitae eu egestas. Gravida commodo non
                    sem diam faucibus justo dolor. Consectetur nunc scelerisque
                    ut enim tristique sed. At leo urna eu quam cursus dolor. In
                    bibendum sit scelerisque mattis cum.
                    <br />
                    <br />
                    Adipiscing et vel tempor elementum dignissim urna. Eu sem
                    sed enim habitant libero ultricies sagittis. Malesuada
                    viverra netus diam vehicula nulla. Neque mattis lacus sed
                    tristique. Luctus ipsum lobortis sed odio ut ultricies
                    adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum
                    diam molestie vel pharetra.
                  </p>
                </div>
                <div className="mt-13">
                  <h4 className="wow fadeInUp">Room Rules</h4>
                  <ul className="list-text">
                    <li className="wow fadeInUp">
                      <p>
                        Sed viverra ipsum nunc aliquet bibendum enim facilisis
                        gravida.
                      </p>
                    </li>
                    <li className="wow fadeInUp">
                      <p>At urna condimentum mattis pellentesque id nibh.</p>
                    </li>
                    <li className="wow fadeInUp">
                      <p>
                        Laoreet non curabitur Magna etiam tempor orci eu
                        lobortis elementum.
                      </p>
                    </li>
                    <li className="wow fadeInUp">
                      <p>Bibendum est ultricies integer quis. </p>
                    </li>
                    <li className="wow fadeInUp">
                      <p>Semper eget duis at tellus.</p>
                    </li>
                  </ul>
                </div>
                <div className="wg-blockquote mt-20">
                  <blockquote className="wow fadeInUp">
                    “Sed viverra ipsum nunc aliquet bibendum enim facilisis
                    gravida. Diam phasellus vestibulum lorem sed risus
                    ultricies.
                  </blockquote>
                  <cite className="wow fadeInUp">Ali Tufan - Trip Advisor</cite>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={45}
                      height={44}
                      viewBox="0 0 45 44"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_249_14836)">
                        <path
                          d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z"
                          fill="#1A1A1A"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_249_14836"
                          x={0}
                          y={0}
                          width={45}
                          height={44}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx={6} dy={6} />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_249_14836"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_249_14836"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="mt-21 wow fadeInUp">
                  Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem
                  diam faucibus justo dolor. Consectetur nunc scelerisque ut
                  enim tristique sed. At leo urna eu quam cursus dolor. In
                  bibendum sit scelerisque mattis cum.
                  <br />
                  <br />
                  Adipiscing et vel tempor elementum dignissim urna. Eu sem sed
                  enim habitant libero ultricies sagittis. Malesuada viverra
                  netus diam vehicula nulla. Neque mattis lacus sed tristique.
                  Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi
                  nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel
                  pharetra.
                </p>
                <div className="grid-image mt-20">
                  <div className="image">
                    <img src="/elrealestate/assets/images/blog/blog-detail-2.jpg" alt="" />
                  </div>
                  <div className="right">
                    <div className="image">
                      <img src="/elrealestate/assets/images/blog/blog-detail-3.jpg" alt="" />
                    </div>
                    <div className="image">
                      <img src="/elrealestate/assets/images/blog/blog-detail-4.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="mt-21">
                  <h4 className="mb-35 wow fadeInUp">
                    What makes a good brand book?
                  </h4>
                  <p className="wow fadeInUp">
                    Sit arcu odio aenean vitae eu egestas. Gravida commodo non
                    sem diam faucibus justo dolor. Consectetur nunc scelerisque
                    ut enim tristique sed. At leo urna eu quam cursus dolor. In
                    bibendum sit scelerisque mattis cum.
                    <br />
                    <br />
                    Adipiscing et vel tempor elementum dignissim urna. Eu sem
                    sed enim habitant libero ultricies sagittis. Malesuada
                    viverra netus diam vehicula nulla. Neque mattis lacus sed
                    tristique. Luctus ipsum lobortis sed odio ut ultricies
                    adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum
                    diam molestie vel pharetra.
                    <br />
                    <br />
                    Fames massa tortor sit nisl sit. Duis nulla tempus quisque
                    et diam condimentum nisl. Rhoncus quisque elementum nulla
                    lorem at turpis vitae quisque. Vulputate duis vel et odio
                    hendrerit magna. Nec lacus dui egestas sit. Vulputate
                    tincidunt viverra viverra etiam porta facilisis. Diam dui
                    euismod eget donec. Pharetra leo sed felis urna. At a
                    viverra urna elementum tristique ac integer pretium. Vel
                    tincidunt sed mi nulla lectus sagittis.
                  </p>
                </div>
                <div className="grid-image-1 mt-20">
                  <div className="image wow fadeInUp">
                    <img src="/elrealestate/assets/images/blog/blog-detail-5.jpg" alt="" />
                    <p>Donec purus posuere nullam lacus aliquam.</p>
                  </div>
                  <div className="image wow fadeInUp" data-wow-delay="0.1s">
                    <img src="/elrealestate/assets/images/blog/blog-detail-6.jpg" alt="" />
                    <p>Donec purus posuere nullam lacus aliquam.</p>
                  </div>
                </div>
                <p className="mt-13 wow fadeInUp">
                  Fames massa tortor sit nisl sit. Duis nulla tempus quisque et
                  diam condimentum nisl. Rhoncus quisque elementum nulla lorem
                  at turpis vitae quisque. Vulputate duis vel et odio hendrerit
                  magna. Nec lacus dui egestas sit. Vulputate tincidunt viverra
                  viverra etiam porta facilisis. Diam dui euismod eget donec.
                  Pharetra leo sed felis urna. At a viverra urna elementum
                  tristique ac integer pretium. Vel tincidunt sed mi nulla
                  lectus sagittis.
                </p>
                <div className="bottom wow fadeInUp">
                  <div className="share">
                    <span>Share</span>
                    <ul>
                      <li>
                        <Link href="#">
                          <p>Facebook</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <p>Twitter</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <p>Instagram</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="tags">
                    <li>
                      <Link href="#">Real Estate</Link>
                    </li>
                    <li>
                      <Link href="#">Business</Link>
                    </li>
                    <li>
                      <Link href="#">Construction</Link>
                    </li>
                  </ul>
                </div>
                <div className="box-admin wow fadeInUp">
                  <div className="image">
                    <img src="/elrealestate/assets/images/author/author-4.png" alt="" />
                  </div>
                  <div className="content">
                    <div className="name">
                      <Link href="#">Ali Tufan</Link>
                    </div>
                    <p>
                      Etiam vitae leo et diam pellentesque porta. Sed eleifend
                      ultricies risus, vel rutrum erat commodo ut. Praesent
                      finibus congue euismod
                    </p>
                  </div>
                </div>
                <div className="nav-links wow fadeInUp">
                  <div className="post-navigation previous-post">
                    <Link href="#">
                      <i className="icon-keyboard_arrow_left" />
                    </Link>
                    <div className="content">
                      <div className="title-post">
                        <Link href="#">Prev Post</Link>
                      </div>
                      <p>
                        5 awesome steps to get rid of <br /> stress and routine
                      </p>
                    </div>
                  </div>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={4} height={4} fill="#1A1A1A" />
                    <rect y={8} width={4} height={4} fill="#1A1A1A" />
                    <rect y={16} width={4} height={4} fill="#1A1A1A" />
                    <rect x={8} width={4} height={4} fill="#1A1A1A" />
                    <rect x={8} y={8} width={4} height={4} fill="#1A1A1A" />
                    <rect x={8} y={16} width={4} height={4} fill="#1A1A1A" />
                    <rect x={16} width={4} height={4} fill="#1A1A1A" />
                    <rect x={16} y={8} width={4} height={4} fill="#1A1A1A" />
                    <rect x={16} y={16} width={4} height={4} fill="#1A1A1A" />
                  </svg>
                  <div className="post-navigation next-post">
                    <div className="content">
                      <div className="title-post">
                        <Link href="#">Next Post</Link>
                      </div>
                      <p>
                        Happy clients leave positive <br /> feedback less often
                      </p>
                    </div>
                    <Link href="#">
                      <i className="icon-keyboard_arrow_right" />
                    </Link>
                  </div>
                </div>
                <div className="reviews-wrap">
                  <div className="flex justify-between items-center mb-40 wow fadeInUp">
                    <h4 className="mb-0">4 Reviews</h4>
                    <Link href="#" className="tf-button-green">
                      Leave a Review
                    </Link>
                  </div>
                  <ul>
                    <li className="wow fadeInUp">
                      <div className="image">
                        <img src="/elrealestate/assets/images/author/author-5.png" alt="" />
                      </div>
                      <div className="content">
                        <div className="ratings">
                          <i className="flaticon-star-1" />
                          <i className="flaticon-star-1" />
                          <i className="flaticon-star-1" />
                          <i className="flaticon-star-1" />
                          <i className="flaticon-star-1" />
                        </div>
                        <div className="name">
                          <Link href="#">Jane Cooper</Link>
                        </div>
                        <div className="time">April 06, 2024 at 7:55 pm</div>
                        <p>
                          Beautiful home, very picturesque and close to
                          everything in jtree! A little warm for a hot weekend,
                          but would love to come back during the cooler seasons!
                        </p>
                      </div>
                    </li>
                    <li className="wow fadeInUp">
                      <div className="image">
                        <img src="/elrealestate/assets/images/author/author-6.png" alt="" />
                      </div>
                      <div className="content">
                        <div className="ratings">
                          <i className="flaticon-star-1" />
                          <i className="flaticon-star-1" />
                          <i className="flaticon-star-1" />
                          <i className="flaticon-star-1" />
                          <i className="flaticon-star-1" />
                        </div>
                        <div className="name">
                          <Link href="#">Jane Cooper</Link>
                        </div>
                        <div className="time">April 06, 2024 at 7:55 pm</div>
                        <p>
                          Beautiful home, very picturesque and close to
                          everything in jtree! A little warm for a hot weekend,
                          but would love to come back during the cooler seasons!
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="leave-a-review">
                  <h4 className="wow fadeInUp">Leave A Review</h4>
                  <p className="wow fadeInUp">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div>
                    <p className="wow fadeInUp">Your Rating *</p>
                    <div className="ratings wow fadeInUp">
                      <i className="flaticon-star-1" />
                      <i className="flaticon-star-1" />
                      <i className="flaticon-star-1" />
                      <i className="flaticon-star-1" />
                      <i className="flaticon-star-1" />
                    </div>
                  </div>
                  <form className="form-comment">
                    <fieldset className="message wow fadeInUp has-top-title">
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Your Comment"
                        className=""
                        tabIndex={2}
                        aria-required="true"
                        required=""
                        defaultValue={"Lorem Ipsum"}
                      />
                      <label htmlFor="">Your Comment</label>
                    </fieldset>
                    <div className="cols">
                      <fieldset className="name wow fadeInUp has-top-title">
                        <input
                          type="text"
                          placeholder="Name"
                          className=""
                          name="text"
                          tabIndex={2}
                          defaultValue="Ali Tufan"
                          aria-required="true"
                          required=""
                        />
                        <label htmlFor="">Name</label>
                      </fieldset>
                      <fieldset className="email wow fadeInUp has-top-title">
                        <input
                          type="email"
                          placeholder="Email"
                          className=""
                          name="email"
                          tabIndex={2}
                          defaultValue="themesflat@gmail.com"
                          aria-required="true"
                          required=""
                        />
                        <label htmlFor="">Email</label>
                      </fieldset>
                    </div>
                    <fieldset className="website wow fadeInUp has-top-title">
                      <input
                        type="text"
                        placeholder="Website"
                        className=""
                        name="text"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required=""
                      />
                      <label htmlFor="">Website</label>
                    </fieldset>
                    <div className="checkbox-item wow fadeInUp">
                      <label>
                        <p>I agree to all Term, Privacy Polic and fees</p>
                        <input type="checkbox" />
                        <span className="btn-checkbox" />
                      </label>
                    </div>
                    <div className="button-submit wow fadeInUp">
                      <button className="tf-button-primary" type="submit">
                        Submit Review <i className="icon-arrow-right-add" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /blog-single-inner */}
        {/* wg-related-posts */}
        <div className="wg-related-posts">
          <div className="cl-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section text-center">
                  <h2 className="wow fadeInUp">Related Posts</h2>
                  <div className="text wow fadeInUp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-12">
                <div className="wg-blog wow fadeInUp">
                  <div className="image">
                    <img src="/elrealestate/assets/images/blog/blog-grid-1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="sub-blog">
                      <div>Tips &amp; Tricks</div>
                      <div>April 26, 2024</div>
                    </div>
                    <div className="name">
                      <Link href="/blog/thi-is-new">
                        Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for
                        Visitors
                      </Link>
                    </div>
                    <Link href="/blog/thi-is-new" className="tf-button-no-bg">
                      Read More
                      <i className="icon-arrow-right-add" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-12">
                <div className="wg-blog wow fadeInUp" data-wow-delay="0.1s">
                  <div className="image">
                    <img src="/elrealestate/assets/images/blog/blog-grid-2.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="sub-blog">
                      <div>Tips &amp; Tricks</div>
                      <div>April 26, 2024</div>
                    </div>
                    <div className="name">
                      <Link href="/blog/thi-is-new">
                        Homebuyers Will Be So Thankful To Hear These{" "}
                      </Link>
                    </div>
                    <Link href="/blog/thi-is-new" className="tf-button-no-bg">
                      Read More
                      <i className="icon-arrow-right-add" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-12">
                <div className="wg-blog wow fadeInUp" data-wow-delay="0.2s">
                  <div className="image">
                    <img src="/elrealestate/assets/images/blog/blog-grid-3.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="sub-blog">
                      <div>Tips &amp; Tricks</div>
                      <div>April 26, 2024</div>
                    </div>
                    <div className="name">
                      <Link href="/blog/thi-is-new">
                        That’s Life! Frank Sinatra’s Former Los Angeles-Area{" "}
                      </Link>
                    </div>
                    <Link href="/blog/thi-is-new" className="tf-button-no-bg">
                      Read More
                      <i className="icon-arrow-right-add" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-12">
                <div className="wg-blog wow fadeInUp" data-wow-delay="0.3s">
                  <div className="image">
                    <img src="/elrealestate/assets/images/blog/blog-grid-4.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="sub-blog">
                      <div>Tips &amp; Tricks</div>
                      <div>April 26, 2024</div>
                    </div>
                    <div className="name">
                      <Link href="/blog/thi-is-new">
                        Affordability crisis buyers and renters turn to tiny
                        living
                      </Link>
                    </div>
                    <Link href="/blog/thi-is-new" className="tf-button-no-bg">
                      Read More
                      <i className="icon-arrow-right-add" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /wg-related-posts */}
      </div>
      {/* /blog-single-wrap */}
    </div>
    {/* /main-content */}
    {/* footer */}
   <Footer />
    {/* /footer */}
  </div>
  {/* /#page */}
</div>
<CustomScript
          src="/elrealestate/assets/js/jquery.min.js"
          strategy="lazyOnload" // Load it after the page load
          onLoad={() => {
            if (window.jQuery) {
              console.log("jQuery loaded successfully.");
              setIsJQueryLoaded(true);
            }
          }}
          onError={(e) => console.error("Failed to load jQuery:", e)}
        />
     
     
     
      <CustomScript src="/elrealestate/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
      <CustomScript src="/elrealestate/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
      <CustomScript src="/elrealestate/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
      <CustomScript src="/elrealestate/assets/js/main.js"  />
    </>
  )
}

export default BlogDetail