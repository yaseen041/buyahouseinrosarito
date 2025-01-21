"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Footer = () => {

    const d = new Date()
    const year = d.getFullYear()
const pathname = usePathname()
  return (
    <footer className={`footer ${pathname==="/"?"p-0":""}`}>
          <div className={`footer-inner ${pathname==="/"?"rounded-0":""}`}>
            <div className="footer-inner-wrap">
              <div className="top-footer">
                <div className="logo-footer">
                  <Link href="/">
                    <img
                      id="logo-footer"
                      src="/elrealestate/assets/images/logo/logo-footer.svg"
                      alt="images"
                    />
                  </Link>
                </div>
                <div className="wg-social">
                  <span>Follow Us</span>
                  <ul className="list-social">
                    <li>
                      <Link href="#">
                        <i className="icon-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="icon-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="icon-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="icon-linkedin2" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="center-footer">
                <div className="footer-cl-1">
                  <div className="ft-title">Subscribe</div>
                  <form className="form-subscribe style-line-bottom">
                    <fieldset className="email">
                      <input
                        type="email"
                        placeholder="Your e-mail"
                        className="style-1"
                        name="email"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                    <div className="button-submit style-absolute-right">
                      <button className="tf-button-bg" type="submit">
                        Send <i className="icon-arrow-right-add" />
                      </button>
                    </div>
                  </form>
                  <div className="text">
                    Subscribe to our newsletter to receive our weekly feed.
                  </div>
                </div>
                <div className="footer-cl-2">
                  <div className="ft-title">Discover</div>
                  <ul className="navigation-menu-footer">
                    <li>
                      <Link href="#">Miami</Link>
                    </li>
                    <li>
                      <Link href="#">New York</Link>
                    </li>
                    <li>
                      <Link href="#">Chicago</Link>
                    </li>
                    <li>
                      <Link href="#">Sacramento</Link>
                    </li>
                    <li>
                      <Link href="#">Los Angeles</Link>
                    </li>
                    <li>
                      <Link href="#">San Francisco</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-cl-3">
                  <div className="ft-title">Quick Links</div>
                  <ul className="navigation-menu-footer">
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="#">Faq</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="#">Pricing Plans</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Terms &amp; Conditions</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-cl-4">
                  <div className="ft-title">Contact Us</div>
                  <ul className="navigation-menu-footer">
                    <li>
                      <div className="text">hi@justhome.com (123) 456-7890</div>
                    </li>
                  </ul>
                </div>
                <div className="footer-cl-5">
                  <div className="ft-title">Our Address</div>
                  <ul className="navigation-menu-footer">
                    <li>
                      <div className="text">
                        90 Fifth Avenue, 3rd Floor San Francisco, CA 1980
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="footer-cl-6">
                  <div className="ft-title">Get the app</div>
                  <ul className="ft-download">
                    <li>
                      <Link href="#">
                        <div className="icon">
                          <i className="icon-appleinc" />
                        </div>
                        <div className="app">
                          <div>Download on the</div>
                          <div>Apple Store</div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <div className="icon">
                          <i className="icon-ch-play" />
                        </div>
                        <div className="app">
                          <div>Get in on</div>
                          <div>Google Play</div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom-footer">
                <div className="text">Copyright © {year}. Explore logics</div>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer