'use client';
import React from 'react'
import Header3 from '../header3';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "animate.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay"
import Footer from '../footer';
import CustomScript from '@/app/scripts';
import Map from '../map';

const ContactComponent = () => {
  

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
                    <div className="wrap-map-v5">
                       <Map />
                        <div className="grid-contact">
                            <div className="contact-item wow fadeInUp">
                                <div className="icon">
                                    <i className="flaticon-location-pin" />
                                </div>
                                <div className="content">
                                    <h4>Our Address</h4>
                                    <p>
                                        90 Fifth Avenue, 3rd Floor <br />
                                        San Francisco, CA 1980
                                    </p>
                                </div>
                                <div className="bot">
                                    <div className="text-content">See on Map</div>
                                </div>
                            </div>
                            <div className="contact-item wow fadeInUp" data-wow-delay="0.1s">
                                <div className="icon">
                                    <i className="flaticon-phone" />
                                </div>
                                <div className="content">
                                    <h4>Contact Info</h4>
                                    <p>+088 (246) 642-27-10</p>
                                </div>
                                <div className="bot">
                                    <div className="text-content">Give us a call</div>
                                </div>
                            </div>
                            <div className="contact-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon">
                                    <i className="flaticon-video-chat" />
                                </div>
                                <div className="content">
                                    <h4>Live Support</h4>
                                    <p>example@gmail.com</p>
                                </div>
                                <div className="bot">
                                    <div className="text-content">Open Live Chat</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* send-message */}
                    <section className="tf-section send-message">
                        <div className="cl-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading-section text-center">
                                        <h2 className="wow fadeInUp">Send Us a Message</h2>
                                        <div className="text wow fadeInUp">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-center">
                                <div className="col-xxl-8">
                                    <form className="form-send-message">
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
                                            <fieldset className="phone wow fadeInUp has-top-title">
                                                <input
                                                    type="number"
                                                    placeholder="Phone"
                                                    className=""
                                                    name="phone"
                                                    tabIndex={2}
                                                    defaultValue=""
                                                    aria-required="true"
                                                    required=""
                                                />
                                                <label htmlFor="">Phone</label>
                                            </fieldset>
                                        </div>
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
                                        <fieldset className="message wow fadeInUp has-top-title">
                                            <textarea
                                                name="message"
                                                rows={4}
                                                placeholder="Your Message"
                                                className=""
                                                tabIndex={2}
                                                aria-required="true"
                                                required=""
                                                defaultValue={"Lorem Ipsum"}
                                            />
                                            <label htmlFor="">Your Message</label>
                                        </fieldset>
                                        <div className="checkbox-item wow fadeInUp">
                                            <label>
                                                <p>
                                                    I consent to having this website store my submitted
                                                    information
                                                </p>
                                                <input type="checkbox" />
                                                <span className="btn-checkbox" />
                                            </label>
                                        </div>
                                        <div className="button-submit wow fadeInUp">
                                            <button className="tf-button-primary w-full" type="submit">
                                                Send Message
                                                <i className="icon-arrow-right-add" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /send-message */}
                    {/* flat-partner */}
                    <section className="tf-section flat-partner style-1 pt-0">
                        <div className="cl-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading-section text-center">
                                        <div className="text wow fadeInUp">
                                            Thousands of world’s leading companies trust Space
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="flat-brand">
                                        <Swiper
                                            className="swiper-container slider-brand"
                                            slidesPerView={2}

                                            autoplay={{ delay: 0, disableOnInteraction: false }}
                                            modules={[Autoplay]}
                                            speed={10000}
                                            loop={true}
                                            breakpoints={{
                                                450: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 30,
                                                },
                                                768: {
                                                    slidesPerView: 4,
                                                    spaceBetween: 30,
                                                },
                                                868: {
                                                    slidesPerView: 5,
                                                    spaceBetween: 30,
                                                },
                                                1400: {
                                                    slidesPerView: 5,
                                                    spaceBetween: 171,
                                                },
                                            }}






                                        >
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="slogan-logo">
                                                        <a href="#">
                                                            <img
                                                                src="/assets/images/image-box/brand-1.png"
                                                                alt="images"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="slogan-logo">
                                                        <a href="#">
                                                            <img
                                                                src="/assets/images/image-box/brand-2.png"
                                                                alt="images"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="slogan-logo">
                                                        <a href="#">
                                                            <img
                                                                src="/assets/images/image-box/brand-3.png"
                                                                alt="images"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="slogan-logo">
                                                        <a href="#">
                                                            <img
                                                                src="/assets/images/image-box/brand-4.png"
                                                                alt="images"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="slogan-logo">
                                                        <a href="#">
                                                            <img
                                                                src="/assets/images/image-box/brand-5.png"
                                                                alt="images"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="slogan-logo">
                                                        <a href="#">
                                                            <img
                                                                src="/assets/images/image-box/brand-6.png"
                                                                alt="images"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="slogan-logo">
                                                        <a href="#">
                                                            <img
                                                                src="/assets/images/image-box/brand-1.png"
                                                                alt="images"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                        </Swiper>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /flat-partner */}
                    {/* account-bar */}
                    <section className="account-bar">
                        <div className="cl-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="flex justify-between items-center flex-wrap gap15">
                                        <div>
                                            <h3 className="wow fadeInUp">Become a Real Estate Agent</h3>
                                            <div className="text wow fadeInUp">
                                                We only work with the best companies around the globe
                                            </div>
                                        </div>
                                        <a href="#" className="tf-button-primary wow fadeInUp">
                                            Register Now
                                            <i className="icon-arrow-right-add" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /account-bar */}
                </div>
                {/* /main-content */}
                {/* footer */}
               <Footer />
                {/* /footer */}
            </div>
            {/* /#page */}
        </div>
        <CustomScript
          src="/assets/js/jquery.min.js"
          strategy="lazyOnload" // Load it after the page load
          onLoad={() => {
            if (window.jQuery) {
              console.log("jQuery loaded successfully.");
              setIsJQueryLoaded(true);
            }
          }}
          onError={(e) => console.error("Failed to load jQuery:", e)}
        />
     
     
      
      <CustomScript src="/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
      <CustomScript src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
      <CustomScript src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />

      
      <CustomScript src="/assets/js/main.js"  />
        </>
    )
}

export default ContactComponent