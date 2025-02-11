"use client";
import React, { useState, useEffect, useRef } from "react";
import Header3 from "../header3";
import Footer from "../footer";
import Link from "next/link";
import CustomScript from "@/app/scripts";
import Map from "../map";
import { url } from "@/app/utils/urls";
import Loader from "../loader/Loader";
import { useUnitContext } from "@/app/utils/UnitContext";
import { Tooltip, Overlay } from "react-bootstrap";
import { useParams } from "next/navigation";
import { api } from '@/app/utils/api';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const DetailPage = () => {
  const { isSquareMeter, toggleUnit } = useUnitContext();
  const [properties, setProperties] = useState([]);
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState("");
  const [errors, setErrors] = useState({});
  const [spin, setSpin] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const targetRef = useRef(null);
  const [loading, setLoading] = React.useState(true)
  const [property, setProperty] = React.useState({})
  const [agent, setAgent] = React.useState({})
  const params = useParams()
  const { slug } = params;

  const getProertyDetail = async () => {
    try {
      const data = await api.Get(`${url.PROPERTY}/${slug}`)
      if (data) {
        setProperty(data.data)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const getAgent = async () => {
    try {
      const data = await api.Get(`${url.AGENT}/${property.agent}`)
      if (Object.keys(data).length > 0) {
        setAgent(data.data)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getProertyDetail()

  }, [slug])
  React.useEffect(() => {
    getAgent()
  }, [property])
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(url.PROPERTIESOPTIONS);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        if (data) {
          setProperties(data.data);

        }

      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProperties();
  }, [url, setProperties]);

  useEffect(() => {
    if (properties.length > 0 && Object.keys(property).length > 0) {
      const propertyId = properties.find((i) => i.title === property.title)
      setSelectedProperties([propertyId.id])
    }
  }, [properties, property])

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 1500); // Hide after 1.5s
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

  return (
    <div>
      <div id="wrapper">
        <div id="page" className="">
          <Header3 />
          {loading ? (
            <Loader />
          ) : (
            <div className="main-content p-0">
              <div
                className="property-single-wrap sticky-container"
                data-sticky-container=""
              >
                <div className="cl-container">
                  <div className="row">
                    <div className="col-12">
                      <div className="flex items-center justify-between gap30 flex-wrap pt-30 pb-30">
                        <ul className="breadcrumbs style-1 justify-start">
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li>/</li>
                          <li><Link href="/property">Property</Link></li>
                          <li>/</li>
                          <li>{property?.title}</li>
                        </ul>
                        <div className="list-icons-page">
                          {/* <div className="item">
                            <div className="icon">
                              <i className="flaticon-heart" />
                            </div>
                            <p>Save</p>
                          </div> */}
                          {/* <div className="item">
                          <div className="icon">
                            <i className="flaticon-before-after" />
                          </div>
                          <p>Compare</p>
                        </div> */}
                          <div className="item">
                            <div className="icon">
                              <div
                                ref={targetRef}
                                style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
                                onClick={handleCopyUrl}
                              >
                                <i className="flaticon-outbox" />
                              </div>
                              <Overlay target={targetRef.current} show={showTooltip} placement="bottom">
                                {(props) => (
                                  <Tooltip {...props} className="show">
                                    <p style={{ color: "#FFF" }} >Copied!</p>
                                  </Tooltip>
                                )}
                              </Overlay>
                            </div>
                            <p>Share</p>
                          </div>
                          {/* <div className="item">
                          <div className="icon">
                            <i className="flaticon-tools-and-utensils" />
                          </div>
                          <p>Print</p>
                        </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="wrap-gallery-image">
                        <div className="list-tags type-1">
                          <div className="tags-item for-sell">
                            {property.listing_status}
                          </div>
                          {property.is_featured && (
                            <div className="tags-item featured">FEATURED</div>
                          )}
                        </div>
                        {Object.keys(property).length > 0
                          ? property?.gallery.slice(0, 5).map((item, index) => (
                            <a
                              href={`${item}`}
                              className={`item-${index + 1}`}
                              data-fancybox="gallery"
                              key={index}
                            >
                              <img src={item} alt={item} />
                            </a>
                          ))
                          : null}
                        {Object.keys(property).length > 0
                          ? property?.gallery.length > 5 && (
                            <a href={property.gallery[5]} className="more-photos" data-fancybox="gallery">
                              <i className="flaticon-gallery" />
                              <p>{property.gallery.length} Photos</p>
                            </a>
                          )
                          : null}

                      </div>
                    </div>
                    <div className="col-xl-8">
                      <div className="content-wrap">
                        <div className="head-title wow fadeInUp">
                          <div>
                            <h1>{property?.title}</h1>
                            <div className="location">
                              <div className="icon">
                                <i className="flaticon-location" />
                              </div>
                              <div className="text-content">
                                {property.address}
                              </div>
                            </div>
                          </div>
                          <div>
                            {property.avg_ft > 0 && (
                              <div className="square">
                                ${property.avg_ft.toLocaleString()} / sq ft
                              </div>
                            )}
                            <div className="price">

                              {Object.keys(property).length > 0
                                ?
                                <h2 className="price" >
                                  $
                                  {property?.price.toLocaleString()} {property?.listing_type === "rent" ? `/ ${property.rent_cycle}` : null}

                                </h2>
                                : null}
                            </div>
                          </div>
                        </div>
                        <div className="box-items">
                          <div className="item wow fadeInUp">
                            <div className="icon">
                              <i className="flaticon-city" />
                            </div>
                            <div className="text-content">Multi Family</div>
                          </div>
                          <div
                            className="item wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
                            <div className="icon">
                              <i className="flaticon-hammer" />
                            </div>
                            <div className="text-content">
                              Built in {property?.year_built}
                            </div>
                          </div>
                          <div
                            className="item wow fadeInUp"
                            data-wow-delay="0.2s"
                          >
                            <div className="icon">
                              <i className="flaticon-minus-front" />
                            </div>
                            <div className="text-content">
                              {/* {property?.size} Sq Ft */}
                              {/* {!isSquareMeter
                                ? property.size_mt + " Sq M"
                                : property.size + " Sq ft"} */}
                              {property.size + "sqft"} / {property.size_mt + "sqm"}
                            </div>
                          </div>
                          <div className="item wow fadeInUp">
                            <div className="icon">
                              <i className="flaticon-hotel" />
                            </div>
                            <div className="text-content">
                              {property?.bedrooms} Bedrooms
                            </div>
                          </div>
                          <div
                            className="item wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
                            <div className="icon">
                              <i className="flaticon-bath-tub" />
                            </div>
                            <div className="text-content">
                              {property?.bathrooms} Bathrooms
                            </div>
                          </div>
                          <div
                            className="item wow fadeInUp"
                            data-wow-delay="0.2s"
                          >
                            <div className="icon">
                              <i className="flaticon-garage" />
                            </div>
                            <div className="text-content">
                              {property?.parking_spaces} Parking Space
                            </div>
                          </div>
                        </div>
                        <div className="desc">
                          <h4 className="wow fadeInUp">Description</h4>
                          <div className="wow fadeInUp">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: property.description,
                              }}
                            />
                          </div>
                        </div>
                        <div className="address">
                          <div className="flex items-center justify-between gap30 flex-wrap wow fadeInUp">
                            <h4 className="mb-0">Address</h4>
                            {/* <Link href="#" className="tf-button-green">
                            <i className="flaticon-location" />
                            Open On Google Maps
                          </Link> */}
                          </div>
                          <div className="list-item">
                            <div className="item wow fadeInUp">
                              <div className="col-5 d-flex align-items-center">
                                <div className="text">Address</div>
                              </div>
                              <div
                                className="col-7  p-0 "
                                style={{
                                  display: "flex",
                                  justifyContent: "right",
                                  textWrap: "wrap",
                                  flexWrap: "wrap",
                                }}
                              >
                                <p
                                  style={{ textWrap: "wrap" }}
                                  className="text-end"
                                >
                                  {property?.address}
                                </p>
                              </div>
                            </div>
                            <div
                              className="item wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="text">Zip/Postal Code</div>
                              <p>90034</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">City</div>
                              <p>{property?.city}</p>
                            </div>
                            <div
                              className="item wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="text">Area</div>
                              <p>Brookside</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">State</div>
                              <p>{property?.state}</p>
                            </div>
                            <div
                              className="item wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="text">Country</div>
                              <p>{property?.country}</p>
                            </div>
                          </div>
                        </div>
                        {Object.keys(property).length > 0 &&
                          property.files.length > 0 ? (
                          <div className="attachments">
                            <h4 className="wow fadeInUp">
                              Property Attachments
                            </h4>
                            <div className="wrap-file-item wow fadeInUp">
                              {property.files.map((item, index) => (
                                <Link
                                  href={`${item.url}`}
                                  target="_blank"
                                  className="file-item"
                                  key={index}
                                >
                                  <div className="icon">
                                    <img
                                      src="/assets/images/image-box/file-pdf.svg"
                                      alt="file-image"
                                    />
                                  </div>
                                  <div>
                                    <div className="name">
                                      Resource file {index + 1}
                                    </div>
                                  </div>
                                </Link>
                              ))}

                              {/* <Link href="#" className="file-item">
                            <div className="icon">
                              <img src="/assets/images/image-box/file-pdf.svg" alt="image" />
                            </div>
                            <div>
                              <div className="name">Ultra-Demo-PDF File</div>
                              <div className="size">140.56 kb</div>
                            </div>
                          </Link> */}
                            </div>
                          </div>
                        ) : null}
                        <div className="details">
                          <h4 className="wow fadeInUp">Details</h4>
                          <div className="list-item">
                            <div className="item wow fadeInUp">
                              <div className="text">Property ID:</div>
                              <p>{property?.code}</p>
                            </div>
                            <div
                              className="item wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="text">Garage:</div>
                              <p>{property?.parking_spaces}</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">{property?.listing_type === "rent" ? "Rent" : "Price"}:</div>
                              <p>

                                {Object.keys(property).length > 0
                                  ?
                                  <div>
                                    $
                                    {property?.price.toLocaleString()} {property?.listing_type === "rent" ? `/ ${property?.rent_cycle}` : null}

                                  </div>
                                  : null}
                              </p>
                            </div>
                            <div
                              className="item wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="text">GLA:</div>

                              {/* <p>
                                {!isSquareMeter
                                  ? property.GLA_mt + " Sq M"
                                  : property.GLA + " Sq ft"}
                              </p> */}
                              <p>{property.GLA + "sqft"} / {property.GLA_mt + "sqm"}</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">Property Size:</div>
                              {/* <p>
                                {!isSquareMeter
                                  ? property.size_mt + " Sq M"
                                  : property.size + " Sq ft"}
                              </p> */}
                              <p>{property.size + "sqft"} / {property.size_mt + "sqm"}</p>
                            </div>
                            <div
                              className="item wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="text">Year Built:</div>
                              <p>{property?.year_built}</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">Bedrooms:</div>
                              <p>{property?.bedrooms}</p>
                            </div>

                            <div className="item wow fadeInUp">
                              <div className="text">Bathrooms:</div>
                              <p>{property?.bathrooms}</p>
                            </div>
                            <div
                              className="item wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="text">Property Status:</div>
                              <p>{property?.listing_status}</p>
                            </div>
                          </div>
                        </div>

                        <div className="features">
                          <h4 className="wow fadeInUp">Facts &amp; Features</h4>

                          <ul>
                            {Object.keys(property).length > 0
                              ? Object.keys(property.features).map(
                                (featureKey) => (
                                  <li key={featureKey}>
                                    <h5 className="wow fadeInUp">
                                      {featureKey
                                        .replace(/_/g, " ")
                                        .replace(/\b\w/g, (char) =>
                                          char.toUpperCase()
                                        )}
                                    </h5>
                                    <div
                                      className="wrap-check-ellipse wow fadeInUp"
                                      data-wow-delay="0.1s"
                                    >
                                      {property.features[featureKey].map(
                                        (item) => (
                                          <div
                                            className="check-ellipse-item"
                                            key={item.id}
                                          >
                                            <div className="icon">
                                              <i className="flaticon-check" />
                                            </div>
                                            <p>{item.title}</p>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </li>
                                )
                              )
                              : null}
                          </ul>
                        </div>

                        <div className="contact-info" id="contact">
                          <div className="flex items-center justify-between gap30 flex-wrap wow fadeInUp">
                            <h4 className="mb-0">Contact Information</h4>
                          </div>
                          {Object.keys(agent).length > 0 && (
                            <div className="person wow fadeInUp">
                              <div className="image">
                                <img src={agent.image} alt={agent.name} />
                              </div>
                              <div className="content">
                                <div className="name">
                                  <Link href="#">{agent.name}</Link>
                                </div>
                                <p>{agent.designation}</p>
                                <p>{agent.description}</p>
                              </div>
                            </div>
                          )}

                          {/* Contact Enquiry Form */}


                        </div>

                        <div className="map">
                          <h4 className="wow fadeInUp">Map</h4>
                          <div className="wrap-map-v1">
                            <Map
                              lattitude={Number(property?.lattitude)}
                              longitude={Number(property?.longitude)}
                            />
                          </div>
                        </div>

                        {Object.keys(property).length > 0 ? (
                          property?.related_listings?.length > 0 ? (
                            <div className="smilar-homes">
                              <h4 className="wow fadeInUp">Similar Homes</h4>
                              <div className="row">
                                {Object.keys(property).length > 0
                                  ? property.related_listings.map((item) => (
                                    <div className="col-xl-6" key={item.id}>
                                      <div className="box-dream has-border wow fadeInUp">
                                        <div className="image">
                                          <div className="list-tags">
                                            <div className="tags-item for-sell" style={{ backgroundColor: item.listing_type === "rent" ? "#124773" : "" }}>
                                              {item.listing_status}
                                            </div>
                                            {item.is_featured && (
                                              <div className="tags-item featured">
                                                FEATURED
                                              </div>
                                            )}
                                          </div>
                                          <div className="button-heart">
                                            <i className="flaticon-heart-1" />
                                          </div>
                                          <Swiper
                                            className="swiper-container slider-box-dream arrow-style-1 pagination-style-1"
                                            slidesPerView={1}
                                            modules={[Pagination, A11y, Navigation]}
                                            navigation
                                            pagination={{ clickable: true }}
                                          >
                                            {item.gallery.map((g, i) => (
                                              <SwiperSlide key={i}>
                                                <div className="swiper-slide">
                                                  <div className="">
                                                    <img className="" src={g} alt={g} />
                                                  </div>
                                                </div>
                                              </SwiperSlide>
                                            ))}
                                          </Swiper>
                                        </div>
                                        <div className="content"  >
                                          <div style={{ minHeight: 120 }} >
                                            <div className="head">
                                              <div className="title"  >
                                                <Link href={`/property/${item.slug}`}>
                                                  {item.title}
                                                </Link>
                                              </div>
                                              <div className="price">
                                                ${item.price.toLocaleString()} {item.listing_type === "rent" ? `/${item.rent_cycle}` : null}
                                              </div>
                                            </div>

                                            <div className="location">
                                              <div className="icon">
                                                <i className="flaticon-location" />
                                              </div>
                                              <p style={{ fontSize: 13 }}>{item.address}</p>
                                            </div>
                                          </div>
                                          <div className="icon-box">
                                            <div className="item">
                                              <i className="flaticon-hotel" />
                                              <p style={{ fontSize: 13, gap: 5 }} className="d-flex" >{item.bedrooms} <span className="" > Beds </span></p>
                                            </div>
                                            <div className="item">
                                              <i className="flaticon-bath-tub" />
                                              <p style={{ fontSize: 13, gap: 5 }} className="d-flex" >{item.bathrooms} <span className="" > Baths</span></p>
                                            </div>
                                            <div className="item">
                                              <i className="flaticon-minus-front" />

                                              {/* <p style={{fontSize:13}}>
                                        {!isSquareMeter
                                          ? item.size_mt + " Sq M"
                                          : item.size + " Sq ft"}
                                      </p> */}
                                              <p style={{ fontSize: 13, gap: 5 }} className="d-flex" >{item.size + "sqft"} / {item.size_mt + "sqm"}</p>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  ))
                                  : null}
                              </div>
                            </div>
                          ) : null
                        ) : null}
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="property-single-sidebar po-sticky">
                        <div className="sidebar-item sidebar-request">
                          <div className="contact-info" id="contact">
                            <div className="flex items-center justify-between gap30 flex-wrap wow fadeInUp">
                              {/* <h4 className="mb-0">Contact Information</h4> */}
                              {/* <Link href="#" className="tf-button-green">
                            View Listing
                          </Link> */}
                            </div>
                            {/* <div className="person wow fadeInUp">
                            <div className="image">
                              <img src={agent.image} alt="image" />
                            </div>
                            <div className="content">
                              <div className="name">
                                <Link href="#">{agent.name}</Link>
                              </div>
                              <p>{agent.designation}</p>
                              <p>{agent.phone}</p>
                            </div>
                          </div> */}

                            {/* Contact Enquiry Form */}
                            <div className="title wow fadeInUp">
                              Enquire About This Property
                            </div>
                            <form
                              className="form-comment"
                              onSubmit={handleSubmit}
                            >
                              <div className="cols">
                                <fieldset className="name wow fadeInUp has-top-title">
                                  <input
                                    type="text"
                                    placeholder="Jhon Doe"
                                    value={name}
                                    onChange={(e) => {
                                      setName(e.target.value); // Update the name state
                                      setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        name: "", // Reset the name error when the user starts typing
                                      }));
                                    }}
                                    name="text"
                                    tabIndex={2}
                                    aria-required="true"
                                    required=""
                                  />
                                  <label htmlFor="">Name</label>
                                  {errors?.name && (
                                    <span className="error text-danger">
                                      {errors?.name}
                                    </span>
                                  )}
                                </fieldset>
                                <fieldset
                                  className="phone wow fadeInUp has-top-title"
                                  data-wow-delay="0.1s"
                                >
                                  <input
                                    type="number"
                                    placeholder="+1 123 456 7890"
                                    value={phone}
                                    onChange={(e) => {
                                      setPhone(e.target.value); // Update the name state
                                      setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        phone: "", // Reset the name error when the user starts typing
                                      }));
                                    }}
                                    name="phone"
                                    tabIndex={2}
                                    aria-required="true"
                                    required=""
                                  />
                                  <label htmlFor="">Phone</label>
                                  {errors?.phone && (
                                    <span className="error text-danger">
                                      {errors?.phone}
                                    </span>
                                  )}
                                </fieldset>
                              </div>

                              <fieldset className="email wow fadeInUp has-top-title mb-5 ">
                                <input
                                  type="email"
                                  placeholder="Email"
                                  value={email}
                                  onChange={(e) => {
                                    setEmail(e.target.value); // Update the name state
                                    setErrors((prevErrors) => ({
                                      ...prevErrors,
                                      email: "", // Reset the name error when the user starts typing
                                    }));
                                  }}
                                  name="email"
                                  tabIndex={2}
                                  aria-required="true"
                                  required=""
                                />
                                <label htmlFor="">Email</label>
                                {errors?.email && (
                                  <span className="error text-danger">
                                    {errors?.email}
                                  </span>
                                )}
                              </fieldset>
                              <fieldset className="message wow fadeInUp has-top-title">
                                <textarea
                                  name="message"
                                  rows={4}
                                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                  className=""
                                  tabIndex={2}
                                  aria-required="true"
                                  required=""
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                />
                                <label htmlFor="">Message</label>
                              </fieldset>
                              <div className="checkbox-item wow fadeInUp">
                                <label>
                                  <p>
                                    By submitting this form I agree to
                                    <span>Terms of Use</span>
                                  </p>
                                  <input
                                    type="checkbox"
                                    checked={consent}
                                    onChange={(e) => setConsent(e.target.checked)}
                                  />
                                  <span className="btn-checkbox" />
                                </label>
                              </div>
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
                                    {error}
                                  </div>
                                </div>
                              )}
                              <div className="button-submit wow fadeInUp">
                                <button
                                  className={`tf-button-primary w-full ${!consent ? "disabled" : ""
                                    }`}
                                  disabled={!consent || spin}
                                  type="submit"
                                >
                                  {spin ? (
                                    <>
                                      <span className="spinner"></span> Request
                                      Submitting...
                                    </>
                                  ) : (
                                    <>
                                      Request Information
                                      <i className="icon-arrow-right-add" />
                                    </>
                                  )}
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /property-single-wrap */}
            </div>
          )}
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
    </div>
  );
};

export default DetailPage;
