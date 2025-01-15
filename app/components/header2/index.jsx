'use client';
import React from 'react'
import Link from 'next/link'
import Scripts from '@/app/scripts'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { usePathname } from 'next/navigation';
const Header2 = () => {
  const [openMenu,setOpenMenu] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false);
const handleClose = () => setOpenMenu(false);
  const handleShow = () => setOpenMenu(true);
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
    <header
    id="header_main"
    className={`header header-fixed style-no-bg style-absolute ${isScrolled?"is-fixed is-small":""}`}
  >
    <div className="header-inner">
      <div className="header-inner-wrap">
        <div id="site-logo">
          <Link href="/" rel="home">
            <img id="logo-header" src="/assets/images/logo/logo-white.svg" alt="" />
            <img id="logo-header-mobile" src="/assets/images/logo/logo.svg" alt="" />
          </Link>
        </div>
        <nav className="main-menu style-white">
          <ul className="navigation">
            <li className={pathname==="/"?"current":""}>
              <Link href="/">Home</Link>
            
            </li>
            <li className={pathname==="/property"?"current":""}>
              <Link href="javascript:void(0);">Property</Link>
             
            </li>
            <li className={pathname==="/about"?"current":""}>
              <Link href="/about">About</Link>
             
            </li>
           
           
            <li className={pathname==="/blog"?"current":""}>
              <Link href="/blog">Blog</Link>
             
            </li>
            <li className={pathname==="/contact"?"current":""}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="header-call style-white">
            <div className="icon">
              <i className="flaticon-phone" />
            </div>
            <div className="number">800-555-6789</div>
          </div>
          <div
            data-bs-toggle="modal"
            data-bs-target="#modallogin"
            className="header-user style-white"
          >
            <div className="icon">
              <i className="flaticon-user" />
            </div>
          </div>
          <div className="header-btn">
            <a
              href="#"
              className="tf-button-default style-white"
            >
              Add Listing
            </a>
          </div>
        </div>
        <a className="mobile-nav-toggler mobile-button" href="javascript:void(0);" onClick={handleShow} />
      </div>
    </div>
    <Offcanvas show={openMenu} onHide={handleClose} backdrop={true}   >
          <Offcanvas.Body>
        <div
          id="menu"
          className={`mm-menu mm-menu--offcanvas mm-menu--position-left mm-menu--theme-light mm-menu--opened  `}
          aria-label="Menu"
          aria-modal="false"
          role="dialog"
        >
          <a className="close" aria-label="Close menu" href="#mm-22"  onClick={handleClose} >
            <i className="icon-close" />
          </a>
          <div className="mm-panels">
            <div className={`mm-panel mm-panel--noanimation mm-panel--opened `} id="mm-1">
              <div className="mm-navbar">
                <a className="mm-navbar__title" tabIndex={-1} aria-hidden="true">
                  <span className="">Menu</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="mm-listitem" id="mm-2" data-mm-child="mm-3">
                  <Link
                    className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text"
                    aria-label="Open submenu"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="current mm-listitem" id="mm-4" data-mm-child="mm-5">
                  <Link
                    className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text"
                    aria-label="Open submenu"
                    href="/property"
                  >
                    Property
                  </Link>
                </li>
                <li className="mm-listitem" id="mm-14" data-mm-child="mm-15">
                  <Link
                    className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text"
                    aria-label="Open submenu"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="mm-listitem" id="mm-16" data-mm-child="mm-17">
                  <Link
                    className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text"
                    aria-label="Open submenu"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mm-listitem" id="mm-18" data-mm-child="mm-19">
                  <Link
                    className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text"
                    aria-label="Open submenu"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
               
               
              </ul>
            </div>
            <div
              className="mm-panel mm-panel--noanimation"
              id="mm-3"
              data-mm-parent="mm-2"
              
            >
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-btn--prev mm-navbar__btn"
                  href="#mm-1"
                  aria-label="Close submenu"
                />
                <a
                  className="mm-navbar__title"
                  tabIndex={-1}
                  aria-hidden="true"
                  href="#mm-1"
                >
                  <span className="">Home</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="mm-listitem">
                  <a href="index.html" className="mm-listitem__text">
                    Home Page 01
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="home-02.html" className="mm-listitem__text">
                    Home Page 02
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="home-03.html" className="mm-listitem__text">
                    Home Page 03
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="home-04.html" className="mm-listitem__text">
                    Home Page 04
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="home-05.html" className="mm-listitem__text">
                    Home Page 05
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="home-06.html" className="mm-listitem__text">
                    Home Page 06
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="home-07.html" className="mm-listitem__text">
                    Home Page 07
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="home-08.html" className="mm-listitem__text">
                    Home Page 08
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="home-09.html" className="mm-listitem__text">
                    Home Page 09
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="home-10.html" className="mm-listitem__text">
                    Home Page 10
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="mm-panel mm-panel--noanimation"
              id="mm-5"
              data-mm-parent="mm-4"
              inert={true}
            >
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-btn--prev mm-navbar__btn"
                  href="#mm-1"
                  aria-label="Close submenu"
                />
                <a
                  className="mm-navbar__title"
                  tabIndex={-1}
                  aria-hidden="true"
                  href="#mm-1"
                >
                  <span className="">Property</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="current mm-listitem" id="mm-6" data-mm-child="mm-7">
                  <a
                    className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text"
                    aria-label="Open submenu"
                    href="#mm-7"
                  >
                    List view
                  </a>
                </li>
                <li className="mm-listitem" id="mm-8" data-mm-child="mm-9">
                  <a
                    className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text"
                    aria-label="Open submenu"
                    href="#mm-9"
                  >
                    Grid view
                  </a>
                </li>
                <li className="mm-listitem" id="mm-10" data-mm-child="mm-11">
                  <a
                    className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text"
                    aria-label="Open submenu"
                    href="#mm-11"
                  >
                    Single view
                  </a>
                </li>
                <li className="mm-listitem" id="mm-12" data-mm-child="mm-13">
                  <a
                    className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text"
                    aria-label="Open submenu"
                    href="#mm-13"
                  >
                    Map Style
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="mm-panel mm-panel--noanimation"
              id="mm-7"
              data-mm-parent="mm-6"
              inert={true}
            >
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-btn--prev mm-navbar__btn"
                  href="#mm-5"
                  aria-label="Close submenu"
                />
                <a
                  className="mm-navbar__title"
                  tabIndex={-1}
                  aria-hidden="true"
                  href="#mm-5"
                >
                  <span className="">List view</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="mm-listitem">
                  <a href="property-list-v1.html" className="mm-listitem__text">
                    Property List 01
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-list-v2.html" className="mm-listitem__text">
                    Property List 02
                  </a>
                </li>
                <li className="current mm-listitem">
                  <a href="property-list-v3.html" className="mm-listitem__text">
                    Property List 03
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="mm-panel mm-panel--noanimation"
              id="mm-9"
              data-mm-parent="mm-8"
              inert={true}
            >
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-btn--prev mm-navbar__btn"
                  href="#mm-5"
                  aria-label="Close submenu"
                />
                <a
                  className="mm-navbar__title"
                  tabIndex={-1}
                  aria-hidden="true"
                  href="#mm-5"
                >
                  <span className="">Grid view</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="mm-listitem">
                  <a href="property-grid-v1.html" className="mm-listitem__text">
                    Property Grid 01
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-grid-v2.html" className="mm-listitem__text">
                    Property Grid 02
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-grid-v3.html" className="mm-listitem__text">
                    Property Grid 03
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-grid-v4.html" className="mm-listitem__text">
                    Property Grid 04
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="mm-panel mm-panel--noanimation"
              id="mm-11"
              data-mm-parent="mm-10"
              inert={true}
            >
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-btn--prev mm-navbar__btn"
                  href="#mm-5"
                  aria-label="Close submenu"
                />
                <a
                  className="mm-navbar__title"
                  tabIndex={-1}
                  aria-hidden="true"
                  href="#mm-5"
                >
                  <span className="">Single view</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="mm-listitem">
                  <a href="property-single-v1.html" className="mm-listitem__text">
                    Property Single 01
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-single-v2.html" className="mm-listitem__text">
                    Property Single 02
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-single-v3.html" className="mm-listitem__text">
                    Property Single 03
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-single-v4.html" className="mm-listitem__text">
                    Property Single 04
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-single-v5.html" className="mm-listitem__text">
                    Property Single 05
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-single-v6.html" className="mm-listitem__text">
                    Property Single 06
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-single-v7.html" className="mm-listitem__text">
                    Property Single 07
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="mm-panel mm-panel--noanimation"
              id="mm-13"
              data-mm-parent="mm-12"
              inert={true}
            >
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-btn--prev mm-navbar__btn"
                  href="#mm-5"
                  aria-label="Close submenu"
                />
                <a
                  className="mm-navbar__title"
                  tabIndex={-1}
                  aria-hidden="true"
                  href="#mm-5"
                >
                  <span className="">Map Style</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="mm-listitem">
                  <a href="property-map-v1.html" className="mm-listitem__text">
                    Property Map 01
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-map-v2.html" className="mm-listitem__text">
                    Property Map 02
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-map-v3.html" className="mm-listitem__text">
                    Property Map 03
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="property-map-v4.html" className="mm-listitem__text">
                    Property Map 04
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="mm-panel mm-panel--noanimation"
              id="mm-15"
              data-mm-parent="mm-14"
              inert={true}
            >
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-btn--prev mm-navbar__btn"
                  href="#mm-1"
                  aria-label="Close submenu"
                />
                <a
                  className="mm-navbar__title"
                  tabIndex={-1}
                  aria-hidden="true"
                  href="#mm-1"
                >
                  <span className="">Realtor</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="mm-listitem">
                  <a href="agent-list.html" className="mm-listitem__text">
                    Agent List
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="agent-single.html" className="mm-listitem__text">
                    Agent Single
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="agency-list.html" className="mm-listitem__text">
                    Agency List
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="agency-single.html" className="mm-listitem__text">
                    Agency Single
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="mm-panel mm-panel--noanimation"
              id="mm-17"
              data-mm-parent="mm-16"
              inert={true}
            >
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-btn--prev mm-navbar__btn"
                  href="#mm-1"
                  aria-label="Close submenu"
                />
                <a
                  className="mm-navbar__title"
                  tabIndex={-1}
                  aria-hidden="true"
                  href="#mm-1"
                >
                  <span className="">Pages</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="mm-listitem">
                  <a href="about.html" className="mm-listitem__text">
                    About Us
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="compare.html" className="mm-listitem__text">
                    Compare
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="pricing.html" className="mm-listitem__text">
                    Pricing Packages
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="faq.html" className="mm-listitem__text">
                    FAQ Page
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="404.html" className="mm-listitem__text">
                    404 Page
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="ui-elements.html" className="mm-listitem__text">
                    UI Elements
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="dashboard.html" className="mm-listitem__text">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="mm-panel mm-panel--noanimation"
              id="mm-19"
              data-mm-parent="mm-18"
              inert={true}
            >
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-btn--prev mm-navbar__btn"
                  href="#mm-1"
                  aria-label="Close submenu"
                />
                <a
                  className="mm-navbar__title"
                  tabIndex={-1}
                  aria-hidden="true"
                  href="#mm-1"
                >
                  <span className="">Shop</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="mm-listitem">
                  <a href="shop-list.html" className="mm-listitem__text">
                    Shop List
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="shop-single.html" className="mm-listitem__text">
                    Shop Single
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="shop-cart.html" className="mm-listitem__text">
                    Shop Cart
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="shop-checkout.html" className="mm-listitem__text">
                    Shop Checkout
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="shop-order.html" className="mm-listitem__text">
                    Shop Order
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="mm-panel mm-panel--noanimation"
              id="mm-21"
              data-mm-parent="mm-20"
              inert={true}
            >
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-btn--prev mm-navbar__btn"
                  href="#mm-1"
                  aria-label="Close submenu"
                />
                <a
                  className="mm-navbar__title"
                  tabIndex={-1}
                  aria-hidden="true"
                  href="#mm-1"
                >
                  <span className="">Blog</span>
                </a>
              </div>
              <ul className="mm-listview">
                <li className="mm-listitem">
                  <a href="blog-list-v1.html" className="mm-listitem__text">
                    Blog List 01
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="blog-list-v2.html" className="mm-listitem__text">
                    Blog List 02
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="blog-list-v3.html" className="mm-listitem__text">
                    Blog List 03
                  </a>
                </li>
                <li className="mm-listitem">
                  <a href="blog-single.html" className="mm-listitem__text">
                    Blog Single
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <a
          className="mm-wrapper__blocker mm-blocker mm-slideout"
          id="mm-0"
          aria-label="Close menu"
          href="#mm-22"
         
        />
        </Offcanvas.Body>
       </Offcanvas>
  </header>
  <div className="modal fade modalCenter" id="modallogin">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content modal-sm">
                        <a href="#" className="btn-hide-modal" data-bs-dismiss="modal">
                            <i className="icon-close" />
                        </a>
                        <div className="image-left">
                            <img src="/assets/images/section/login.jpg" alt="" />
                            <h3>Welcome to Your Real Estate Website</h3>
                        </div>
                        <div className="content-right">
                            <h4>Sign into your account</h4>
                            <form className="form-login">
                                <fieldset className="name">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className=""
                                        name="text"
                                        tabIndex={2}
                                        defaultValue="creative"
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <fieldset className="password">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className=""
                                        name="password"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <div className="flex items-center justify-between w-full">
                                    <div className="checkbox-item">
                                        <label>
                                            <p>Remember me</p>
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                    </div>
                                    <a href="#" className="lost-password">
                                        Lost your password?
                                    </a>
                                </div>
                                <div className="button-submit w-full">
                                    <button className="tf-button-primary w-full" type="submit">
                                        Login
                                        <i className="icon-arrow-right-add" />
                                    </button>
                                </div>
                            </form>
                            <div className="flex items-center justify-center">
                                <p>Not a member?</p>
                                <a
                                    href="#"
                                    className="btn-show-register"
                                    data-bs-dismiss="modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalregister"
                                >
                                    Register here
                                </a>
                            </div>
                            <ul className="wg-social-1">
                                <li>
                                    <a href="#">
                                        <i className="flaticon-google" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="flaticon-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="flaticon-facebook" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade modalCenter" id="modalregister">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content modal-sm">
                        <a href="#" className="btn-hide-modal" data-bs-dismiss="modal">
                            <i className="icon-close" />
                        </a>
                        <div className="image-left">
                            <img src="/assets/images/section/login.jpg" alt="" />
                            <h3>Welcome to Your Real Estate Website</h3>
                        </div>
                        <div className="content-right">
                            <h4>Create an account</h4>
                            <form className="form-login">
                                <fieldset className="name">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className=""
                                        name="text"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <fieldset className="email">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className=""
                                        name="email"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <fieldset className="password">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className=""
                                        name="password"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <fieldset className="password">
                                    <input
                                        type="password"
                                        placeholder="Retype Password"
                                        className=""
                                        name="password"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <div className="flex items-center justify-between">
                                    <div className="checkbox-item">
                                        <label>
                                            <p>I agree with terms &amp; conditions</p>
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                    </div>
                                </div>
                                <div className="button-submit">
                                    <button className="tf-button-primary w-full" type="submit">
                                        Register
                                        <i className="icon-arrow-right-add" />
                                    </button>
                                </div>
                            </form>
                            <div className="flex items-center justify-center">
                                <p>Have an account?</p>
                                <a
                                    href="#"
                                    className="btn-show-register"
                                    data-bs-dismiss="modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modallogin"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </>
  )
}

export default Header2