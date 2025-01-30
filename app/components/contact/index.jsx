"use client";
import React, { useEffect, useRef, useState } from "react";
import Header3 from "../header3";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "animate.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Footer from "../footer";
import CustomScript from "@/app/scripts";
import Map from "../map";
import MultiSelect from "../MultiSelect/MultiSelect";
import Link from "next/link";
import { url } from "@/app/utils/urls";

const ContactComponent = () => {
    const [properties, setProperties] = useState([]);
    const [selectedProperties, setSelectedProperties] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [consent, setConsent] = useState(false);
    const [spin, setSpin] = useState(false);
    const [error, setError] = useState("");
    const [errorType, setErrorType] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch(url.PROPERTIESOPTIONS);
                if (!response.ok) {
                    throw new Error("Failed to fetch blog data");
                }
                const data = await response.json();
                console.log(data);
                setProperties(data.data);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchProperties();
    }, [url, setProperties]);

    const handleSelectionChange = (selected) => {
        setSelectedProperties(selected);
        setErrors((prevErrors) => ({ ...prevErrors, property_id: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSpin(true);

        const formErrors = {}; // Initialize the errors object

        // Validate each field
        if (!name || name.trim() === "") {
            formErrors.name = "Name is required.";
        }
        if (!phone || phone.trim() === "") {
            formErrors.phone = "Phone number is required.";
        }
        if (!email || email.trim() === "") {
            formErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email is not valid.";
        }
        if (!selectedProperties || selectedProperties.length === 0) {
            formErrors.property_id = "At least one property must be selected.";
        }
        if (!message || message.trim() === "") {
            formErrors.message = "Message is required.";
        }

        // If there are errors, update the errors state and return early
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Clear any existing errors before submitting
        setErrors({});

        // Example formData
        const formData = {
            name: name,
            phone: phone,
            email: email,
            property_id: JSON.stringify(selectedProperties), // Ensure this is a stringified array
            message: message,
        };

        try {
            const response = await fetch(url.SUBMITCONTACT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error("Failed to submit the contact form");
            }
            const data = await response.json();

            if (data.status === "success") {
                setSpin(false);
                setName("");
                setPhone("");
                setEmail("");
                setMessage("");
                setSelectedProperties([]);
                setErrorType("success");
                setError(data.message);

                setTimeout(() => {
                    setError("");
                }, 10000);
            } else {
                setSpin(false);
                setErrorType("error");
                setError(data.message);
                setTimeout(() => {
                    setError("");
                }, 10000);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <div id="wrapper">
                <div id="page" className="">
                    <Header3 />
                    <div className='flat-title inner-page' >
                            <div className="cl-container full">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="content">
                                            <h2>Contact</h2>
                                            <ul className="breadcrumbs" style={{ listStyle: "none" }} >
                                                <li style={{ listStyle: "none" }} className='list-unstyled' >
                                                    <Link href="/">Home</Link>
                                                </li>
                                                <li>/</li>
                                                <li>Contact</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="main-content spacing-20" style={{paddingTop:90}} >
                        
                        <div className="wrap-map-v5">
                            <Map lattitude={-34.397} longitude={150.644} />
                            <div className="grid-contact">
                                <div className="contact-item wow fadeInUp">
                                    <div className="icon">
                                        <i className="flaticon-location-pin" />
                                    </div>
                                    <div className="content">
                                        <h4>Our Address</h4>
                                        <p>
                                            Chichen Itza 8170, Rosarito, Mexico, 22567
                                        </p>
                                    </div>

                                </div>
                                <div
                                    className="contact-item wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="icon">
                                        <i className="flaticon-phone" />
                                    </div>
                                    <div className="content">
                                        <h4>Contact Info</h4>
                                        <Link href="tel:+52 664 641 1658" className="text-content">+52 664 641 1658</Link>
                                        <p></p>
                                    </div>

                                </div>
                                <div
                                    className="contact-item wow fadeInUp"
                                    data-wow-delay="0.2s"
                                >
                                    <div className="icon">
                                        <i className="flaticon-video-chat" />
                                    </div>
                                    <div className="content">
                                        <h4>Email Support</h4>
                                        <Link href="mailto:aaron@buyahouseinrosarito.com" className="text-content">aaron@buyahouseinrosarito.com</Link>
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
                                                Contact Us For Any Inquiries
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-center">
                                    <div className="col-xxl-8">
                                        <form className="form-send-message" onSubmit={handleSubmit}>
                                            <div className="cols">
                                                <fieldset className="name wow fadeInUp has-top-title">
                                                    <input
                                                        type="text"
                                                        placeholder="John Doe"
                                                        name="name"
                                                        tabIndex={2}
                                                        aria-required="true"
                                                        required=""
                                                        value={name}
                                                        onChange={(e) => {
                                                            setName(e.target.value);
                                                            setErrors((prevErrors) => ({
                                                                ...prevErrors,
                                                                name: '',
                                                            }));
                                                        }}

                                                    />
                                                    <label htmlFor="">Name</label>
                                                    {errors?.name && <span className="error text-danger">{errors?.name}</span>}
                                                </fieldset>
                                                <fieldset className="phone wow fadeInUp has-top-title">
                                                    <input
                                                        type="number"
                                                        placeholder="+1 234 567 890"
                                                        value={phone}
                                                        onChange={(e) => {
                                                            setPhone(e.target.value);
                                                            setErrors((prevErrors) => ({
                                                                ...prevErrors,
                                                                phone: '',
                                                            }));
                                                        }}

                                                        name="phone"
                                                        tabIndex={2}
                                                        aria-required="true"
                                                        required=""
                                                    />
                                                    <label htmlFor="">Phone</label>
                                                    {errors?.phone && <span className="error text-danger">{errors?.phone}</span>}
                                                </fieldset>
                                            </div>
                                            <div className="cols">
                                                <fieldset className="email wow fadeInUp has-top-title">
                                                    <input
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        value={email}
                                                        onChange={(e) => {
                                                            setEmail(e.target.value); // Update the name state
                                                            setErrors((prevErrors) => ({
                                                                ...prevErrors,
                                                                email: '', // Reset the name error when the user starts typing
                                                            }));
                                                        }}

                                                        name="email"
                                                        tabIndex={2}
                                                        aria-required="true"
                                                        required=""
                                                    />
                                                    <label htmlFor="">Email</label>
                                                    {errors?.email && <span className="error text-danger">{errors?.email}</span>}
                                                </fieldset>
                                                <fieldset className=" wow fadeInUp">
                                                    <MultiSelect
                                                        options={properties}
                                                        onChange={handleSelectionChange}
                                                    />
                                                    {errors?.property_id && <span className="error text-danger">{errors?.property_id}</span>}
                                                </fieldset>
                                            </div>
                                            <fieldset className="message wow fadeInUp has-top-title">
                                                <textarea
                                                    name="message"
                                                    rows={4}
                                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    tabIndex={2}
                                                    aria-required="true"
                                                    required=""
                                                />
                                                <label htmlFor="">Your Message</label>
                                            </fieldset>
                                            <div className="checkbox-item wow fadeInUp">
                                                <label>
                                                    <p>
                                                        I consent to having this website store my submitted
                                                        information
                                                    </p>
                                                    <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                                                    <span className="btn-checkbox" />
                                                </label>
                                            </div>
                                            {error && (
                                                <div className={`checkbox-item wow fadeInUp ${error ? '' : 'd-none'}`}>
                                                    <div className={`alert alert-${errorType} fade show`} role="alert" >
                                                        <strong style={{ textTransform: "capitalize" }}>{errorType}</strong> {error}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="button-submit wow fadeInUp">
                                                <button
                                                    type="submit"
                                                    disabled={!consent}
                                                    className={`tf-button-primary w-full ${!consent ? "disabled" : ""
                                                        }`}
                                                >
                                                    {spin ? (
                                                        <>
                                                            <span className="spinner"></span> Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <i className="icon-arrow-right-add" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /send-message */}
                        {/* flat-partner */}
                        {/* <section className="tf-section flat-partner style-1 pt-0">
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
                        </section> */}
                        {/* /flat-partner */}
                        {/* account-bar */}
                        <section className="account-bar">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="flex justify-between items-center flex-wrap gap15">
                                            <div>
                                                <h3 className="wow fadeInUp">
                                                    Become a Real Estate Agent
                                                </h3>
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

export default ContactComponent;
