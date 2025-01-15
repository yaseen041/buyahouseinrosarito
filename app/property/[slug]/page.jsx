'use client';
import React from 'react'
import Header3 from '@/app/components/header3'
import Footer from '@/app/components/footer';
import Link from 'next/link';
const DetailPage = () => {
  return (
    <div>
      <div id="wrapper">
  {/* #page */}
  <div id="page" className="">
    {/* header */}
   <Header3 />
    {/* /header */}
    {/* main-content */}
    <div className="main-content">
      {/* property-single-wrap */}
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
                    <Link href="index.html">Home</Link>
                  </li>
                  <li>/</li>
                  <li>Property List</li>
                  <li>/</li>
                  <li>Renovated Apartment</li>
                </ul>
                <div className="list-icons-page">
                  <div className="item">
                    <div className="icon">
                      <i className="flaticon-heart" />
                    </div>
                    <p>Save</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <i className="flaticon-before-after" />
                    </div>
                    <p>Compare</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <i className="flaticon-outbox" />
                    </div>
                    <p>Share</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <i className="flaticon-tools-and-utensils" />
                    </div>
                    <p>Print</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="wrap-gallery-image">
                <div className="list-tags type-1">
                  <Link href="#" className="tags-item for-sell">
                    FOR RENT
                  </Link>
                  <Link href="#" className="tags-item featured">
                    FEATURED
                  </Link>
                </div>
                <Link
                  href="/assets/images/house/property-detail-1.jpg"
                  className="item-1"
                  data-fancybox="gallery"
                >
                  <img src="/assets/images/house/property-detail-1.jpg" alt="" />
                </Link>
                <Link
                  href="/assets/images/house/property-detail-2.jpg"
                  className="item-2"
                  data-fancybox="gallery"
                >
                  <img src="/assets/images/house/property-detail-2.jpg" alt="" />
                </Link>
                <Link
                  href="/assets/images/house/property-detail-3.jpg"
                  className="item-3"
                  data-fancybox="gallery"
                >
                  <img src="/assets/images/house/property-detail-3.jpg" alt="" />
                </Link>
                <Link
                  href="/assets/images/house/property-detail-4.jpg"
                  className="item-4"
                  data-fancybox="gallery"
                >
                  <img src="/assets/images/house/property-detail-4.jpg" alt="" />
                </Link>
                <Link
                  href="/assets/images/house/property-detail-5.jpg"
                  className="item-5"
                  data-fancybox="gallery"
                >
                  <img src="/assets/images/house/property-detail-5.jpg" alt="" />
                </Link>
                <Link
                  href="/assets/images/house/property-detail-3.jpg"
                  className="more-photos"
                  data-fancybox="gallery"
                >
                  <i className="flaticon-gallery" />
                  <p>42 Photos</p>
                </Link>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="content-wrap">
                <div className="head-title wow fadeInUp">
                  <div>
                    <h3>Villa One Hyde Park</h3>
                    <div className="location">
                      <div className="icon">
                        <i className="flaticon-location" />
                      </div>
                      <div className="text-content">
                        148-37 88th Ave, Jamaica, NY 11435
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="square">$ 1,098 /sq ft</div>
                    <div className="price">$989,000</div>
                  </div>
                </div>
                <div className="box-items">
                  <div className="item wow fadeInUp">
                    <div className="icon">
                      <i className="flaticon-city" />
                    </div>
                    <div className="text-content">Multi Family</div>
                  </div>
                  <div className="item wow fadeInUp" data-wow-delay="0.1s">
                    <div className="icon">
                      <i className="flaticon-hammer" />
                    </div>
                    <div className="text-content">Built in 1940</div>
                  </div>
                  <div className="item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon">
                      <i className="flaticon-minus-front" />
                    </div>
                    <div className="text-content">1500 Sq Ft</div>
                  </div>
                  <div className="item wow fadeInUp">
                    <div className="icon">
                      <i className="flaticon-hotel" />
                    </div>
                    <div className="text-content">3 Bedrooms</div>
                  </div>
                  <div className="item wow fadeInUp" data-wow-delay="0.1s">
                    <div className="icon">
                      <i className="flaticon-bath-tub" />
                    </div>
                    <div className="text-content">2 Bathrooms</div>
                  </div>
                  <div className="item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon">
                      <i className="flaticon-garage" />
                    </div>
                    <div className="text-content">1 Garage</div>
                  </div>
                </div>
                <div className="desc">
                  <h4 className="wow fadeInUp">Description</h4>
                  <p className="wow fadeInUp">
                    Enchanting three bedroom, three bath home with spacious one
                    bedroom, one bath cabana, in-laws quarters. Charming living
                    area features fireplace and fabulous art deco details.
                    Formal dining room.
                    <br />
                    <br />
                    Remodeled kitchen with granite countertops, white cabinetry
                    and stainless appliances. Lovely master bedroom has updated
                    bath, beautiful view of the pool. Guest bedrooms have
                    walk-in, cedar closets. Delightful backyard; majestic oaks
                    surround the free form pool and expansive patio, wet bar and
                    grill.
                  </p>
                </div>
                <div className="address">
                  <div className="flex items-center justify-between gap30 flex-wrap wow fadeInUp">
                    <h4 className="mb-0">Address</h4>
                    <Link href="#" className="tf-button-green">
                      <i className="flaticon-location" />
                      Open On Google Maps
                    </Link>
                  </div>
                  <div className="list-item">
                    <div className="item wow fadeInUp">
                      <div className="text">Address</div>
                      <p>10425 Tabor St</p>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay="0.1s">
                      <div className="text">Zip/Postal Code</div>
                      <p>90034</p>
                    </div>
                    <div className="item wow fadeInUp">
                      <div className="text">City</div>
                      <p>Los Angeles</p>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay="0.1s">
                      <div className="text">Area</div>
                      <p>Brookside</p>
                    </div>
                    <div className="item wow fadeInUp">
                      <div className="text">State/county</div>
                      <p>California</p>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay="0.1s">
                      <div className="text">Country</div>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                <div className="attachments">
                  <h4 className="wow fadeInUp">Property Attachments</h4>
                  <div className="wrap-file-item wow fadeInUp">
                    <Link href="#" className="file-item">
                      <div className="icon">
                        <img src="/assets/images/image-box/file-pdf.svg" alt="" />
                      </div>
                      <div>
                        <div className="name">Ultra-Demo-PDF File</div>
                        <div className="size">140.56 kb</div>
                      </div>
                    </Link>
                    <Link href="#" className="file-item">
                      <div className="icon">
                        <img src="/assets/images/image-box/file-pdf.svg" alt="" />
                      </div>
                      <div>
                        <div className="name">Ultra-Demo-PDF File</div>
                        <div className="size">140.56 kb</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="details">
                  <h4 className="wow fadeInUp">Details</h4>
                  <div className="list-item">
                    <div className="item wow fadeInUp">
                      <div className="text">Property ID:</div>
                      <p>HZ48</p>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay="0.1s">
                      <div className="text">Garage:</div>
                      <p>1</p>
                    </div>
                    <div className="item wow fadeInUp">
                      <div className="text">Price:</div>
                      <p>$252,000</p>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay="0.1s">
                      <div className="text">Garage Size:</div>
                      <p>200 SqFt</p>
                    </div>
                    <div className="item wow fadeInUp">
                      <div className="text">Property Size:</div>
                      <p>1500 Sq Ft</p>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay="0.1s">
                      <div className="text">Year Built:</div>
                      <p>2024</p>
                    </div>
                    <div className="item wow fadeInUp">
                      <div className="text">Bedrooms:</div>
                      <p>6</p>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay="0.1s">
                      <div className="text">Property Type:</div>
                      <p>Apartment</p>
                    </div>
                    <div className="item wow fadeInUp">
                      <div className="text">Bathrooms:</div>
                      <p>4</p>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay="0.1s">
                      <div className="text">Property Status:</div>
                      <p>For Sale</p>
                    </div>
                  </div>
                </div>
                <div className="energy">
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
                </div>
                <div className="features">
                  <h4 className="wow fadeInUp">Facts &amp; Features</h4>
                  <p className="wow fadeInUp">
                    Lorem ipsum dolor sit amet, homero debitis temporibus in
                    mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu
                    per. Mediocrem torquatos deseruisse te eum commodo.
                  </p>
                  <ul>
                    <li>
                      <h5 className="wow fadeInUp">Interior Details</h5>
                      <div
                        className="wrap-check-ellipse wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Equipped Kitchen</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Gym</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Laundry</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Media Room</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5 className="wow fadeInUp">Outdoor Details</h5>
                      <div
                        className="wrap-check-ellipse wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Back yard</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Basketball court</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Front yard</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Garage Attached</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Hot Bath</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Pool</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5 className="wow fadeInUp">Utilities Central</h5>
                      <div
                        className="wrap-check-ellipse wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Central Air</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Electricity</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Heating</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Natural Gas</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Ventilation</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Water</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5 className="wow fadeInUp">Other Features</h5>
                      <div
                        className="wrap-check-ellipse wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Chair Accessible</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Elevator </p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Fireplace</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Smoke detectors</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>Washer and dryer</p>
                        </div>
                        <div className="check-ellipse-item">
                          <div className="icon">
                            <i className="flaticon-check" />
                          </div>
                          <p>WiFi</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="schedule">
                  <h4 className="wow fadeInUp">Schedule a tour</h4>
                  <form className="form-schedule">
                    <div className="cols">
                      <fieldset className="message">
                        <input
                          type="date"
                          name="date"
                          defaultValue="2023-11-20"
                        />
                      </fieldset>
                      <div className="nice-select" tabIndex={0}>
                        <span className="current">Please Select Time</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            6 AM
                          </li>
                          <li data-value="For Ren" className="option">
                            12 AM
                          </li>
                          <li data-value="Sold" className="option">
                            6 PM
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget-tabs style-4">
                      <ul className="widget-menu-tab">
                        <li className="item-title active">
                          <span className="inner">In Person</span>
                        </li>
                        <li className="item-title">
                          <span className="inner">Video Chat</span>
                        </li>
                      </ul>
                      <div className="widget-content-tab">
                        <div className="widget-content-inner active">
                          <div className="cols">
                            <fieldset className="name has-top-title">
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
                            <fieldset className="phone has-top-title">
                              <input
                                type="number"
                                placeholder="Phone"
                                className=""
                                name="number"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">Phone</label>
                            </fieldset>
                            <fieldset className="email has-top-title">
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
                              <label htmlFor="">Email</label>
                            </fieldset>
                          </div>
                          <fieldset className="message has-top-title">
                            <textarea
                              name="message"
                              rows={4}
                              placeholder="Your Comment"
                              className=""
                              tabIndex={2}
                              aria-required="true"
                              required=""
                              defaultValue={"Lorem Ipsum Dolar Sit Amet"}
                            />
                            <label htmlFor="">Your Comment</label>
                          </fieldset>
                        </div>
                        <div className="widget-content-inner">
                          <div className="cols">
                            <fieldset className="name has-top-title">
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
                            <fieldset className="phone has-top-title">
                              <input
                                type="number"
                                placeholder="Phone"
                                className=""
                                name="number"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">Phone</label>
                            </fieldset>
                            <fieldset className="email has-top-title">
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
                              <label htmlFor="">Email</label>
                            </fieldset>
                          </div>
                          <fieldset className="message has-top-title">
                            <textarea
                              name="message"
                              rows={4}
                              placeholder="Your Comment"
                              className=""
                              tabIndex={2}
                              aria-required="true"
                              required=""
                              defaultValue={"Lorem Ipsum Dolar Sit Amet"}
                            />
                            <label htmlFor="">Your Comment</label>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div className="button-submit">
                      <button
                        className="tf-button-primary w-full"
                        type="submit"
                      >
                        Submit a Tour Request
                        <i className="icon-arrow-right-add" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="plans">
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
                </div>
                <div className="calculator">
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
                </div>
                <div className="contact-info">
                  <div className="flex items-center justify-between gap30 flex-wrap wow fadeInUp">
                    <h4 className="mb-0">Contact Information</h4>
                    <Link href="#" className="tf-button-green">
                      View Listing
                    </Link>
                  </div>
                  <div className="person wow fadeInUp">
                    <div className="image">
                      <img src="/assets/images/sidebar/agent-1.png" alt="" />
                    </div>
                    <div className="content">
                      <div className="name">
                        <Link href="#">Jane Cooper</Link>
                      </div>
                      <p>sale@justhome.com</p>
                      <p>3-596 95 38 12</p>
                    </div>
                  </div>
                  <div className="title wow fadeInUp">
                    Enquire About This Property
                  </div>
                  <form className="form-comment">
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
                      <fieldset
                        className="phone wow fadeInUp has-top-title"
                        data-wow-delay="0.1s"
                      >
                        <input
                          type="number"
                          placeholder="Phone"
                          className=""
                          name="number"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required=""
                        />
                        <label htmlFor="">Phone</label>
                      </fieldset>
                    </div>
                    <div className="cols">
                      <fieldset className="email wow fadeInUp has-top-title">
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
                        <label htmlFor="">Email</label>
                      </fieldset>
                      <div
                        className="nice-select wow fadeInUp"
                        data-wow-delay="0.1s"
                        tabIndex={0}
                      >
                        <span className="current">Please Select Time</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            6 AM
                          </li>
                          <li data-value="For Ren" className="option">
                            12 AM
                          </li>
                          <li data-value="Sold" className="option">
                            6 PM
                          </li>
                        </ul>
                      </div>
                    </div>
                    <fieldset className="message wow fadeInUp has-top-title">
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Message"
                        className=""
                        tabIndex={2}
                        aria-required="true"
                        required=""
                        defaultValue={
                          "Hello, I am interested in [Renovated apartment at last floor]"
                        }
                      />
                      <label htmlFor="">Message</label>
                    </fieldset>
                    <div className="checkbox-item wow fadeInUp">
                      <label>
                        <p>
                          By submitting this form I agree to
                          <span>Terms of Use</span>
                        </p>
                        <input type="checkbox" />
                        <span className="btn-checkbox" />
                      </label>
                    </div>
                    <div className="button-submit wow fadeInUp">
                      <button className="tf-button-primary" type="submit">
                        Request Information
                        <i className="icon-arrow-right-add" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="video">
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
                </div>
                <div className="map">
                  <h4 className="wow fadeInUp">Map</h4>
                  <div className="wrap-map-v1">
                    <div
                      id="map-2"
                      className="row-height"
                      data-map-zoom={16}
                      data-map-scroll="true"
                    />
                  </div>
                </div>
                <div className="tour">
                  <h4 className="wow fadeInUp">360° Virtual Tour</h4>
                  <div className="image">
                    <img src="/assets/images/image-box/img-virtual-1.jpg" alt="" />
                  </div>
                </div>
                <div className="page-views">
                  <h4 className="wow fadeInUp">Property Views</h4>
                  <div className="area-chart">
                    <div id="line-chart-5" />
                  </div>
                </div>
                <div className="walk-score">
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
                </div>
                <div className="nearby">
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
                </div>
                <div className="reviews-wrap">
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
                </div>
                <div className="leave-a-review">
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
                </div>
                <div className="smilar-homes">
                  <h4 className="wow fadeInUp">Similar Homes</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="box-dream has-border wow fadeInUp">
                        <div className="image">
                          <div className="list-tags">
                            <Link href="#" className="tags-item for-sell">
                              FOR RENT
                            </Link>
                            <Link href="#" className="tags-item featured">
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
                            <div className="price">$815,000</div>
                          </div>
                          <div className="location">
                            <div className="icon">
                              <i className="flaticon-location" />
                            </div>
                            <p>148-37 88th Ave, Jamaica, NY 11435</p>
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
                    <div className="col-md-6">
                      <div
                        className="box-dream has-border wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="image">
                          <div className="list-tags">
                            <Link href="#" className="tags-item for-sell">
                              FOR SELL
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
                                    src="/assets/images/house/home-2.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
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
                                Luxury Mansion
                              </Link>
                            </div>
                            <div className="price">$815,000</div>
                          </div>
                          <div className="location">
                            <div className="icon">
                              <i className="flaticon-location" />
                            </div>
                            <p>148-37 88th Ave, Jamaica, NY 11435</p>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="property-single-sidebar po-sticky">
                <div className="sidebar-item sidebar-request">
                  <div className="text">
                    Request a tour as early as <br />
                    <span>Today at 11:00AM</span>
                  </div>
                  <Link href="#" className="tf-button-primary w-full">
                    Schedule a Tour
                    <i className="icon-arrow-right-add" />
                  </Link>
                  <Link
                    href="#"
                    className="tf-button-primary w-full style-bg-white"
                  >
                    Contact an agent
                    <i className="icon-arrow-right-add" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /property-single-wrap */}
    </div>
    {/* /main-content */}
    {/* footer */}
   <Footer />
    {/* /footer */}
  </div>
  {/* /#page */}
</div>

    </div>
  )
}

export default DetailPage