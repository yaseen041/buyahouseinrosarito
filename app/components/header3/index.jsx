'use client';
import Link from 'next/link'
import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { usePathname } from 'next/navigation';
const Header3 = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [openMenu,setOpenMenu] = React.useState(false)
const pathname = usePathname()
const handleClose = () => setOpenMenu(false);
  const handleShow = () => setOpenMenu(true);

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
            <header id="header_main" className={`header header-fixed ${isScrolled?"is-small is-fixed":""}`}>
                <div className="header-inner">
                    <div className="header-inner-wrap">
                        <div id="site-logo">
                            <Link href="/" rel="home">
                                <img
                                    className="d-block"
                                    id="logo-header"
                                    src="/assets/images/logo/logo.svg"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <nav className="main-menu">
                            <ul className="navigation">
                                <li className={pathname==="/"?"current":""}>
                                    <Link href="/">Home</Link>
                                   
                                </li>
                                <li className={pathname==="/property"?"current":""}>
                                    <Link href="/property">Property</Link>
                                   
                                </li>
                                <li className={pathname==="/about"?"current":""}>
                                    <Link href="/about">About</Link>
                                  
                                </li>
                                
                               
                                <li className={pathname==="/blog"?"current":""}>
                                    <Link href="/blog">Blog</Link>
                                   
                                </li>
                                <li className={pathname==="/contact"?"current":""} >
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-right">
                            <div className="header-call">
                                <div className="icon">
                                    <i className="flaticon-phone" />
                                </div>
                                <div className="number">800-555-6789</div>
                            </div>
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#modallogin"
                                className="header-user"
                            >
                                <div className="icon">
                                    <i className="flaticon-user" />
                                </div>
                            </div>
                            <div className="header-btn">
                                <a href="#" className="tf-button-default">
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

        </>

    )
}

export default Header3