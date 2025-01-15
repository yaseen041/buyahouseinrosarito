import React from 'react'

const Footer = () => {
  return (
    <footer className="footer style-1 style-full">
    <div className="footer-inner">
        <div className="footer-inner-wrap">
            <div className="center-footer">
                <div className="icon">
                    <i className="flaticon-paper-plane" />
                </div>
                <h2>Stay Up to Date</h2>
                <p>Subscribe to our newsletter to receive our weekly feed.</p>
                <form className="form-subscribe">
                    <fieldset className="name">
                        <input
                            type="text"
                            placeholder="Enter Your Email Address"
                            className="style-4"
                            name="name"
                            tabIndex={2}
                            defaultValue=""
                            aria-required="true"
                            required=""
                        />
                    </fieldset>
                    <div className="button-submit style-absolute-right-center">
                        <button className="style-subscribe" type="submit">
                            <i className="flaticon-message" />
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className="bottom-footer">
        <div className="cl-container">
            <div className="row">
                <div className="col-12">
                    <div className="inner">
                        <p>Copyright © 2024. JustHome</p>
                        <div id="footer-logo">
                            <a href="index.html">
                                <img src="/assets/images/logo/logo-footer.svg" alt="images" />
                            </a>
                        </div>
                        <div className="wg-social">
                            <ul className="list-social">
                                <li>
                                    <a href="#">
                                        <i className="icon-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon-linkedin2" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="progress-wrap active-progress">
  <svg
    className="progress-circle svg-content"
    width="100%"
    height="100%"
    viewBox="-1 -1 102 102"
  >
    <path
      d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
      style={{
        transition: "stroke-dashoffset 10ms linear 0s",
        strokeDasharray: "307.919, 307.919",
        strokeDashoffset: "286.138"
      }}
    />
  </svg>
</div> */}

</footer>
  )
}

export default Footer