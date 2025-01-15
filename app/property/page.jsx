'use client';
import React from 'react'
import Header2 from '../components/header2'
import Scripts from '../scripts'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
const Property = () => {
  const [openFilter, setOpenFilter] = React.useState(false)
  const toggleFilter = () => setOpenFilter(!openFilter)
  const prevButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);
  return (
    <div id="wrapper">
      <Scripts />
      {/* #page */}
      <div id="page" className="">
        <Header2 />
        {/* main-content */}
        <div className="main-content px-20">
          <div className="space-20" />
          {/* flat-title */}
          <div className="flat-title page-property-list-3">
            <div className="cl-container">
              <div className="row">
                <div className="col-12">
                  <div className="content">
                    <h2 className="wow fadeInUp">
                      Real Estate &amp; Homes For Sale
                    </h2>
                    <ul className="breadcrumbs wow fadeInUp">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>/</li>
                      <li>Property List</li>
                    </ul>
                    <div className="form-filter wow fadeInUp">
                      <form className="form-search-home5">
                        <div className="list">
                          <div className="group-form form-search-content">
                            <div className="form-style-has-title">
                              <div className="title">Keyword</div>
                              <div className="relative">
                                <fieldset className="name">
                                  <input
                                    type="text"
                                    placeholder="Enter Keyyword"
                                    className="show-search style-default"
                                    name="name"
                                    tabIndex={2}
                                    defaultValue=""
                                    aria-required="true"
                                    required=""
                                  />
                                </fieldset>
                                <div className="style-absolute-right">
                                  <div className="style-icon-default">
                                    <i className="flaticon-magnifiying-glass" />
                                  </div>
                                </div>
                                <div className="box-content-search style-1">
                                  <ul>
                                    <li>
                                      <div className="item1">
                                        <div>
                                          <div className="image">
                                            <img
                                              src="/assets/images/author/avatar-8.png"
                                              alt=""
                                            />
                                          </div>
                                          <p>Archer House</p>
                                        </div>
                                        <div className="text">For Sale</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="item1">
                                        <div>
                                          <div className="image">
                                            <img
                                              src="/assets/images/author/avatar-7.png"
                                              alt=""
                                            />
                                          </div>
                                          <p>Home Pitt Street</p>
                                        </div>
                                        <div className="text">For Rent</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="item1">
                                        <div>
                                          <div className="image">
                                            <img
                                              src="/assets/images/author/avatar-9.png"
                                              alt=""
                                            />
                                          </div>
                                          <p>Villa One Hyde Park</p>
                                        </div>
                                        <div className="text">For Rent</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="item1">
                                        <div>
                                          <div className="image">
                                            <img
                                              src="/assets/images/author/avatar-10.png"
                                              alt=""
                                            />
                                          </div>
                                          <p>House on the beverly hills</p>
                                        </div>
                                        <div className="text">For Sale</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="divider-1" />
                          <div className="group-form">
                            <div className="form-style-has-title">
                              <div className="title">Status</div>
                              <div className="nice-select" tabIndex={0}>
                                <span className="current">All Status</span>
                                <ul className="list style-radio">
                                  <li
                                    data-value="For Sale"
                                    className="option selected"
                                  >
                                    For Sale
                                  </li>
                                  <li data-value="For Ren" className="option">
                                    For Ren
                                  </li>
                                  <li data-value="Sold" className="option">
                                    Sold
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="divider-1" />
                          <div className="group-form">
                            <div className="form-style-has-title">
                              <div className="title">Type</div>
                              <div className="nice-select" tabIndex={0}>
                                <span className="current">All Type</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    All Type
                                  </li>
                                  <li data-value="Office" className="option">
                                    Office
                                  </li>
                                  <li data-value="Villa" className="option">
                                    Villa
                                  </li>
                                  <li data-value="Shop" className="option">
                                    Shop
                                  </li>
                                  <li data-value="Single Family" className="option">
                                    Single Family
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap10">
                          <div className="group-form">
                            <div className="wg-filter">
                              <div className={`tf-button-filter btn-filter ${openFilter ? "active" : ""} `} onClick={toggleFilter} >
                                <i className="flaticon-filter" />
                                Filter
                              </div>
                              <div
                                className={`open-filter filter-no-content ${openFilter ? "active" : ""}  `}
                                id="a1"
                              >
                                <div>
                                  <div className="grid-3-cols mb-20">
                                    <div className="nice-select" tabIndex={0}>
                                      <span className="current">City</span>
                                      <ul className="list">
                                        <li
                                          data-value=""
                                          className="option selected"
                                        >
                                          City
                                        </li>
                                        <li
                                          data-value="New York"
                                          className="option"
                                        >
                                          New York
                                        </li>
                                        <li data-value="Paris" className="option">
                                          Paris
                                        </li>
                                        <li data-value="Ha Noi" className="option">
                                          Ha Noi
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="nice-select" tabIndex={0}>
                                      <span className="current">Bedrooms</span>
                                      <ul className="list">
                                        <li
                                          data-value=""
                                          className="option selected"
                                        >
                                          Bedrooms
                                        </li>
                                        <li data-value="1 Bed" className="option">
                                          1 Bed
                                        </li>
                                        <li data-value="2 Bed" className="option">
                                          2 Bed
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="nice-select" tabIndex={0}>
                                      <span className="current">Bathrooms</span>
                                      <ul className="list">
                                        <li
                                          data-value=""
                                          className="option selected"
                                        >
                                          Bathrooms
                                        </li>
                                        <li data-value="1 Bath" className="option">
                                          1 Bath
                                        </li>
                                        <li data-value="2 Bath" className="option">
                                          2 Bath
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="grid-4-cols">
                                    <fieldset className="name">
                                      <input
                                        type="text"
                                        placeholder="Min. Area"
                                        className=""
                                        name="name"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                      />
                                    </fieldset>
                                    <fieldset className="name">
                                      <input
                                        type="text"
                                        placeholder="Max. Area"
                                        className=""
                                        name="name"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                      />
                                    </fieldset>
                                    <div className="nice-select" tabIndex={0}>
                                      <span className="current">Min. Price</span>
                                      <ul className="list">
                                        <li
                                          data-value=""
                                          className="option selected"
                                        >
                                          Min. Price
                                        </li>
                                        <li data-value="100 $" className="option">
                                          100 $
                                        </li>
                                        <li data-value="150 $" className="option">
                                          150 $
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="nice-select" tabIndex={0}>
                                      <span className="current">Max. Price</span>
                                      <ul className="list">
                                        <li
                                          data-value=""
                                          className="option selected"
                                        >
                                          Max. Price
                                        </li>
                                        <li data-value="1000 $" className="option">
                                          1000 $
                                        </li>
                                        <li data-value="1500 $" className="option">
                                          1500 $
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="title">Amenities</div>
                                  <ul className="grid-checkbox">
                                    <li className="checkbox-item">
                                      <label>
                                        <p>Air Conditioning</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>Barbeque</p>
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>Dryer</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>Gym</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>Lawn</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>Microwave</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>Refrigerator</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>Sauna</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>Swimming Pool</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>TV Cable</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>Washer</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                    <li className="checkbox-item">
                                      <label>
                                        <p>WiFi</p>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox" />
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="group-form">
                            <div className="button-submit">
                              <button className="" type="submit">
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /flat-title */}
          {/* property-grid */}
          <div className="property-list-wrap-v3">
            <div className="cl-container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="top">
                    <div className="sub">
                      <p className="wow fadeInUp">9,998 results</p>
                      <div className="sort-wrap wow fadeInUp" data-wow-delay="0.1s">
                        <p>Sort by</p>
                        <div className="nice-select default" tabIndex={0}>
                          <span className="current">Newest listings</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              Newest
                            </li>
                            <li data-value="For Ren" className="option">
                              Oldest
                            </li>
                            <li data-value="Sold" className="option">
                              3 days
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row list">
                    <div className="col-xl-6">
                      <div className="box-dream has-border wow fadeInUp">
                        <div className="image">
                          <div className="list-tags">
                            <a href="#" className="tags-item for-sell">
                              FOR RENT
                            </a>
                            <a href="#" className="tags-item featured">
                              FEATURED
                            </a>
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
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-1.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-2.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-3.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-4.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>

                        </div>
                        <div className="content">
                          <div className="head">
                            <div className="title">
                              <Link href="/property/property-single">Archer House</Link>
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
                    <div className="col-xl-6">
                      <div
                        className="box-dream has-border wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="image">
                          <div className="list-tags">
                            <a href="#" className="tags-item for-sell">
                              FOR SELL
                            </a>
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
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-2.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-2.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-3.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-4.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>

                        </div>
                        <div className="content">
                          <div className="head">
                            <div className="title">
                              <a href="property-single-v1.html">
                                Villa One Hyde Park
                              </a>
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
                    <div className="col-xl-6">
                      <div className="box-dream has-border wow fadeInUp">
                        <div className="image">
                          <div className="list-tags">
                            <a href="#" className="tags-item for-sell">
                              FOR SELL
                            </a>
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
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-3.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-2.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-3.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-4.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>

                        </div>
                        <div className="content">
                          <div className="head">
                            <div className="title">
                              <a href="property-single-v1.html">Home Pitt Street</a>
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
                    <div className="col-xl-6">
                      <div
                        className="box-dream has-border wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="image">
                          <div className="list-tags">
                            <a href="#" className="tags-item for-sell">
                              FOR SELL
                            </a>
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
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-4.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-2.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-3.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-4.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>

                        </div>
                        <div className="content">
                          <div className="head">
                            <div className="title">
                              <a href="property-single-v1.html">Relaxing Villa</a>
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
                    <div className="col-xl-6">
                      <div className="box-dream has-border wow fadeInUp">
                        <div className="image">
                          <div className="list-tags">
                            <a href="#" className="tags-item for-sell">
                              FOR SELL
                            </a>
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
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-5.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-2.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-3.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-4.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>

                        </div>
                        <div className="content">
                          <div className="head">
                            <div className="title">
                              <a href="property-single-v1.html">Luxury Mansion</a>
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
                    <div className="col-xl-6">
                      <div
                        className="box-dream has-border wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="image">
                          <div className="list-tags">
                            <a href="#" className="tags-item for-sell">
                              FOR SELL
                            </a>
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

                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-6.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-2.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-3.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-4.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>

                        </div>
                        <div className="content">
                          <div className="head">
                            <div className="title">
                              <a href="property-single-v1.html">
                                Home in Merrick Way
                              </a>
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
                    <div className="col-xl-6">
                      <div className="box-dream has-border wow fadeInUp">
                        <div className="image">
                          <div className="list-tags">
                            <a href="#" className="tags-item for-sell">
                              FOR SELL
                            </a>
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
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-2.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-3.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-4.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>

                        </div>
                        <div className="content">
                          <div className="head">
                            <div className="title">
                              <a href="property-single-v1.html">
                                Villa in Coral Gables
                              </a>
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
                    <div className="col-xl-6">
                      <div
                        className="box-dream has-border wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="image">
                          <div className="list-tags">
                            <a href="#" className="tags-item for-sell">
                              FOR SELL
                            </a>
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
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-8.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-2.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-3.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="">
                                  <img
                                    className=""
                                    src="/assets/images/house/property-listing-4.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>

                        </div>
                        <div className="content">
                          <div className="head">
                            <div className="title">
                              <a href="property-single-v1.html">
                                Modern House in Greenville
                              </a>
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
                  <ul className="wg-pagination justify-center wow fadeInUp">
                    <li>
                      <a href="#">
                        <i className="icon-keyboard_arrow_left" />
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li className="active">
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">20</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-keyboard_arrow_right" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <div className="sidebar">

                    <div className="sidebar-item sidebar-categories no-bg">
                      <div className="sidebar-title">Property Types</div>
                      <ul>
                        <li>
                          <a href="#">Apartment</a>
                        </li>
                        <li className="active">
                          <a href="#">Office</a>
                        </li>
                        <li>
                          <a href="#">Single Family</a>
                        </li>
                        <li>
                          <a href="#">Shop</a>
                        </li>
                        <li>
                          <a href="#">Villa</a>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar-item sidebar-exclusive no-bg relative">
                      <div className="sidebar-title">Exclusive Property</div>
                      <div className="top-wrap arrow-style-2">
                        <div ref={prevButtonRef}  className="swiper-button-prev exclusive-prev" />
                        <div ref={nextButtonRef} className="swiper-button-next exclusive-next" />
                      </div>
                      <Swiper
                        className="swiper-container slider-exclusive"
                        slidesPerView={1}
                        modules={[Pagination, A11y, Navigation]}
                        navigation={{
                          prevEl: prevButtonRef.current,
                          nextEl: nextButtonRef.current,
                        }}
                        onInit={(swiper) => {
                          // Bind swiper navigation to custom buttons
                          swiper.params.navigation.prevEl = prevButtonRef.current;
                          swiper.params.navigation.nextEl = nextButtonRef.current;
                          swiper.navigation.init();
                          swiper.navigation.update();
                        }}
                       
                      >
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="box-dream style-absolute type-no-bg-content style-properties-1 item-1">
                              <div className="image">
                                <div className="list-tags">
                                  <a href="#" className="tags-item for-sell">
                                    FOR RENT
                                  </a>
                                  <a href="#" className="tags-item featured">
                                    FEATURED
                                  </a>
                                </div>
                                <img
                                  className="w-full"
                                  src="/assets/images/sidebar/img-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="content">
                                <div className="price">$815,000</div>
                                <div className="head">
                                  <div className="title">
                                    <a href="property-single-v1.html">
                                      Archer House
                                    </a>
                                  </div>
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
                                    <p>4</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <p>3</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-minus-front" />
                                    <p>2660</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="box-dream style-absolute type-no-bg-content style-properties-1 item-1">
                              <div className="image">
                                <div className="list-tags">
                                  <a href="#" className="tags-item for-sell">
                                    FOR RENT
                                  </a>
                                  <a href="#" className="tags-item featured">
                                    FEATURED
                                  </a>
                                </div>
                                <img
                                  className="w-full"
                                  src="/assets/images/sidebar/img-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="content">
                                <div className="price">$815,000</div>
                                <div className="head">
                                  <div className="title">
                                    <a href="property-single-v1.html">
                                      Archer House
                                    </a>
                                  </div>
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
                                    <p>4</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <p>3</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-minus-front" />
                                    <p>2660</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </SwiperSlide>
                          <SwiperSlide>
                          <div className="swiper-slide">
                            <div className="box-dream style-absolute type-no-bg-content style-properties-1 item-1">
                              <div className="image">
                                <div className="list-tags">
                                  <a href="#" className="tags-item for-sell">
                                    FOR RENT
                                  </a>
                                  <a href="#" className="tags-item featured">
                                    FEATURED
                                  </a>
                                </div>
                                <img
                                  className="w-full"
                                  src="/assets/images/sidebar/img-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="content">
                                <div className="price">$815,000</div>
                                <div className="head">
                                  <div className="title">
                                    <a href="property-single-v1.html">
                                      Archer House
                                    </a>
                                  </div>
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
                                    <p>4</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <p>3</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-minus-front" />
                                    <p>2660</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </SwiperSlide>
                         
                      </Swiper>
                     
                    </div>
                    <div className="sidebar-item sidebar-agents-1 no-bg">
                      <div className="sidebar-title">Agents</div>
                      <ul>
                        <li>
                          <div className="image">
                            <img src="/assets/images/sidebar/agent-1.png" alt="" />
                          </div>
                          <div className="content">
                            <div className="name">
                              <a href="#">Jane Cooper</a>
                            </div>
                            <p>sale@justhome.com</p>
                            <p>3-596 95 38 12</p>
                          </div>
                        </li>
                        <li>
                          <div className="image">
                            <img src="/assets/images/sidebar/agent-2.png" alt="" />
                          </div>
                          <div className="content">
                            <div className="name">
                              <a href="#">Marvin McKinney</a>
                            </div>
                            <p>sale@justhome.com</p>
                            <p>3-596 95 38 12</p>
                          </div>
                        </li>
                        <li>
                          <div className="image">
                            <img src="/assets/images/sidebar/agent-3.png" alt="" />
                          </div>
                          <div className="content">
                            <div className="name">
                              <a href="#">Cameron Williamson</a>
                            </div>
                            <p>sale@justhome.com</p>
                            <p>3-596 95 38 12</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /property-grid */}
        </div>
        {/* /main-content */}

      </div>
      {/* /#page */}
    </div>

  )
}

export default Property