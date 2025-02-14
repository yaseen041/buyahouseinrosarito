"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { api } from '@/app/utils/api';
import { url } from '@/app/utils/urls';
const Footer = () => {
  const [cities, setCities] = useState([])
  const [email, setEmail] = useState("")
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState("");
  const [formBusy,setFormBusy] = useState(false)
  const getCities = async () => {
    try {
      const data = await api.Get(url.MOST_CITIES)
      console.log("data in footer=============>", data)
      if (data) {
        setCities(data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const submitNewLetter = async (e) => {
    e.preventDefault()
    setFormBusy(true)
    try {
      const body = new FormData()
      body.append("email", email)
      const data = await api.Post(url.NEWS_LETTER, body)
      if (data.message) {

        setEmail("");
        setErrorType("success");
        setError(data.message);

        setTimeout(() => {
          setError("");
        }, 10000);
       
      } else {

        setErrorType("error");
        setError(data.message);
        setTimeout(() => {
          setError("");
        }, 10000);
      }
      setFormBusy(false)
     
    } catch (error) {
      console.log(error)
      setFormBusy(false)
    }
  }


  useEffect(() => {
    getCities()
  }, [])

  const d = new Date()
  const year = d.getFullYear()
  const pathname = usePathname()
  return (
    <footer className={`footer p-0 `}>
      <div className={`footer-inner rounded-0 `}>
        <div className="footer-inner-wrap">
          <div className="top-footer">
            <div className="logo-footer">
              <Link href="/">
                <img
                  id="logo-footer"
                  src="/assets/images/footer.png"
                  alt="images"
                  style={{ height: "50%", width: "90px" }}
                />
              </Link>
            </div>
            <div className="wg-social">
              <span>Follow Us</span>
              <ul className="list-social">
                <li>
                  <Link href="https://www.facebook.com/BuyAHouseInRosarito/about_contact_and_basic_info" target='_blank' >
                    <i className="icon-facebook" />
                  </Link>
                </li>
                {/* <li>
                      <Link href="#">
                        <i className="icon-twitter" />
                      </Link>
                    </li> */}
                {/* <li>
                      <Link href="#">
                        <i className="icon-instagram" />
                      </Link>
                    </li> */}
                <li>
                  <Link href="https://youtube.com/@buyahouseinrosarito?feature=shared" target='_blank' >
                    <img src="/youtube.svg" style={{ height: 20, width: 20 }} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="center-footer">
            <div className="footer-cl-1">
              <div className="ft-title">Subscribe</div>
              <form className="form-subscribe style-line-bottom" onSubmit={submitNewLetter} >
                <fieldset className="email">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="style-1"
                    name="email"
                    tabIndex={2}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="button-submit style-absolute-right">
                  <button className="tf-button-bg" type="submit">
                    {formBusy?"Please wait...":  "Submit"} <i className="icon-arrow-right-add" />
                  </button>
                </div>
              </form>
              {error && (
                <div
                  className={`checkbox-item wow fadeInUp ${error ? "" : "d-none"
                    }`}
                >
                  <div
                    className={`alert alert-${errorType} fade show`}
                    role="alert"
                  >
                    <strong
                      style={{ textTransform: "capitalize" }}
                    >
                      {errorType}
                    </strong>{" "}
                    <p>
                    {error}
                    </p>
                  </div>
                </div>
              )}
              <div className="text">
                Subscribe to our newsletter to receive our weekly feed.
              </div>
            </div>
            <div className="footer-cl-2">
              <div className="ft-title">Discover</div>
              <ul className="navigation-menu-footer">
                {cities.map((item) => (
                  <li key={item.id} >
                    <Link href={`/city/${item.slug}`}>{item.name}</Link>
                  </li>
                ))}


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
                  <Link href="/faq">Faq</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                {/* <li>
                      <Link href="#">Pricing Plans</Link>
                    </li> */}
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
                  <div className="text">aaron@buyahouseinrosarito.com<br /> +1 (619) 2589-7442</div>
                </li>
                <li>
                  <div className="text">
                    Chichen Itza 8170, Rosarito, Mexico, 22567
                  </div>
                </li>
              </ul>
            </div>
            
            {/* <div className="footer-cl-5">
              <div className="ft-title">Our Address</div>
              <ul className="navigation-menu-footer">
               
              </ul>
            </div> */}
            {/* <div className="footer-cl-6">
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
                </div> */}
          </div>
          <div className="bottom-footer">
            <div className="text"> Buy A House In Rosarito - Copyright © {year}. All rights reserved. Designed by <Link href="https://explorelogics.com" target="_blank" rel="nofollow" > Explore Logics</Link></div>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer