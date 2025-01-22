'use client';
import React from 'react'
import Header2 from '../header2';
import CustomScript from '@/app/scripts';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import CustomPagination from '../pagination';
import Footer from '../footer';
import { useRouter, useSearchParams } from 'next/navigation';
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
  currentPage
}) => {

  const [openFilter, setOpenFilter] = React.useState(false)
  const [openSelect, setOpenSelect] = React.useState({
     status: false, type: false, city: false, sorting: false,community:false,minBed:false,maxBed:false,minBath:false,maxBath:false 
    })
  const toggleFilter = () => setOpenFilter(!openFilter)
  const prevButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);
  const dropdownRefs = React.useRef({});
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleOpenSelect = (name) => {
    setOpenSelect((prev) => ({
      status: name === "status" ? !prev.status : false,
      type: name === "type" ? !prev.type : false,
      city: name === "city" ? !prev.city : false,
      sorting: name === "sorting" ? !prev.sorting : false,
      community: name === "community" ? !prev.community : false,
      minBed: name === "minBed" ? !prev.minBed : false,
    }));
  }
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInside = Object.keys(dropdownRefs.current).some(
        (key) =>
          dropdownRefs.current[key] &&
          dropdownRefs.current[key].contains(event.target)
      );

      if (!isClickInside) {
        setOpenSelect({ status: false, type: false, city: false, sorting: false,community:false,minBed:false });
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
                                                src="/elrealestate/assets/images/author/avatar-8.png"
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
                                                src="/elrealestate/assets/images/author/avatar-7.png"
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
                                                src="/elrealestate/assets/images/author/avatar-9.png"
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
                                                src="/elrealestate/assets/images/author/avatar-10.png"
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
                            <div className="group-form">
                              <div className="form-style-has-title" ref={assignRef("city")} >
                                <div className="title">City</div>
                                <div className={`nice-select ${openSelect.city ? "open" : ""}`} tabIndex={0} onClick={(e) => handleSelectClick(e, "city")} >
                                  <span className="current">{selectedCity.title}</span>
                                  <ul className="list style-radio">
                                    <li
                                      data-value="For Sale"
                                      className={`option ${status.id === 0 ? "selected" : ""} `}

                                      onClick={() => handleCity(0, " All cities")}
                                    >
                                      All cities
                                    </li>
                                    {cities.map((city) => (
                                      <li
                                        key={city.id}
                                        data-value=""
                                        className={`option ${selectedCity.id === city.id ? "selected" : ""}`}
                                        onClick={() => handleCity(city.id, city.name)}
                                      >
                                        {city.name}
                                      </li>
                                    ))}


                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="divider-1" />



                            <div className="group-form">
                              <div className="form-style-has-title" ref={assignRef("type")} >
                                <div className="title">Type</div>
                                <div className={`nice-select ${openSelect.type ? "open" : ""}`} tabIndex={0} onClick={(e) => handleSelectClick(e, "type")}>
                                  <span className="current">{selectedTypes.title}</span>
                                  <ul className="list style-radio">
                                    <li ta-value="" className={`option ${selectedTypes.id === 0 ? "selected" : ""}`} onClick={() => handleTypes(0, "All types")} >
                                      All types
                                    </li>
                                    {types.map((item) => (
                                      <li data-value="" className={`option ${selectedTypes.id === item.id ? "selected" : ""} `} key={item.id} onClick={() => handleTypes(item.id, item.title)} >
                                        {item.title}
                                      </li>
                                    ))}


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
                                    <div className="grid-3-cols mb-20"  >
                                      <div className={`nice-select ${openSelect.status ? "open" : ""}`} tabIndex={0} onClick={(e) => handleSelectClick(e, "status")} ref={assignRef("status")} >
                                        <span className="current">{status.title}</span>
                                        <ul className="list style-radio">
                                          <li
                                            data-value="For Sale"
                                            className={`option ${status.id === 0 ? "selected" : ""} `}

                                            onClick={() => handleStatus(0, " All Status")}
                                          >
                                            All Status
                                          </li>
                                          {Object.keys(filters).length > 0 ? filters.listing_status.map((item) => (
                                            <li
                                              data-value="For Sale"
                                              className={`option ${status.id === item.id ? "selected" : ""} `}
                                              key={item.id}
                                              onClick={() => handleStatus(item.id, item.title)}
                                            >
                                              {item.title}
                                            </li>
                                          )) : null}


                                        </ul>

                                      </div>
                                      <div className={`nice-select ${openSelect.community ? "open" : ""}`} tabIndex={0} onClick={(e) => handleSelectClick(e, "community")} ref={assignRef("community")} >
                                        <span className="current">{status.title}</span>
                                        <ul className="list style-radio">
                                          <li
                                            data-value="For Sale"
                                            className={`option ${status.id === 0 ? "selected" : ""} `}

                                            onClick={() => handleStatus(0, " All Status")}
                                          >
                                            All Status
                                          </li>
                                          {Object.keys(filters).length > 0 ? filters.listing_status.map((item) => (
                                            <li
                                              data-value="For Sale"
                                              className={`option ${status.id === item.id ? "selected" : ""} `}
                                              key={item.id}
                                              onClick={() => handleStatus(item.id, item.title)}
                                            >
                                              {item.title}
                                            </li>
                                          )) : null}


                                        </ul>

                                      </div>
                                      <div className={`nice-select ${openSelect.minBed ? "open" : ""}`} tabIndex={0} onClick={(e) => handleSelectClick(e, "minBed")} ref={assignRef("minBed")}  >
                                        <span className="current">Min.Bedrooms</span>
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
                                        <span className="current">Max.Bedrooms</span>
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
                                        <span className="current">Min.Bathrooms</span>
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
                                      <div className="nice-select" tabIndex={0}>
                                        <span className="current">Max.Bathrooms</span>
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
                        <p className="wow fadeInUp">{properties.length} results</p>
                        <div className="sort-wrap wow fadeInUp" data-wow-delay="0.1s" ref={assignRef("sorting")} >
                          <p>Sort by</p>
                          <div className={`nice-select default ${openSelect.sorting ? "open" : ""} `} tabIndex={0} onClick={(e) => handleSelectClick(e, "sorting")} >
                            <span className="current">{selectedSorting.title}</span>
                            <ul className="list">

                              {Object.keys(filters).length > 0 ? filters?.sorting.map((sort) => (
                                <li data-value="" key={sort.id} className="option" onClick={() => {
                                  handleSorting(sort.id, sort.title)
                                  const newParams = new URLSearchParams(searchParams.toString());
                                  newParams.set("sort", sort.title)
                                  router.push(`/property?${newParams.toString()}`)
                                }} >
                                  {sort.title}
                                </li>
                              )) : null}


                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row list">
                      {properties.map((item) => (
                        <div className="col-xl-6" key={item.id} >
                          <div className="box-dream has-border wow fadeInUp">
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
                                  <SwiperSlide key={i} >
                                    <div className="swiper-slide">
                                      <div className="">
                                        <img
                                          className=""
                                          src={g}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                ))}

                              </Swiper>

                            </div>
                            <div className="content">
                              <div className="head">
                                <div className="title">
                                  <Link href={`/property/${item.slug}`}>{item.title}</Link>
                                </div>
                                <div className="price">${item.price.toLocaleString()}</div>
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
                                  <p>{item.bedrooms} Beds</p>
                                </div>
                                <div className="item">
                                  <i className="flaticon-bath-tub" />
                                  <p>{item.bathrooms} Baths</p>
                                </div>
                                <div className="item">
                                  <i className="flaticon-minus-front" />
                                  <p>{item.size} Sqft</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}


                    </div>
                    <CustomPagination
                      itemsPerPage={6}
                      onPageChange={handlePageChange}
                      totalData={totalProperties}
                      initialPaage={currentPage}



                    />
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar">

                      <div className="sidebar-item sidebar-categories no-bg">
                        <div className="sidebar-title">Property Types</div>
                        <ul>
                          {types.map((item) => (
                            <li key={item.id} className={` ${selectedTypes.id === item.id ? "active" : ""} `} onClick={() => {
                              handleTypes(item.id, item.title)
                              const newParams = new URLSearchParams(searchParams.toString());
                              newParams.set("type", item.title)
                              router.push(`/property?${newParams.toString()}`)
                            }


                            }  >
                              <Link href="#">{item.title}</Link>
                            </li>
                          ))}


                        </ul>
                      </div>
                      <div className="sidebar-item sidebar-exclusive no-bg relative">
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
                          <SwiperSlide>
                            <div className="swiper-slide">
                              <div className="box-dream style-absolute type-no-bg-content style-properties-1 item-1">
                                <div className="image">
                                  <div className="list-tags">
                                    <Link href="#" className="tags-item for-sell">
                                      FOR RENT
                                    </Link>
                                    <Link href="#" className="tags-item featured">
                                      FEATURED
                                    </Link>
                                  </div>
                                  <img
                                    className="w-full"
                                    src="/elrealestate/assets/images/sidebar/img-1.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="content">
                                  <div className="price">$815,000</div>
                                  <div className="head">
                                    <div className="title">
                                      <Link href="/property/property-single">
                                        Archer House
                                      </Link>
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
                                    <Link href="#" className="tags-item for-sell">
                                      FOR RENT
                                    </Link>
                                    <Link href="#" className="tags-item featured">
                                      FEATURED
                                    </Link>
                                  </div>
                                  <img
                                    className="w-full"
                                    src="/elrealestate/assets/images/sidebar/img-1.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="content">
                                  <div className="price">$815,000</div>
                                  <div className="head">
                                    <div className="title">
                                      <Link href="/property/property-single">
                                        Archer House
                                      </Link>
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
                                    <Link href="#" className="tags-item for-sell">
                                      FOR RENT
                                    </Link>
                                    <Link href="#" className="tags-item featured">
                                      FEATURED
                                    </Link>
                                  </div>
                                  <img
                                    className="w-full"
                                    src="/elrealestate/assets/images/sidebar/img-1.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="content">
                                  <div className="price">$815,000</div>
                                  <div className="head">
                                    <div className="title">
                                      <Link href="/property/property-single">
                                        Archer House
                                      </Link>
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
                          {agents.map((item) => (
                            <li key={item.id} >
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
        src="/elrealestate/assets/js/jquery.min.js"
        strategy="lazyOnload" // Load it after the page load
        onLoad={() => {
          if (window.jQuery) {
            console.log("jQuery loaded successfully.");
            setIsJQueryLoaded(true);
          }
        }}
        onError={(e) => console.error("Failed to load jQuery:", e)}
      />



      {/* <CustomScript src="/elrealestate/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" /> */}
      <CustomScript src="/elrealestate/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
      <CustomScript src="/elrealestate/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
      <CustomScript src="/elrealestate/assets/js/main.js" />
    </>

  )
}

export default PropertyComponent