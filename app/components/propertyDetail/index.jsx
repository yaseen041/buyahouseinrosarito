"use client";
import React, { useState, useEffect, useRef } from "react";
import Header3 from "../header3";
import Footer from "../footer";
import Link from "next/link";
import CustomScript from "@/app/scripts";
import Map from "../map";
import MultiSelect from "../MultiSelect/MultiSelect";
import { url } from "@/app/utils/urls";
import ScheduleForm from "../ScheduleForm/ScheduleForm";
import Loader from "../loader/Loader";
import { useUnitContext } from "@/app/utils/UnitContext";
import { Tooltip, Overlay } from "react-bootstrap";
import { useParams } from "next/navigation";
const DetailPage = ({ property = {}, agent = {}, loading }) => {
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
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(url.PROPERTIESOPTIONS);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        if(data){
          setProperties(data.data);
         
        }
        
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProperties();
  }, [url, setProperties]);

  useEffect(()=>{
    if(properties.length>0 && Object.keys(property).length>0 ){
      const propertyId = properties.find((i)=>i.title===property.title)
      setSelectedProperties([propertyId.id])
    }
  },[properties,property])

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
                              <button
                                ref={targetRef}
                                style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
                                onClick={handleCopyUrl}
                              >
                                <i className="flaticon-outbox" />
                              </button>
                              <Overlay target={targetRef.current} show={showTooltip} placement="bottom">
                                {(props) => (
                                  <Tooltip {...props} className="show">
                                    <p style={{color:"#FFF"}} >Copied!</p>
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
                          ? property?.gallery.map((item, index) => (
                            <a
                              href={`${item}`}
                              className={`item-${index + 1}`}
                              data-fancybox="gallery"
                              key={index}
                            >
                              <img src={item} alt="" />
                            </a>
                          ))
                          : null}

                        {/* <a
                        href="/assets/images/house/property-detail-2.jpg"
                        className="item-2"
                        data-fancybox="gallery"
                      >
                        <img src="/assets/images/house/property-detail-2.jpg" alt="" />
                      </a>
                      <a
                        href="/assets/images/house/property-detail-3.jpg"
                        className="item-3"
                        data-fancybox="gallery"
                      >
                        <img src="/assets/images/house/property-detail-3.jpg" alt="" />
                      </a>
                      <a
                        href="/assets/images/house/property-detail-4.jpg"
                        className="item-4"
                        data-fancybox="gallery"
                      >
                        <img src="/assets/images/house/property-detail-4.jpg" alt="" />
                      </a>
                      <a
                        href="/assets/images/house/property-detail-5.jpg"
                        className="item-5"
                        data-fancybox="gallery"
                      >
                        <img src="/assets/images/house/property-detail-5.jpg" alt="" />
                      </a>
                      <a
                        href="/assets/images/house/property-detail-3.jpg"
                        className="more-photos"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-gallery" />
                        <p>42 Photos</p>
                      </a> */}
                      </div>
                    </div>
                    <div className="col-xl-8">
                      <div className="content-wrap">
                        <div className="head-title wow fadeInUp">
                          <div>
                            <h3>{property?.title}</h3>
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
                              $
                              {Object.keys(property).length > 0
                                ? property?.price.toLocaleString()
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
                              {!isSquareMeter
                                ? property.size_mt + " Sq M"
                                : property.size + " Sq ft"}
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
                              {property?.parking_spaces} Garage
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
                                      alt=""
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
                              <img src="/assets/images/image-box/file-pdf.svg" alt="" />
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
                              <div className="text">Price:</div>
                              <p>
                                $
                                {Object.keys(property).length > 0
                                  ? property?.price.toLocaleString()
                                  : null}
                              </p>
                            </div>
                            <div
                              className="item wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="text">GLA:</div>

                              <p>
                                {!isSquareMeter
                                  ? property.GLA_mt + " Sq M"
                                  : property.GLA + " Sq ft"}
                              </p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">Property Size:</div>
                              <p>
                                {!isSquareMeter
                                  ? property.size_mt + " Sq M"
                                  : property.size + " Sq ft"}
                              </p>
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
                            {/* <div
                            className="item wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
                           
                              <div className="col-4 d-flex align-items-center">
                            <div className="text">Property Type:</div>
                            </div>
                            <div className="col-8 text-right  " style={{display: 'flex', justifyContent: 'flex-end',textWrap:"wrap",flexWrap:"wrap"}}>
                            {Object.keys(property).length > 0
                              ? property.types.map((item) => (
                                  <p  key={item.id}>{item.title}</p>
                                ))
                              : null}
                              </div>
                              
                          </div> */}
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
                        {/* <div className="energy">
                        <h4 className="wow fadeInUp">Energy Class</h4>
                        <ul>
                          <li className="wow fadeInUp">
                            <div className="title">Energetic class:</div>
                            <p>A+</p>
                          </li>
                          <li className="wow fadeInUp">
                            <div className="title">
                              Global Energy Performance Index:
                            </div>
                            <p>92.42 kWh / m²a</p>
                          </li>
                          <li className="wow fadeInUp">
                            <div className="title">
                              Renewable energy performance index:
                            </div>
                            <p>00.00 kWh / m²a</p>
                          </li>
                          <li className="wow fadeInUp">
                            <div className="title">
                              Energy performance of the building:
                            </div>
                            <p>50</p>
                          </li>
                          <li className="wow fadeInUp">
                            <div className="title">EPC Current Rating:</div>
                            <p>92</p>
                          </li>
                          <li className="wow fadeInUp">
                            <div className="title">EPC Potential Rating:</div>
                            <p>80</p>
                          </li>
                        </ul>
                        <img src="/assets/images/image-box/energy.png" alt="" />
                      </div> */}
                        <div className="features">
                          <h4 className="wow fadeInUp">Facts &amp; Features</h4>
                          <p className="wow fadeInUp">
                            Lorem ipsum dolor sit amet, homero debitis
                            temporibus in mei, at sit voluptua antiopam
                            hendrerit. Lorem epicuri eu per. Mediocrem torquatos
                            deseruisse te eum commodo.
                          </p>
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

                        {/* Tour For */}
                        {/* <div className="schedule" id="schedule">
                          <h4 className="wow fadeInUp">Schedule a tour</h4>
                          <ScheduleForm propertyId={property.id} />
                        </div> */}

                        {/* <div className="plans">
                        <h4 className="wow fadeInUp">Floor Plans</h4>
                        <div className="widget-tabs style-3">
                          <ul className="widget-menu-tab wow fadeInUp">
                            <li className="item-title active">
                              <span className="inner">First Floor</span>
                            </li>
                            <li className="item-title">
                              <span className="inner">Second Floor</span>
                            </li>
                            <li className="item-title">
                              <span className="inner">Third Floor</span>
                            </li>
                          </ul>
                          <div className="widget-content-tab">
                            <div className="widget-content-inner active">
                              <div className="icons">
                                <div className="item wow fadeInUp">
                                  <i className="flaticon-hotel" />
                                  <div className="text">Bedrooms</div>
                                  <p>4</p>
                                </div>
                                <div
                                  className="item wow fadeInUp"
                                  data-wow-delay="0.1s"
                                >
                                  <i className="flaticon-bath-tub" />
                                  <div className="text">Bathrooms</div>
                                  <p>2</p>
                                </div>
                                <div
                                  className="item wow fadeInUp"
                                  data-wow-delay="0.2s"
                                >
                                  <i className="flaticon-minus-front" />
                                  <div className="text">Size</div>
                                  <p>200 SqFt</p>
                                </div>
                                <div
                                  className="item wow fadeInUp"
                                  data-wow-delay="0.3s"
                                >
                                  <i className="flaticon-tag" />
                                  <div className="text">Price</div>
                                  <p>$12.000</p>
                                </div>
                              </div>
                              <p className="wow fadeInUp">
                                Lorem ipsum dolor sit amet, homero debitis temporibus
                                in mei, at sit voluptua antiopam hendrerit. Lorem
                                epicuri eu per. Mediocrem torquatos deseruisse te eum
                                commodo.
                              </p>
                              <img src="/assets/images/section/blueprint-1.png" alt="" />
                            </div>
                            <div className="widget-content-inner">
                              <div className="icons">
                                <div className="item">
                                  <i className="flaticon-hotel" />
                                  <div className="text">Bedrooms</div>
                                  <p>4</p>
                                </div>
                                <div className="item">
                                  <i className="flaticon-bath-tub" />
                                  <div className="text">Bathrooms</div>
                                  <p>2</p>
                                </div>
                                <div className="item">
                                  <i className="flaticon-minus-front" />
                                  <div className="text">Size</div>
                                  <p>200 SqFt</p>
                                </div>
                                <div className="item">
                                  <i className="flaticon-tag" />
                                  <div className="text">Price</div>
                                  <p>$12.000</p>
                                </div>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, homero debitis temporibus
                                in mei, at sit voluptua antiopam hendrerit. Lorem
                                epicuri eu per. Mediocrem torquatos deseruisse te eum
                                commodo.
                              </p>
                              <img src="/assets/images/section/blueprint-1.png" alt="" />
                            </div>
                            <div className="widget-content-inner">
                              <div className="icons">
                                <div className="item">
                                  <i className="flaticon-hotel" />
                                  <div className="text">Bedrooms</div>
                                  <p>4</p>
                                </div>
                                <div className="item">
                                  <i className="flaticon-bath-tub" />
                                  <div className="text">Bathrooms</div>
                                  <p>2</p>
                                </div>
                                <div className="item">
                                  <i className="flaticon-minus-front" />
                                  <div className="text">Size</div>
                                  <p>200 SqFt</p>
                                </div>
                                <div className="item">
                                  <i className="flaticon-tag" />
                                  <div className="text">Price</div>
                                  <p>$12.000</p>
                                </div>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, homero debitis temporibus
                                in mei, at sit voluptua antiopam hendrerit. Lorem
                                epicuri eu per. Mediocrem torquatos deseruisse te eum
                                commodo.
                              </p>
                              <img src="/assets/images/section/blueprint-1.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div> */}
                        {/* <div className="calculator">
                        <h4 className="wow fadeInUp">Mortgage Calculator</h4>
                        <div className="pie-chart">
                          <div id="morris-donut-1" />
                          <div className="wrap-note">
                            <div className="item">
                              <div className="text">Principal and Interes</div>
                              <p>$37,800.00</p>
                            </div>
                            <div className="item">
                              <div className="text">Property Tax</div>
                              <p>$214,200.00</p>
                            </div>
                            <div className="item">
                              <div className="text">HOA fee</div>
                              <p>$252.00</p>
                            </div>
                          </div>
                        </div>
                        <form className="form-comment">
                          <fieldset className="text wow fadeInUp has-top-title">
                            <input
                              type="text"
                              placeholder="Total Amount"
                              className=""
                              name="text"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"
                              required=""
                            />
                            <label htmlFor="">Total Amount</label>
                          </fieldset>
                          <fieldset
                            className="text wow fadeInUp has-top-title"
                            data-wow-delay="0.1s"
                          >
                            <input
                              type="text"
                              placeholder="Down Payment"
                              className=""
                              name="text"
                              tabIndex={2}
                              defaultValue={15}
                              aria-required="true"
                              required=""
                            />
                            <label htmlFor="">Down Payment</label>
                          </fieldset>
                          <fieldset
                            className="text wow fadeInUp has-top-title"
                            data-wow-delay="0.2s"
                          >
                            <input
                              type="text"
                              placeholder="Interest Rate"
                              className=""
                              name="text"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"
                              required=""
                            />
                            <label htmlFor="">Interest Rate</label>
                          </fieldset>
                          <fieldset className="text wow fadeInUp has-top-title">
                            <input
                              type="text"
                              placeholder="Loan Terms (Years)"
                              className=""
                              name="text"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"
                              required=""
                            />
                            <label htmlFor="">Loan Terms (Years)</label>
                          </fieldset>
                          <fieldset
                            className="text wow fadeInUp has-top-title"
                            data-wow-delay="0.1s"
                          >
                            <input
                              type="text"
                              placeholder="Property Tax"
                              className=""
                              name="text"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"
                              required=""
                            />
                            <label htmlFor="">Property Tax</label>
                          </fieldset>
                          <fieldset
                            className="text wow fadeInUp has-top-title"
                            data-wow-delay="0.2s"
                          >
                            <input
                              type="text"
                              placeholder="Home Insurance"
                              className=""
                              name="text"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"
                              required=""
                            />
                            <label htmlFor="">Home Insurance</label>
                          </fieldset>
                          <fieldset className="text wow fadeInUp has-top-title">
                            <input
                              type="text"
                              placeholder="Monthly HOA Fees"
                              className=""
                              name="text"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"
                              required=""
                            />
                            <label htmlFor="">Monthly HOA Fees</label>
                          </fieldset>
                          <fieldset
                            className="text wow fadeInUp has-top-title"
                            data-wow-delay="0.1s"
                          >
                            <input
                              type="text"
                              placeholder="PMI"
                              className=""
                              name="text"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"
                              required=""
                            />
                            <label htmlFor="">PMI</label>
                          </fieldset>
                        </form>
                      </div> */}
                        <div className="contact-info" id="contact">
                          <div className="flex items-center justify-between gap30 flex-wrap wow fadeInUp">
                            <h4 className="mb-0">Contact Information</h4>
                            {/* <Link href="#" className="tf-button-green">
                            View Listing
                          </Link> */}
                          </div>
                          <div className="person wow fadeInUp">
                            <div className="image">
                              <img src={agent.image} alt="" />
                            </div>
                            <div className="content">
                              <div className="name">
                                <Link href="#">{agent.name}</Link>
                              </div>
                              <p>{agent.designation}</p>
                              <p>{agent.phone}</p>
                            </div>
                          </div>

                          {/* Contact Enquiry Form */}
                         
                         
                        </div>
                        {/* <div className="video">
                        <h4 className="wow fadeInUp">Video</h4>
                        <div className="video-wrap">
                          <img src="/assets/images/image-box/video-2.jpg" alt="" />
                          <Link
                            href="https://www.youtube.com/watch?v=MLpWrANjFbI"
                            className="popup-youtube"
                          >
                            <div className="icon">
                              <i className="flaticon-play" />
                            </div>
                          </Link>
                        </div>
                      </div> */}
                        <div className="map">
                          <h4 className="wow fadeInUp">Map</h4>
                          <div className="wrap-map-v1">
                            <Map
                              lattitude={Number(property?.lattitude)}
                              longitude={Number(property?.longitude)}
                            />
                          </div>
                        </div>
                        {/* <div className="tour">
                        <h4 className="wow fadeInUp">360° Virtual Tour</h4>
                        <div className="image">
                          <img src="/assets/images/image-box/img-virtual-1.jpg" alt="" />
                        </div>
                      </div> */}
                        {/* <div className="page-views">
                        <h4 className="wow fadeInUp">Property Views</h4>
                        <div className="area-chart">
                          <div id="line-chart-5" />
                        </div>
                      </div> */}
                        {/* <div className="walk-score">
                        <h4 className="wow fadeInUp">Walk Score</h4>
                        <div className="wrap-walk-score">
                          <div className="walk-score-item wow fadeInUp">
                            <div className="icon">
                              <i className="flaticon-walk" />
                            </div>
                            <div>
                              <div className="title">Walk Score®</div>
                              <p>96 / 100</p>
                              <p>Walker's Paradise</p>
                            </div>
                          </div>
                          <div
                            className="walk-score-item wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
                            <div className="icon">
                              <i className="flaticon-bike" />
                            </div>
                            <div>
                              <div className="title">Bike Score®</div>
                              <p>96 / 100</p>
                              <p>Bikeable</p>
                            </div>
                          </div>
                        </div>
                      </div> */}
                        {/* <div className="nearby">
                        <h4 className="wow fadeInUp">What's Nearby?</h4>
                        <div className="widget-tabs style-2 type-small">
                          <ul className="widget-menu-tab wow fadeInUp">
                            <li className="item-title active">
                              <span className="inner">Schools</span>
                            </li>
                            <li className="item-title">
                              <span className="inner">Food</span>
                            </li>
                            <li className="item-title">
                              <span className="inner">Health &amp; Medical</span>
                            </li>
                          </ul>
                          <div className="widget-content-tab">
                            <div className="widget-content-inner active">
                              <div className="wrap-nearby">
                                <div className="nearby-item wow fadeInUp">
                                  <div className="number">
                                    <h4>
                                      9<span>/10</span>
                                    </h4>
                                  </div>
                                  <div>
                                    <div className="title">Ps 95 Eastwood</div>
                                    <div className="flex items-center gap15">
                                      <p>
                                        Grades: <span>K-5</span>
                                      </p>
                                      <p>
                                        Distance: <span>0.3 mi</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="nearby-item wow fadeInUp">
                                  <div className="number">
                                    <h4>
                                      5<span>/10</span>
                                    </h4>
                                  </div>
                                  <div>
                                    <div className="title">
                                      Is 238 Susan B Anthony
                                    </div>
                                    <div className="flex items-center gap15">
                                      <p>
                                        Grades: <span>K-5</span>
                                      </p>
                                      <p>
                                        Distance: <span>0.3 mi</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="nearby-item wow fadeInUp">
                                  <div className="number">
                                    <h4>
                                      3<span>/10</span>
                                    </h4>
                                  </div>
                                  <div>
                                    <div className="title">
                                      Cambria Heights Academy
                                    </div>
                                    <div className="flex items-center gap15">
                                      <p>
                                        Grades: <span>K-5</span>
                                      </p>
                                      <p>
                                        Distance: <span>0.3 mi</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-inner">
                              <div className="wrap-nearby">
                                <div className="nearby-item">
                                  <div className="number">
                                    <h4>
                                      9<span>/10</span>
                                    </h4>
                                  </div>
                                  <div>
                                    <div className="title">Ps 95 Eastwood</div>
                                    <div className="flex items-center gap15">
                                      <p>
                                        Grades: <span>K-5</span>
                                      </p>
                                      <p>
                                        Distance: <span>0.3 mi</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="nearby-item">
                                  <div className="number">
                                    <h4>
                                      5<span>/10</span>
                                    </h4>
                                  </div>
                                  <div>
                                    <div className="title">
                                      Is 238 Susan B Anthony
                                    </div>
                                    <div className="flex items-center gap15">
                                      <p>
                                        Grades: <span>K-5</span>
                                      </p>
                                      <p>
                                        Distance: <span>0.3 mi</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="nearby-item">
                                  <div className="number">
                                    <h4>
                                      3<span>/10</span>
                                    </h4>
                                  </div>
                                  <div>
                                    <div className="title">
                                      Cambria Heights Academy
                                    </div>
                                    <div className="flex items-center gap15">
                                      <p>
                                        Grades: <span>K-5</span>
                                      </p>
                                      <p>
                                        Distance: <span>0.3 mi</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-inner">
                              <div className="wrap-nearby">
                                <div className="nearby-item">
                                  <div className="number">
                                    <h4>
                                      9<span>/10</span>
                                    </h4>
                                  </div>
                                  <div>
                                    <div className="title">Ps 95 Eastwood</div>
                                    <div className="flex items-center gap15">
                                      <p>
                                        Grades: <span>K-5</span>
                                      </p>
                                      <p>
                                        Distance: <span>0.3 mi</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="nearby-item">
                                  <div className="number">
                                    <h4>
                                      5<span>/10</span>
                                    </h4>
                                  </div>
                                  <div>
                                    <div className="title">
                                      Is 238 Susan B Anthony
                                    </div>
                                    <div className="flex items-center gap15">
                                      <p>
                                        Grades: <span>K-5</span>
                                      </p>
                                      <p>
                                        Distance: <span>0.3 mi</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="nearby-item">
                                  <div className="number">
                                    <h4>
                                      3<span>/10</span>
                                    </h4>
                                  </div>
                                  <div>
                                    <div className="title">
                                      Cambria Heights Academy
                                    </div>
                                    <div className="flex items-center gap15">
                                      <p>
                                        Grades: <span>K-5</span>
                                      </p>
                                      <p>
                                        Distance: <span>0.3 mi</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                        {/* <div className="reviews-wrap">
                        <div className="flex justify-between items-center mb-40 wow fadeInUp">
                          <h4 className="mb-0">4 Reviews</h4>
                          <Link href="#" className="tf-button-green">
                            Leave a Review
                          </Link>
                        </div>
                        <ul>
                          <li className="wow fadeInUp">
                            <div className="image">
                              <img src="/assets/images/author/author-5.png" alt="" />
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
                              <img src="/assets/images/author/author-6.png" alt="" />
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
                      </div> */}
                        {/* <div className="leave-a-review">
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
                              <p>
                                Save my name, email, and website in this browser for
                                the next time I comment.
                              </p>
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
                      </div> */}
                        {Object.keys(property).length > 0 ? (
                          property?.related_listings?.length > 0 ? (
                            <div className="smilar-homes">
                              <h4 className="wow fadeInUp">Similar Homes</h4>
                              <div className="row">
                                {Object.keys(property).length > 0
                                  ? property.related_listings.map((item) => (
                                    <div className="col-md-6">
                                      <div className="box-dream has-border wow fadeInUp">
                                        <div className="image">
                                          <div className="list-tags">
                                            <Link
                                              href="#"
                                              className="tags-item for-sell"
                                            >
                                              FOR RENT
                                            </Link>
                                            <Link
                                              href="#"
                                              className="tags-item featured"
                                            >
                                              FEATURED
                                            </Link>
                                          </div>
                                          <div className="button-heart">
                                            <i className="flaticon-heart-1" />
                                          </div>
                                          <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                            <div className="swiper-wrapper">
                                              <div className="swiper-slide">
                                                <div className="w-full">
                                                  <img
                                                    className="w-full"
                                                    src="/assets/images/house/home-1.jpg"
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                              <div className="swiper-slide">
                                                <div className="w-full">
                                                  <img
                                                    className="w-full"
                                                    src="/assets/images/house/home-2.jpg"
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                              <div className="swiper-slide">
                                                <div className="w-full">
                                                  <img
                                                    className="w-full"
                                                    src="/assets/images/house/home-3.jpg"
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                              <div className="swiper-slide">
                                                <div className="w-full">
                                                  <img
                                                    className="w-full"
                                                    src="/assets/images/house/home-4.jpg"
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="swiper-pagination box-dream-pagination" />
                                            <div className="box-dream-next swiper-button-next" />
                                            <div className="box-dream-prev swiper-button-prev" />
                                          </div>
                                        </div>
                                        <div className="content">
                                          <div className="head">
                                            <div className="title">
                                              <Link href="/property/property-single">
                                                Home Pitt Street
                                              </Link>
                                            </div>
                                            <div className="price">
                                              $815,000
                                            </div>
                                          </div>
                                          <div className="location">
                                            <div className="icon">
                                              <i className="flaticon-location" />
                                            </div>
                                            <p>
                                              148-37 88th Ave, Jamaica, NY
                                              11435
                                            </p>
                                          </div>
                                          <div className="icon-box">
                                            <div className="item">
                                              <i className="flaticon-hotel" />
                                              <p>4 Beds</p>
                                            </div>
                                            <div className="item">
                                              <i className="flaticon-bath-tub" />
                                              <p>3 Baths</p>
                                            </div>
                                            <div className="item">
                                              <i className="flaticon-minus-front" />
                                              <p>2660 Sqft</p>
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
                              <img src={agent.image} alt="" />
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
                            <div className="row">
                              <div className="col-12">
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
                              </div>
                              {/* <div className="col-12 mt-5 ">
                                <fieldset
                                  className=" wow fadeInUp  "
                                  data-wow-delay="0.1s"
                                  tabIndex={0}
                                >
                                  <MultiSelect
                                    options={properties}
                                    onChange={handleSelectionChange}
                                  />

                                  {errors?.property_id && (
                                    <span className="error text-danger">
                                      {errors?.property_id}
                                    </span>
                                  )}
                                </fieldset>
                              </div> */}
                            </div>
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
