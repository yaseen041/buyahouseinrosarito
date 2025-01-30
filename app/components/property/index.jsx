"use client";
import React from "react";
import Header2 from "../header2";
import CustomScript from "@/app/scripts";
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
import Link from "next/link";
import CustomPagination from "../pagination";
import Footer from "../footer";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "../loader/Loader";
import Header3 from "../header3";
import { useUnitContext } from "@/app/utils/UnitContext";
const PropertyComponent = ({
  properties = [],
  types = [],
  filters = {},
  cities = [],
  totalProperties = 0,
  handlePageChange,
  handleStatus,
  status = {},
  handleSearch,
  selectedTypes = {},
  handleTypes,
  selectedCity = {},
  handleCity,
  selectedSorting = {},
  handleSorting,
  agents = [],
  community = [],
  currentPage,
  selectedCommunity = {},
  handleCommunity,
  handleBed,
  handleBath,
  selectedBath = {},
  selectedBed = {},
  handleInputChange,
  minArea,
  maxArea,
  minPrice,
  maxPrice,
  features = [],
  hanldeFeatures,
  Keyword,
  featuredProperties = [],
  loading,
}) => {
  const { isSquareMeter, toggleUnit } = useUnitContext();

  const [openFilter, setOpenFilter] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState({
    status: false,
    type: false,
    city: false,
    sorting: false,
    community: false,
    minBed: false,
    maxBed: false,
    minBath: false,
    maxBath: false,
    maxBed: false,
    minBath: false,
    maxBath: false,
  });
  const toggleFilter = () => setOpenFilter(!openFilter);
  const prevButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);
  const dropdownRefs = React.useRef({});
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleOpenSelect = (name) => {
    setOpenSelect((prev) => ({
      status: name === "status" ? !prev.status : false,
      type: name === "type" ? !prev.type : false,
      city: name === "city" ? !prev.city : false,
      sorting: name === "sorting" ? !prev.sorting : false,
      community: name === "community" ? !prev.community : false,
      minBed: name === "minBed" ? !prev.minBed : false,
      maxBed: name === "maxBed" ? !prev.maxBed : false,
      minBath: name === "minBath" ? !prev.minBath : false,
      maxBath: name === "maxBath" ? !prev.maxBath : false,
    }));
  };
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInside = Object.keys(dropdownRefs.current).some(
        (key) =>
          dropdownRefs.current[key] &&
          dropdownRefs.current[key].contains(event.target)
      );

      if (!isClickInside) {
        setOpenSelect({
          status: false,
          type: false,
          city: false,
          sorting: false,
          community: false,
          minBed: false,
          maxBed: false,
          minBath: false,
          maxBath: false,
        });
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const assignRef = (name) => (el) => {
    dropdownRefs.current[name] = el;
  };
  const handleSelectClick = (e, name) => {
    e.stopPropagation();
    handleOpenSelect(name);
  };

  return (
    <>
      <div id="wrapper">
        {/* #page */}
        <div id="page" className="">
          <Header3 />
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
                          <Link href="index.html">Home</Link>
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
                                      placeholder="Enter Keyword"
                                      className="show-search style-default"
                                      name="Keyword"
                                      value={Keyword}
                                      required=""
                                      onChange={handleInputChange}
                                    />
                                  </fieldset>
                                  <div className="style-absolute-right">
                                    <div className="style-icon-default">
                                      <i className="flaticon-magnifiying-glass" />
                                    </div>
                                  </div>
                                  {/* <div className="box-content-search style-1">
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
                                  </div> */}
                                </div>
                              </div>
                            </div>
                            <div className="group-form">
                              <div
                                className="form-style-has-title"
                                ref={assignRef("city")}
                              >
                                <div className="title">City</div>
                                <div
                                  className={`nice-select ${openSelect.city ? "open" : ""
                                    }`}
                                  tabIndex={0}
                                  onClick={(e) => handleSelectClick(e, "city")}
                                >
                                  <span className="current">
                                    {selectedCity.title}
                                  </span>
                                  <ul className="list style-radio">
                                    <li
                                      data-value="For Sale"
                                      className={`option ${selectedCity.id === 0 ? "selected" : ""
                                        } `}
                                      onClick={() =>
                                        handleCity(0, " All cities")
                                      }
                                    >
                                      All cities
                                    </li>
                                    {cities.map((city) => (
                                      <li
                                        key={city.id}
                                        data-value=""
                                        className={`option ${selectedCity.id === city.id
                                            ? "selected"
                                            : ""
                                          }`}
                                        onClick={() =>
                                          handleCity(city.id, city.name)
                                        }
                                      >
                                        {city.name} ({city.properties_count})
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="divider-1" />

                            <div className="group-form">
                              <div
                                className="form-style-has-title"
                                ref={assignRef("type")}
                              >
                                <div className="title">Type</div>
                                <div
                                  className={`nice-select ${openSelect.type ? "open" : ""
                                    }`}
                                  tabIndex={0}
                                  onClick={(e) => handleSelectClick(e, "type")}
                                >
                                  <span className="current">
                                    {selectedTypes.title}
                                  </span>
                                  <ul className="list style-radio">
                                    <li
                                      ta-value=""
                                      className={`option ${selectedTypes.id === 0 ? "selected" : ""
                                        }`}
                                      onClick={() =>
                                        handleTypes(0, "All types")
                                      }
                                    >
                                      All types
                                    </li>
                                    {types.map((item) => (
                                      <li
                                        data-value=""
                                        className={`option ${selectedTypes.id === item.id
                                            ? "selected"
                                            : ""
                                          } `}
                                        key={item.id}
                                        onClick={() =>
                                          handleTypes(item.id, item.title)
                                        }
                                      >
                                        {item.title} ({item.property_count})
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap10" id="property-list">
                            <div className="group-form">
                              <div className="wg-filter">
                                <div
                                  className={`tf-button-filter btn-filter ${openFilter ? "active" : ""
                                    } `}
                                  onClick={toggleFilter}
                                >
                                  <i className="flaticon-filter" />
                                  Filter
                                </div>
                                <div
                                  className={`open-filter filter-no-content ${openFilter ? "active" : ""
                                    }  `}
                                  id="a1"
                                >
                                  <div>
                                    <div className="grid-4-cols mb-20">
                                      <div className="">
                                        <div
                                          className="mx-2"
                                          style={{
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: "#969696",
                                            marginBottom: 10,
                                          }}
                                        >
                                          Status
                                        </div>
                                        <div
                                          className={`nice-select ${openSelect.status ? "open" : ""
                                            }`}
                                          tabIndex={0}
                                          onClick={(e) =>
                                            handleSelectClick(e, "status")
                                          }
                                          ref={assignRef("status")}
                                        >
                                          <span className="current">
                                            {status.title}
                                          </span>
                                          <ul className="list style-radio">
                                            <li
                                              data-value="For Sale"
                                              className={`option ${status.id === 0
                                                  ? "selected"
                                                  : ""
                                                } `}
                                              onClick={() =>
                                                handleStatus(0, " All Status")
                                              }
                                            >
                                              All Status
                                            </li>
                                            {Object.keys(filters).length > 0
                                              ? filters.listing_status.map(
                                                (item) => (
                                                  <li
                                                    data-value="For Sale"
                                                    className={`option ${status.id === item.id
                                                        ? "selected"
                                                        : ""
                                                      } `}
                                                    key={item.id}
                                                    onClick={() =>
                                                      handleStatus(
                                                        item.id,
                                                        item.title
                                                      )
                                                    }
                                                  >
                                                    {item.title}
                                                  </li>
                                                )
                                              )
                                              : null}
                                          </ul>
                                        </div>
                                      </div>
                                      <div>
                                        <div
                                          className="mx-2"
                                          style={{
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: "#969696",
                                            marginBottom: 10,
                                          }}
                                        >
                                          Community
                                        </div>
                                        <div
                                          className={`nice-select ${openSelect.community ? "open" : ""
                                            }`}
                                          tabIndex={0}
                                          onClick={(e) =>
                                            handleSelectClick(e, "community")
                                          }
                                          ref={assignRef("community")}
                                        >
                                          <span className="current">
                                            {selectedCommunity.title}
                                          </span>
                                          <ul className="list style-radio">
                                            <li
                                              data-value="For Sale"
                                              className={`option ${selectedCommunity.id === 0
                                                  ? "selected"
                                                  : ""
                                                } `}
                                              onClick={() =>
                                                handleCommunity(
                                                  0,
                                                  " All Communities"
                                                )
                                              }
                                            >
                                              All Communities
                                            </li>
                                            {community.map((item) => (
                                              <li
                                                data-value="For Sale"
                                                className={`option ${selectedCommunity.id ===
                                                    item.id
                                                    ? "selected"
                                                    : ""
                                                  } `}
                                                key={item.id}
                                                onClick={() =>
                                                  handleCommunity(
                                                    item.id,
                                                    item.title
                                                  )
                                                }
                                              >
                                                {item.title} ({item.property_count})
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                      <div>
                                        <div
                                          className="mx-2"
                                          style={{
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: "#969696",
                                            marginBottom: 10,
                                          }}
                                        >
                                          Bedrooms
                                        </div>
                                        <div
                                          className={`nice-select ${openSelect.minBed ? "open" : ""
                                            }`}
                                          tabIndex={0}
                                          onClick={(e) =>
                                            handleSelectClick(e, "minBed")
                                          }
                                          ref={assignRef("minBed")}
                                        >
                                          <span className="current">
                                            {selectedBed.title}
                                          </span>
                                          <ul className="list  ">
                                            {Object.keys(filters).length > 0
                                              ? filters.min_bed.map((item) => (
                                                <li
                                                  data-value=""
                                                  className={`option ${selectedBed.id === item.id
                                                      ? "selected"
                                                      : ""
                                                    }`}
                                                  key={item.id}
                                                  onClick={() =>
                                                    handleBed(
                                                      item.id,
                                                      item.title
                                                    )
                                                  }
                                                >
                                                  {item.title}
                                                </li>
                                              ))
                                              : null}
                                          </ul>
                                        </div>
                                      </div>

                                      <div>
                                        <div
                                          className="mx-2"
                                          style={{
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: "#969696",
                                            marginBottom: 10,
                                          }}
                                        >
                                          Bathrooms
                                        </div>
                                        <div
                                          className={`nice-select ${openSelect.minBath ? "open" : ""
                                            }`}
                                          tabIndex={0}
                                          onClick={(e) =>
                                            handleSelectClick(e, "minBath")
                                          }
                                          ref={assignRef("minBath")}
                                        >
                                          <span className="current">
                                            {selectedBath.title}
                                          </span>

                                          <ul className="list">
                                            {Object.keys(filters).length > 0
                                              ? filters.min_bath.map((item) => (
                                                <li
                                                  data-value="1 Bath"
                                                  className={`option ${selectedBath.id ===
                                                      item.id
                                                      ? "selected"
                                                      : ""
                                                    } `}
                                                  key={item.id}
                                                  onClick={() =>
                                                    handleBath(
                                                      item.id,
                                                      item.title
                                                    )
                                                  }
                                                >
                                                  {item.title}
                                                </li>
                                              ))
                                              : null}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid-4-cols">
                                      <fieldset className="name">
                                        <div
                                          className="mx-2"
                                          style={{
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: "#969696",
                                            marginBottom: 10,
                                          }}
                                        >
                                          Min. Area
                                        </div>
                                        <input
                                          type="text"
                                          placeholder="Min. Area"
                                          className=""
                                          name="minArea"
                                          tabIndex={2}
                                          aria-required="true"
                                          required=""
                                          value={minArea}
                                          onChange={handleInputChange}
                                        />
                                      </fieldset>
                                      <fieldset className="name">
                                        <div
                                          className="mx-2"
                                          style={{
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: "#969696",
                                            marginBottom: 10,
                                          }}
                                        >
                                          Max. Area
                                        </div>
                                        <input
                                          type="text"
                                          placeholder="Max. Area"
                                          className=""
                                          name="maxArea"
                                          tabIndex={2}
                                          aria-required="true"
                                          required=""
                                          value={maxArea}
                                          onChange={handleInputChange}
                                        />
                                      </fieldset>
                                      <fieldset className="name">
                                        <div
                                          className="mx-2"
                                          style={{
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: "#969696",
                                            marginBottom: 10,
                                          }}
                                        >
                                          Min. Price
                                        </div>
                                        <input
                                          type="text"
                                          placeholder="Min. Price"
                                          className=""
                                          name="minPrice"
                                          tabIndex={2}
                                          aria-required="true"
                                          required=""
                                          value={minPrice}
                                          onChange={handleInputChange}
                                        />
                                      </fieldset>
                                      <fieldset className="name">
                                        <div
                                          className="mx-2"
                                          style={{
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: "#969696",
                                            marginBottom: 10,
                                          }}
                                        >
                                          Max. Price
                                        </div>
                                        <input
                                          type="text"
                                          placeholder="Max. Price"
                                          className=""
                                          name="maxPrice"
                                          tabIndex={2}
                                          aria-required="true"
                                          required=""
                                          value={maxPrice}
                                          onChange={handleInputChange}
                                        />
                                      </fieldset>
                                    </div>
                                  </div>
                                  <div>
                                    <ul className="grid-checked">
                                      {Object.keys(filters).length > 0
                                        ? Object.keys(filters.features).map(
                                          (featureKey) => (
                                            <li key={featureKey}>
                                              <div className="title mt-4 mb-4">
                                                {featureKey
                                                  .replace(/_/g, " ")
                                                  .replace(/\b\w/g, (char) =>
                                                    char.toUpperCase()
                                                  )}
                                              </div>
                                              <ul data-wow-delay="0.1s">
                                                <div className="row">
                                                  {filters.features[
                                                    featureKey
                                                  ].map((item) => (
                                                    <div
                                                      className="col-3 m-4"
                                                      key={item.id}
                                                    >
                                                      <li className="checkbox-item">
                                                        <label>
                                                          <p>{item.title}</p>
                                                          <input
                                                            type="checkbox"
                                                            onChange={() =>
                                                              hanldeFeatures(
                                                                item.id,
                                                                item.title
                                                              )
                                                            }
                                                            checked={features.some(
                                                              (feature) =>
                                                                feature.id ===
                                                                item.id
                                                            )}
                                                          />
                                                          <span className="btn-checkbox" />
                                                        </label>
                                                      </li>
                                                    </div>
                                                  ))}
                                                </div>
                                              </ul>
                                            </li>
                                          )
                                        )
                                        : null}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="group-form">
                              <div className="button-submit">
                                <button className="" onClick={handleSearch}>
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
                        <p className="wow fadeInUp">
                          {totalProperties} results
                        </p>
                        <div
                          className="sort-wrap wow fadeInUp"
                          data-wow-delay="0.1s"
                          ref={assignRef("sorting")}
                        >
                          <p>Sort by</p>
                          <div
                            className={`nice-select default ${openSelect.sorting ? "open" : ""
                              } `}
                            tabIndex={0}
                            onClick={(e) => handleSelectClick(e, "sorting")}
                          >
                            <span className="current">
                              {selectedSorting.title}
                            </span>
                            <ul className="list">
                              {Object.keys(filters).length > 0
                                ? filters?.sorting.map((sort) => (
                                  <li
                                    data-value=""
                                    key={sort.id}
                                    className="option"
                                    onClick={() => {
                                      handleSorting(sort.id, sort.title);
                                      const newParams = new URLSearchParams(
                                        searchParams.toString()
                                      );
                                      newParams.set("sort", sort.title);
                                      router.push(
                                        `/property?${newParams.toString()}`
                                      );
                                    }}
                                  >
                                    {sort.title}
                                  </li>
                                ))
                                : null}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {loading ? (
                      <Loader />
                    ) : properties.length > 0 ? (
                      <div>
                        <div className="row list">
                          {properties.map((item) => (
                            <div className="col-xl-6" key={item.id}>
                              <div className="box-dream has-border wow fadeInUp">
                                <div className="image">
                                  <div className="list-tags">
                                    <div className="tags-item for-sell">
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
                                            <img className="" src={g} alt="" />
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                    ))}
                                  </Swiper>
                                </div>
                                <div className="content">
                                  <div className="head">
                                    <div className="title">
                                      <Link href={`/property/${item.slug}`}>
                                        {item.title}
                                      </Link>
                                    </div>
                                    <div className="price">
                                      ${item.price.toLocaleString()}
                                    </div>
                                  </div>
                                  <div className="location">
                                    <div className="icon">
                                      <i className="flaticon-location" />
                                    </div>
                                    <p style={{fontSize:13}}>{item.address}</p>
                                  </div>
                                  <div className="icon-box">
                                    <div className="item">
                                      <i className="flaticon-hotel" />
                                      <p style={{fontSize:13}}>{item.bedrooms} Beds</p>
                                    </div>
                                    <div className="item">
                                      <i className="flaticon-bath-tub" />
                                      <p style={{fontSize:13}}>{item.bathrooms} Baths</p>
                                    </div>
                                    <div className="item">
                                      <i className="flaticon-minus-front" />

                                      {/* <p style={{fontSize:13}}>
                                        {!isSquareMeter
                                          ? item.size_mt + " Sq M"
                                          : item.size + " Sq ft"}
                                      </p> */}
                                      <p style={{fontSize:13}}>{item.size + "sqft"} / {item.size_mt + "sqm"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <h4 className="text-center pt-5 "> No Property Found</h4>
                    )}
                    {totalProperties >=6 && (
                    <CustomPagination
                      itemsPerPage={6}
                      onPageChange={handlePageChange}
                      totalData={totalProperties}
                      currentPage={currentPage}
                    />
                  )}
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar">
                      <div className="sidebar-item sidebar-categories no-bg">
                        <div className="sidebar-title">Property Types</div>
                        <ul>
                          {types.map((item) => (
                            <li
                              key={item.id}
                              className={` ${selectedTypes.id === item.id ? "active" : ""
                                } `}
                              onClick={() => {
                                handleTypes(item.id, item.title);
                                const newParams = new URLSearchParams(
                                  searchParams.toString()
                                );
                                newParams.set("type", item.title);
                                router.push(
                                  `/property?${newParams.toString()}`
                                );
                              }}
                            >
                              <Link href="#">{item.title} </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="sidebar-item sidebar-categories no-bg">
                        <div className="sidebar-title">Communities</div>
                        <ul>
                          {community.map((item) => (
                            <li
                              key={item.id}
                              className={` ${selectedCommunity.id === item.id ? "active" : ""
                                } `}
                              onClick={() => {
                                handleCommunity(item.id, item.title);
                                const newParams = new URLSearchParams(
                                  searchParams.toString()
                                );
                                newParams.set("community", item.title);
                                router.push(
                                  `/property?${newParams.toString()}`
                                );
                              }}
                            >
                              <Link href="#">{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* <div className="sidebar-item sidebar-exclusive no-bg relative">
                        <div className="sidebar-title">Exclusive Property</div>
                        <div className="top-wrap arrow-style-2">
                          <div ref={prevButtonRef} className="swiper-button-prev exclusive-prev" />
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
                          {featuredProperties.map((item) => (
                             <SwiperSlide key={item.id} >
                             <div className="swiper-slide">
                               <div className="box-dream style-absolute type-no-bg-content style-properties-1 item-1" style={{height:289}} >
                                 <div className="image">
                                   <div className="list-tags">
                                     <Link href="#" className="tags-item for-sell">
                                      {item.listing_status}
                                     </Link>
                                     {item.is_featured && (
                                         <Link href="#" className="tags-item featured">
                                         FEATURED
                                       </Link>
                                    )}
                                    
                                   </div>
                                   <img
                                     className="w-full"
                                     src={item.gallery[0]}
                                     alt=""
                                     style={{maxHeight:"290px"}}
                                   />
                                 </div>
                                 <div className="content">
                                   <div className="price">${item.price.toLocaleString()}</div>
                                   <div className="head">
                                     <div className="title">
                                       <Link href="/property/property-single">
                                         {item.title}
                                       </Link>
                                     </div>
                                   </div>
                                   <div className="location">
                                     <div className="icon">
                                       <i className="flaticon-location" />
                                     </div>
                                     <p>{item.address}</p>
                                   </div>
                                   <div className="icon-box">
                                     <div className="item">
                                       <i className="flaticon-hotel" />
                                       <p>{item.bedrooms}</p>
                                     </div>
                                     <div className="item">
                                       <i className="flaticon-bath-tub" />
                                       <p>{item.bathrooms}</p>
                                     </div>
                                     <div className="item">
                                       <i className="flaticon-minus-front" />
                                       <p>{item.area}</p>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </SwiperSlide>
                          ))}
                         

                        </Swiper>

                      </div> */}
                      <div className="sidebar-item sidebar-agents-1 no-bg">
                        <div className="sidebar-title">Agents</div>
                        <ul>
                          {agents.map((item) => (
                            <li key={item.id}>
                              <div className="image">
                                <img src={item.image} alt="" />
                              </div>
                              <div className="content">
                                <div className="name">
                                  <Link href="#">{item.name}</Link>
                                </div>
                                <p>{item.email}</p>
                                <p>{item.phone}</p>
                              </div>
                            </li>
                          ))}
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
          <Footer />
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

      {/* <CustomScript src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" /> */}
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

export default PropertyComponent;
