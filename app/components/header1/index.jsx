import React from 'react'
import Link from 'next/link';
import Scripts from '@/app/scripts';
const Header1 = () => {
 React.useEffect(() => {
    
  if (typeof window !== 'undefined' && window.Mmenu) {
    const menuElement = document.querySelector("#menu");
    if (menuElement) {
      new window.Mmenu(menuElement);  // Use window.Mmenu after it's loaded
    }
  }
  }, []);
  return (
    <>
   
    <header
      id="header_main"
      className="header header-fixed style-no-bg type-home3 style-absolute"
    >
      <div className="header-inner">
        <div className="header-inner-wrap">
          <nav className="main-menu">
            <ul className="navigation">
              <li className=" current">
                <Link href="/">Home</Link>
                
              </li>
              <li className="">
                <Link href="/property">Property</Link>
               
              </li>
              <li className="has-children">
                <a href="javascript:void(0);">Realtor</a>
                <ul>
                  <li>
                    <a href="agent-list.html">Agent List</a>
                  </li>
                  <li>
                    <a href="agent-single.html">Agent Single</a>
                  </li>
                  <li>
                    <a href="agency-list.html">Agency List</a>
                  </li>
                  <li>
                    <a href="agency-single.html">Agency Single</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="javascript:void(0);">Pages</a>
                <ul>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="compare.html">Compare</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing Packages</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ Page</a>
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                  <li>
                    <a href="ui-elements.html">UI Elements</a>
                  </li>
                  <li>
                    <a href="dashboard.html">Dashboard</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="javascript:void(0);">Shop</a>
                <ul>
                  <li>
                    <a href="shop-list.html">Shop List</a>
                  </li>
                  <li>
                    <a href="shop-single.html">Shop Single</a>
                  </li>
                  <li>
                    <a href="shop-cart.html">Shop Cart</a>
                  </li>
                  <li>
                    <a href="shop-checkout.html">Shop Checkout</a>
                  </li>
                  <li>
                    <a href="shop-order.html">Shop Order</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="javascript:void(0);">Blog</a>
                <ul>
                  <li>
                    <a href="blog-list-v1.html">Blog List 01</a>
                  </li>
                  <li>
                    <a href="blog-list-v2.html">Blog List 02</a>
                  </li>
                  <li>
                    <a href="blog-list-v3.html">Blog List 03</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <div id="site-logo">
            <a href="index.html" rel="home">
              <img
                className="d-block"
                id="logo-header"
                src="/assets/images/logo/logo.svg"
                alt=""
              />
            </a>
          </div>
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
              <a href="dashboard-add-properties.html" className="tf-button-default">
                Add Listing
              </a>
            </div>
          </div>
          <a className="mobile-nav-toggler mobile-button" href="#menu" />
        </div>
      </div>
      <nav id="menu">
        <a className="close" aria-label="Close menu" href="#mm-22">
          <i className="icon-close" />
        </a>
        <ul>
          <li className="current">
            <span>Home</span>
            <ul>
              <li>
                <a href="index.html">Home Page 01</a>
              </li>
              <li>
                <a href="home-02.html">Home Page 02</a>
              </li>
              <li className="current">
                <a href="home-03.html">Home Page 03</a>
              </li>
              <li>
                <a href="home-04.html">Home Page 04</a>
              </li>
              <li>
                <a href="home-05.html">Home Page 05</a>
              </li>
              <li>
                <a href="home-06.html">Home Page 06</a>
              </li>
              <li>
                <a href="home-07.html">Home Page 07</a>
              </li>
              <li>
                <a href="home-08.html">Home Page 08</a>
              </li>
              <li>
                <a href="home-09.html">Home Page 09</a>
              </li>
              <li>
                <a href="home-10.html">Home Page 10</a>
              </li>
            </ul>
          </li>
          <li>
            <span>Property</span>
            <ul>
              <li>
                <span>List view</span>
                <ul>
                  <li>
                    <a href="property-list-v1.html">Property List 01</a>
                  </li>
                  <li>
                    <a href="property-list-v2.html">Property List 02</a>
                  </li>
                  <li>
                    <a href="property-list-v3.html">Property List 03</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Grid view</span>
                <ul>
                  <li>
                    <a href="property-grid-v1.html">Property Grid 01</a>
                  </li>
                  <li>
                    <a href="property-grid-v2.html">Property Grid 02</a>
                  </li>
                  <li>
                    <a href="property-grid-v3.html">Property Grid 03</a>
                  </li>
                  <li>
                    <a href="property-grid-v4.html">Property Grid 04</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Single view</span>
                <ul>
                  <li>
                    <a href="property-single-v1.html">Property Single 01</a>
                  </li>
                  <li>
                    <a href="property-single-v2.html">Property Single 02</a>
                  </li>
                  <li>
                    <a href="property-single-v3.html">Property Single 03</a>
                  </li>
                  <li>
                    <a href="property-single-v4.html">Property Single 04</a>
                  </li>
                  <li>
                    <a href="property-single-v5.html">Property Single 05</a>
                  </li>
                  <li>
                    <a href="property-single-v6.html">Property Single 06</a>
                  </li>
                  <li>
                    <a href="property-single-v7.html">Property Single 07</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Map Style</span>
                <ul>
                  <li>
                    <a href="property-map-v1.html">Property Map 01</a>
                  </li>
                  <li>
                    <a href="property-map-v2.html">Property Map 02</a>
                  </li>
                  <li>
                    <a href="property-map-v3.html">Property Map 03</a>
                  </li>
                  <li>
                    <a href="property-map-v4.html">Property Map 04</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span>Realtor</span>
            <ul>
              <li>
                <a href="agent-list.html">Agent List</a>
              </li>
              <li>
                <a href="agent-single.html">Agent Single</a>
              </li>
              <li>
                <a href="agency-list.html">Agency List</a>
              </li>
              <li>
                <a href="agency-single.html">Agency Single</a>
              </li>
            </ul>
          </li>
          <li>
            <span>Pages</span>
            <ul>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="compare.html">Compare</a>
              </li>
              <li>
                <a href="pricing.html">Pricing Packages</a>
              </li>
              <li>
                <a href="faq.html">FAQ Page</a>
              </li>
              <li>
                <a href="404.html">404 Page</a>
              </li>
              <li>
                <a href="ui-elements.html">UI Elements</a>
              </li>
              <li>
                <a href="dashboard.html">Dashboard</a>
              </li>
            </ul>
          </li>
          <li>
            <span>Shop</span>
            <ul>
              <li>
                <a href="shop-list.html">Shop List</a>
              </li>
              <li>
                <a href="shop-single.html">Shop Single</a>
              </li>
              <li>
                <a href="shop-cart.html">Shop Cart</a>
              </li>
              <li>
                <a href="shop-checkout.html">Shop Checkout</a>
              </li>
              <li>
                <a href="shop-order.html">Shop Order</a>
              </li>
            </ul>
          </li>
          <li>
            <span>Blog</span>
            <ul>
              <li>
                <a href="blog-list-v1.html">Blog List 01</a>
              </li>
              <li>
                <a href="blog-list-v2.html">Blog List 02</a>
              </li>
              <li>
                <a href="blog-list-v3.html">Blog List 03</a>
              </li>
              <li>
                <a href="blog-single.html">Blog Single</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    <Scripts />
    </>

  )
}

export default Header1