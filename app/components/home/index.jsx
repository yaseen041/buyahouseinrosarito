'use client';
import React from 'react';
import Header1 from '../header1';
import Footer from '../footer';
import CustomScript from '@/app/scripts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WOW from "wow.js";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "animate.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay"
import Link from 'next/link';
import VideoComponent from '../video';
import Header3 from '../header3';
import Calculator from '../calculator/calculator';
import ComparisonTable from '../comparisonTable';
import { useUnitContext } from "@/app/utils/UnitContext";
const HomeComponent = ({
    types = [],
    cities = [],
    recentForRent = [],
    recentForSale = [],
    filters = {},
    selectedCommunity = {},
    community = [],
    status = {},
    selectedBed = {},
    selectedBath = {},
    minArea = "",
    maxArea = "",
    minPrice = "",
    maxPrice = "",
    features = [],
    Keyword = "",
    selectedTypes = {},
    selectedCity = {},
    BestDeals = [],
    selectedFeatures,
    handleInputChange = () => { },
    handleStatus = () => { },
    handleCommunity = () => { },
    handleBed = () => { },
    handleBath = () => { },
    hanldeFeatures = () => { },
    handleSearch = () => { },
    handleTypes = () => { },
    handleCity = () => { },

}) => {
    const { isSquareMeter, toggleUnit } = useUnitContext();
    const [openFilter, setOpenFilter] = React.useState(false)
    const [openNiceSelect, setOpenNiceSelect] = React.useState(false)
    const toggleFilter = () => setOpenFilter(!openFilter)
    const toggleNiceSelect = () => setOpenNiceSelect(!openNiceSelect)
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
        maxBath: false
    })
    const dropdownRefs = React.useRef({});
    const assignRef = (name) => (ref) => {
        dropdownRefs.current[name] = ref;
    }

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
    }

    const handleSelectClick = (e, name) => {
        e.stopPropagation();
        handleOpenSelect(name);
    };



    React.useEffect(() => {
        new WOW().init();
        // initSliders();
    }, [])

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
                    maxBath: false
                });
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);



    return (
        <>


            < div id="wrapper">
                <div id="page" className="">
                    <Header3 />
                    <div className="main-content default">
                        <section className="slider home3 relative z-5">
                            <div className="wrap-slider">
                                <div className="slider-item">
                                    <div className="cl-container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="slider-content">
                                                    <h1 className="wow fadeInUp">
                                                        The <span>#1</span> site real estate professionals trust*
                                                    </h1>
                                                    <div className="text wow fadeInUp">
                                                        From as low as $10 per day with limited time offer
                                                        discounts.
                                                    </div>
                                                    <div className="widget-tabs">
                                                        {/* <ul
                                                            className="widget-menu-tab list-link wow fadeInUp"
                                                            data-wow-delay="0.1s"
                                                        >
                                                            <li className="item-title item active">Buy</li>
                                                            <li className="item-title item">Rent</li>
                                                        </ul> */}
                                                        <div className="widget-content-tab">
                                                            <div className="widget-content-inner active">
                                                                <form className="form-search-home3 wow fadeInUp">
                                                                    <div className="group-form">
                                                                        <div
                                                                            onClick={(e) => handleSelectClick(e, "type")}
                                                                            className={`nice-select border-radius-1 ${openSelect.type ? "open" : ""}`}
                                                                            tabIndex={0}
                                                                            ref={assignRef("type")}
                                                                        >
                                                                            <span className="current open ">{selectedTypes.title}</span>
                                                                            <ul className="list style-radio">
                                                                                <li data-value="" className={`option ${selectedTypes.id === 0 ? "selected" : ""}`} onClick={() => handleTypes(0, " All Types")}>
                                                                                    All types
                                                                                </li>
                                                                                {Object.keys(filters).length > 0 ? filters.types.map((item) => (
                                                                                    <li data-value="" className={`option ${selectedTypes.id === item.id ? "selected" : ""}`} key={item.id} onClick={() => handleTypes(item.id, item.title)}>
                                                                                        {item.title}
                                                                                    </li>
                                                                                )) : null}


                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-form " style={{ width: "180px" }} >
                                                                        <div
                                                                            onClick={(e) => handleSelectClick(e, "city")}
                                                                            className={`nice-select border-radius-1 ${openSelect.city ? "open" : ""}`}
                                                                            tabIndex={0}
                                                                            ref={assignRef("city")}
                                                                        >
                                                                            <span className="current open ">{selectedCity.title}</span>
                                                                            <ul className="list style-radio">
                                                                                <li data-value="" className={`option ${selectedCity.id === 0 ? "selected" : ""}`} onClick={() => handleCity(0, " City")}>
                                                                                    City
                                                                                </li>
                                                                                {Object.keys(filters).length > 0 ? filters.cities.map((item) => (
                                                                                    <li data-value="" className={`option ${selectedCity.id === item.id ? "selected" : ""}`} key={item.id} onClick={() => handleCity(item.id, item.name)}>
                                                                                        {item.name}
                                                                                    </li>
                                                                                )) : null}


                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-form flex-grow form-search-content relative">
                                                                        <fieldset className="name">
                                                                            <input
                                                                                type="text"
                                                                                placeholder="Enter Keywords"
                                                                                className="show-search style-3"
                                                                                name="keyword"
                                                                                tabIndex={2}
                                                                                value={Keyword}
                                                                                onChange={handleInputChange}
                                                                                aria-required="true"
                                                                                required=""
                                                                            />
                                                                        </fieldset>
                                                                        <div className="style-absolute-left-center">
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
                                                                    {/* <div className="group-form">
                                                                        <div className="wg-filter">
                                                                            <div className={`tf-button-filter btn-filter border-radius ${openFilter ? "active" : ""}`} onClick={toggleFilter} >
                                                                                <i className="flaticon-filter" />
                                                                                Filters
                                                                            </div>
                                                                            <div
                                                                                className={`open-filter filter-no-content ${openFilter ? "active" : ""}`}
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
                                                                                                <li
                                                                                                    data-value="Paris"
                                                                                                    className="option"
                                                                                                >
                                                                                                    Paris
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="Ha Noi"
                                                                                                    className="option"
                                                                                                >
                                                                                                    Ha Noi
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="nice-select" tabIndex={0}>
                                                                                            <span className="current">
                                                                                                Bedrooms
                                                                                            </span>
                                                                                            <ul className="list">
                                                                                                <li
                                                                                                    data-value=""
                                                                                                    className="option selected"
                                                                                                >
                                                                                                    Bedrooms
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="1 Bed"
                                                                                                    className="option"
                                                                                                >
                                                                                                    1 Bed
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="2 Bed"
                                                                                                    className="option"
                                                                                                >
                                                                                                    2 Bed
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="nice-select" tabIndex={0}>
                                                                                            <span className="current">
                                                                                                Bathrooms
                                                                                            </span>
                                                                                            <ul className="list">
                                                                                                <li
                                                                                                    data-value=""
                                                                                                    className="option selected"
                                                                                                >
                                                                                                    Bathrooms
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="1 Bath"
                                                                                                    className="option"
                                                                                                >
                                                                                                    1 Bath
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="2 Bath"
                                                                                                    className="option"
                                                                                                >
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
                                                                                            <span className="current">
                                                                                                Min. Price
                                                                                            </span>
                                                                                            <ul className="list">
                                                                                                <li
                                                                                                    data-value=""
                                                                                                    className="option selected"
                                                                                                >
                                                                                                    Min. Price
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="100 $"
                                                                                                    className="option"
                                                                                                >
                                                                                                    100 $
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="150 $"
                                                                                                    className="option"
                                                                                                >
                                                                                                    150 $
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="nice-select" tabIndex={0}>
                                                                                            <span className="current">
                                                                                                Max. Price
                                                                                            </span>
                                                                                            <ul className="list">
                                                                                                <li
                                                                                                    data-value=""
                                                                                                    className="option selected"
                                                                                                >
                                                                                                    Max. Price
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="1000 $"
                                                                                                    className="option"
                                                                                                >
                                                                                                    1000 $
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="1500 $"
                                                                                                    className="option"
                                                                                                >
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
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    defaultChecked=""
                                                                                                />
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
                                                                    </div> */}
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
                                                                                <div  >
                                                                                    <div className="grid-4-cols mb-20"  >
                                                                                        <div className='' >
                                                                                            <div className='mx-2' style={{ fontSize: 13, fontWeight: 400, color: "#969696", marginBottom: 10 }} >Status</div>
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
                                                                                        </div>
                                                                                        <div>
                                                                                            <div className='mx-2' style={{ fontSize: 13, fontWeight: 400, color: "#969696", marginBottom: 10 }} >Community</div>
                                                                                            <div className={`nice-select ${openSelect.community ? "open" : ""}`} tabIndex={0} onClick={(e) => handleSelectClick(e, "community")} ref={assignRef("community")} >
                                                                                                <span className="current">{selectedCommunity.title}</span>
                                                                                                <ul className="list style-radio">
                                                                                                    <li
                                                                                                        data-value="For Sale"
                                                                                                        className={`option ${selectedCommunity.id === 0 ? "selected" : ""} `}

                                                                                                        onClick={() => handleCommunity(0, " All Communities")}
                                                                                                    >
                                                                                                        All Communities
                                                                                                    </li>
                                                                                                    {community.map((item) => (
                                                                                                        <li
                                                                                                            data-value="For Sale"
                                                                                                            className={`option ${selectedCommunity.id === item.id ? "selected" : ""} `}
                                                                                                            key={item.id}
                                                                                                            onClick={() => handleCommunity(item.id, item.title)}
                                                                                                        >
                                                                                                            {item.title}
                                                                                                        </li>
                                                                                                    ))}


                                                                                                </ul>

                                                                                            </div>
                                                                                        </div>
                                                                                        <div>
                                                                                            <div className='mx-2' style={{ fontSize: 13, fontWeight: 400, color: "#969696", marginBottom: 10 }} >Bedrooms</div>
                                                                                            <div className={`nice-select ${openSelect.minBed ? "open" : ""}`} tabIndex={0} onClick={(e) => handleSelectClick(e, "minBed")} ref={assignRef("minBed")}  >
                                                                                                <span className="current">{selectedBed.title}</span>
                                                                                                <ul className="list  ">

                                                                                                    {Object.keys(filters).length > 0 ? filters.min_bed.map((item) => (
                                                                                                        <li data-value="" className={`option ${selectedBed.id === item.id ? "selected" : ""}`} key={item.id} onClick={() => handleBed(item.id, item.title)} >
                                                                                                            {item.title}
                                                                                                        </li>
                                                                                                    )) : null}
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div>
                                                                                            <div className='mx-2' style={{ fontSize: 13, fontWeight: 400, color: "#969696", marginBottom: 10 }} >Bathrooms</div>
                                                                                            <div className={`nice-select ${openSelect.minBath ? "open" : ""}`} tabIndex={0} onClick={(e) => handleSelectClick(e, "minBath")} ref={assignRef("minBath")}>
                                                                                                <span className="current">{selectedBath.title}</span>

                                                                                                <ul className="list">

                                                                                                    {Object.keys(filters).length > 0 ? filters.min_bath.map((item) => (
                                                                                                        <li data-value="1 Bath" className={`option ${selectedBath.id === item.id ? "selected" : ""} `} key={item.id} onClick={() => handleBath(item.id, item.title)} >
                                                                                                            {item.title}
                                                                                                        </li>
                                                                                                    )) : null}

                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>


                                                                                    </div>
                                                                                    <div className="grid-4-cols">
                                                                                        <fieldset className="name">
                                                                                            <div className='mx-2' style={{ fontSize: 13, fontWeight: 400, color: "#969696", marginBottom: 10 }} >Min. Area</div>
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
                                                                                            <div className='mx-2' style={{ fontSize: 13, fontWeight: 400, color: "#969696", marginBottom: 10 }} >Max. Area</div>
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
                                                                                            <div className='mx-2' style={{ fontSize: 13, fontWeight: 400, color: "#969696", marginBottom: 10 }} >Min. Price</div>
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
                                                                                            <div className='mx-2' style={{ fontSize: 13, fontWeight: 400, color: "#969696", marginBottom: 10 }} >Max. Price</div>
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
                                                                                        {
                                                                                            Object.keys(filters).length > 0 ?
                                                                                                Object.keys(filters.features).map((featureKey) => (
                                                                                                    <li key={featureKey} >
                                                                                                        <div className="title mt-4 mb-4">
                                                                                                            {featureKey
                                                                                                                .replace(/_/g, ' ')
                                                                                                                .replace(/\b\w/g, (char) => char.toUpperCase())}
                                                                                                        </div>
                                                                                                        <ul

                                                                                                            data-wow-delay="0.1s"
                                                                                                        >
                                                                                                            <div className='row' >
                                                                                                                {filters.features[featureKey].map((item) => (
                                                                                                                    <div className='col-3 m-4' key={item.id} >
                                                                                                                        <li className="checkbox-item"  >
                                                                                                                            <label>
                                                                                                                                <p>{item.title}</p>
                                                                                                                                <input type="checkbox" onChange={() => hanldeFeatures(item.id, item.title)} checked={selectedFeatures.some((feature) => feature.id === item.id)} />
                                                                                                                                <span className="btn-checkbox" />
                                                                                                                            </label>
                                                                                                                        </li>
                                                                                                                    </div>
                                                                                                                ))}
                                                                                                            </div>

                                                                                                        </ul>
                                                                                                    </li>
                                                                                                )) : null}

                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-form">
                                                                        <div className="button-submit">
                                                                            <button className="" onClick={handleSearch} >
                                                                                Search
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            {/* <div className="widget-content-inner">
                                                                <form className="form-search-home3">
                                                                    <div className="group-form">
                                                                        <div
                                                                            className="nice-select border-radius-1"
                                                                            tabIndex={0}
                                                                        >
                                                                            <span className="current">Type</span>
                                                                            <ul className="list style-radio">
                                                                                <li data-value="" className="option selected">
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
                                                                    <div className="group-form flex-grow form-search-content relative">
                                                                        <fieldset className="name">
                                                                            <input
                                                                                type="text"
                                                                                placeholder="Enter Keywords"
                                                                                className="show-search style-3"
                                                                                name="name"
                                                                                tabIndex={2}
                                                                                defaultValue=""
                                                                                aria-required="true"
                                                                                required=""
                                                                            />
                                                                        </fieldset>
                                                                        <div className="style-absolute-left-center">
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
                                                                    <div className="group-form">
                                                                        <div className="wg-filter">
                                                                            <div className="tf-button-filter btn-filter border-radius">
                                                                                <i className="flaticon-filter" />
                                                                                Filters
                                                                            </div>
                                                                            <div
                                                                                className="open-filter filter-no-content"
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
                                                                                                <li
                                                                                                    data-value="Paris"
                                                                                                    className="option"
                                                                                                >
                                                                                                    Paris
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="Ha Noi"
                                                                                                    className="option"
                                                                                                >
                                                                                                    Ha Noi
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="nice-select" tabIndex={0}>
                                                                                            <span className="current">
                                                                                                Bedrooms
                                                                                            </span>
                                                                                            <ul className="list">
                                                                                                <li
                                                                                                    data-value=""
                                                                                                    className="option selected"
                                                                                                >
                                                                                                    Bedrooms
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="1 Bed"
                                                                                                    className="option"
                                                                                                >
                                                                                                    1 Bed
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="2 Bed"
                                                                                                    className="option"
                                                                                                >
                                                                                                    2 Bed
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="nice-select" tabIndex={0}>
                                                                                            <span className="current">
                                                                                                Bathrooms
                                                                                            </span>
                                                                                            <ul className="list">
                                                                                                <li
                                                                                                    data-value=""
                                                                                                    className="option selected"
                                                                                                >
                                                                                                    Bathrooms
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="1 Bath"
                                                                                                    className="option"
                                                                                                >
                                                                                                    1 Bath
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="2 Bath"
                                                                                                    className="option"
                                                                                                >
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
                                                                                            <span className="current">
                                                                                                Min. Price
                                                                                            </span>
                                                                                            <ul className="list">
                                                                                                <li
                                                                                                    data-value=""
                                                                                                    className="option selected"
                                                                                                >
                                                                                                    Min. Price
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="100 $"
                                                                                                    className="option"
                                                                                                >
                                                                                                    100 $
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="150 $"
                                                                                                    className="option"
                                                                                                >
                                                                                                    150 $
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="nice-select" tabIndex={0}>
                                                                                            <span className="current">
                                                                                                Max. Price
                                                                                            </span>
                                                                                            <ul className="list">
                                                                                                <li
                                                                                                    data-value=""
                                                                                                    className="option selected"
                                                                                                >
                                                                                                    Max. Price
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="1000 $"
                                                                                                    className="option"
                                                                                                >
                                                                                                    1000 $
                                                                                                </li>
                                                                                                <li
                                                                                                    data-value="1500 $"
                                                                                                    className="option"
                                                                                                >
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
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    defaultChecked=""
                                                                                                />
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
                                                                </form>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /slider */}
                        {/* flat-explore */}
                        <section className="tf-section flat-counter">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">
                                                A Message from Our CEO
                                            </h2>
                                            <div className="text wow fadeInUp">
                                                Take a decision towards better future
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter">
                                    <div className='row justify-center' >
                                        <div className='col-12 col-md-6' >
                                            <Calculator />
                                        </div>
                                        <div className='col-12 col-md-6 ' >
                                            <VideoComponent src="/assets/video.mp4" />
                                            {/* <div className="video">
                                               
                                                <div className="video-wrap">
                                                    <img src="/assets/images/image-box/video-2.jpg" alt="" />
                                                    <Link
                                                        href="/assets/video.mp4"
                                                        className="popup-youtube"
                                                    >
                                                        <div className="icon">
                                                            <i className="flaticon-play" />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="tf-section flat-explore">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">Explore Different Property Types</h2>
                                            <div className="text wow fadeInUp">
                                                Find a perfect match for your taste
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="wrap">
                                            <Swiper
                                                className='swiper-container slider-discover padding-bottom-80 pagination-style-2'
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                modules={[Pagination, A11y]}
                                                pagination={{ clickable: true }}
                                                breakpoints={{
                                                    450: {
                                                        slidesPerView: 1,
                                                        spaceBetween: 30,
                                                    },
                                                    768: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 30,
                                                    },
                                                    1024: { // Adjust breakpoint to avoid overlap with 868
                                                        slidesPerView: 5,
                                                        spaceBetween: 40,
                                                    },
                                                }}
                                            >
                                                {types.map((item) => (
                                                    <SwiperSlide key={item.id} >
                                                        <div className="cities-item style-3 wow fadeInUp">
                                                            <Link href={`/property/?type=${item.title}`} >
                                                                <img src={item.banner} alt="" style={{ cursor: "pointer" }} />
                                                                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)" }} />
                                                            </Link>
                                                            <div className="content">
                                                                <h4 style={{ color: "#fff" }} >{item.title}</h4>
                                                                <p style={{ color: "#fff" }} >{item.property_count} Properties</p>
                                                            </div>
                                                            <Link href={`/property/?type=${item.title}`} className="button-arrow-right">
                                                                <i className="icon-arrow-right-add" />
                                                            </Link>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}



                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /flat-explore */}
                        {/* flat-counter */}
                        <section className="tf-section flat-counter">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">
                                                Our mission is to redefine real estate <br /> in the
                                                customer's favor.
                                            </h2>
                                            <div className="text wow fadeInUp">
                                                We are here to serve "You"
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ComparisonTable />
                                {/* <div className="counter">
                                    <div className='row' >
                                        <div className='col-12 col-md-12' >
                                            <div className="row">
                                                <div className="col-xl-3 col-md-6">
                                                    <div className="number-counter style-1">
                                                        <div className="text-center">
                                                            $
                                                            <span
                                                                className="number"
                                                                data-speed={2500}
                                                                data-to={16}
                                                                data-inviewport="yes"
                                                            >
                                                                16
                                                            </span>
                                                            .4M
                                                        </div>
                                                        <h4>
                                                            Owned from properties <br /> transactions
                                                        </h4>
                                                        <p className="text-content">
                                                            Pellentesque egestas elementum egestas faucibus sem.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <div className="number-counter style-1">
                                                        <div className="text-center">
                                                            <span
                                                                className="number"
                                                                data-speed={2500}
                                                                data-to={26}
                                                                data-inviewport="yes"
                                                            >
                                                                26
                                                            </span>
                                                            K+
                                                        </div>
                                                        <h4>
                                                            Properties For <br /> Buy
                                                        </h4>
                                                        <p className="text-content">
                                                            Pellentesque egestas elementum egestas faucibus sem.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <div className="number-counter style-1">
                                                        <div className="text-center">
                                                            <span
                                                                className="number"
                                                                data-speed={2500}
                                                                data-to={14}
                                                                data-inviewport="yes"
                                                            >
                                                                14
                                                            </span>
                                                            K+
                                                        </div>
                                                        <h4>
                                                            Properties Buy <br /> Sell
                                                        </h4>
                                                        <p className="text-content">
                                                            Pellentesque egestas elementum egestas faucibus sem.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <div className="number-counter style-1">
                                                        <div className="text-center">
                                                            <span
                                                                className="number"
                                                                data-speed={2500}
                                                                data-to={890}
                                                                data-inviewport="yes"
                                                            >
                                                                890
                                                            </span>
                                                        </div>
                                                        <h4>
                                                            Daily Completed <br /> Transactions
                                                        </h4>
                                                        <p className="text-content">
                                                            Pellentesque egestas elementum egestas faucibus sem.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div> */}
                            </div>
                        </section>

                        {/* /flat-counter */}
                        {/* flat-discover */}
                        <section className="tf-section flat-discover">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">Discover Our Best Deals</h2>
                                            <div className="text wow fadeInUp">
                                                Listings Crafted Just For You
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">

                                        <Swiper
                                            className='swiper-container slider-discover padding-bottom-80 pagination-style-2'
                                            slidesPerView={1}
                                            spaceBetween={40}
                                            modules={[Pagination, A11y]}
                                            pagination={{ clickable: true }}
                                            breakpoints={{
                                                450: {
                                                    slidesPerView: 1,
                                                    spaceBetween: 30,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 30,
                                                },
                                                1024: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 40,
                                                },
                                            }}
                                        >
                                            {BestDeals.map((item) => (
                                                <SwiperSlide key={item.id} >
                                                    <div className="swiper-slide">
                                                        <div className="box-dream style-2 type-small wow fadeInUp">
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
                                                                    {item.gallery.map((i, index) => (
                                                                        <SwiperSlide key={index} >
                                                                            <div className="swiper-slide">
                                                                                <div className="w-full">
                                                                                    <img
                                                                                        className="w-full"
                                                                                        src={i}
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
                                                                </div>
                                                                <div className="location">
                                                                    <div className="icon">
                                                                        <i className="flaticon-location" />
                                                                    </div>
                                                                    <p>{item.address}</p>
                                                                </div>
                                                                <div className="bot">
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
                                                                            <p>
                                                                                {!isSquareMeter
                                                                                    ? item.size_mt + " Sq M"
                                                                                    : item.size + " Sq ft"}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price">${item.price.toLocaleString()}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}




                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /flat-discover */}
                        {/* flat-cities */}
                        <section className="tf-section flat-cities style-2">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">Explore Cities We Serve</h2>
                                            <div className="text wow fadeInUp">
                                                Best Possible Locations
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="wrap arrow-style-1 arrow-over">
                                            <Swiper
                                                className="swiper-container slider-cities-1"
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                modules={[Pagination, A11y, Navigation]}
                                                navigation
                                                loop={true}
                                                // pagination={{ clickable: true }}
                                                breakpoints={{
                                                    450: {
                                                        slidesPerView: 1,
                                                        spaceBetween: 30,
                                                    },
                                                    768: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 30,
                                                    },
                                                    1024: { // Adjust breakpoint to avoid overlap with 868
                                                        slidesPerView: 5,
                                                        spaceBetween: 40,
                                                    },
                                                }}
                                            >
                                                {cities.map((item) => (
                                                    <SwiperSlide key={item.id} >
                                                        <div className="swiper-slide">
                                                            <div className="cities-item style-1 wow fadeInUp">
                                                                <Link href={`/property?city=${item.name}`} >
                                                                    <div className="image">
                                                                        <img src={item.image} alt="" />
                                                                    </div>
                                                                </Link>
                                                                <div className="content">
                                                                    <p>{item.properties_count} Properties</p>
                                                                    <h4>
                                                                        <Link href={`/property?city=${item.name}`}>{item.name}</Link>
                                                                    </h4>
                                                                </div>``
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /flat-cities */}
                        {/* recent-properties */}
                        <section className="tf-section recent-properties">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">Recent Properties for Rent</h2>
                                            <div className="text wow fadeInUp">
                                                Listings Crafted Just For You
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <Swiper
                                            className="swiper-container slider-recent-properties pagination-style-2"
                                            slidesPerView={1}
                                            spaceBetween={40}
                                            modules={[Pagination, A11y, Navigation]}
                                            // navigation
                                            pagination={{ clickable: true }}
                                            breakpoints={{
                                                450: {
                                                    slidesPerView: 1,
                                                    spaceBetween: 30,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 30,
                                                },
                                                1024: { // Adjust breakpoint to avoid overlap with 868
                                                    slidesPerView: 3,
                                                    spaceBetween: 40,
                                                },
                                            }}
                                        >
                                            {recentForRent.map((item) => (
                                                <SwiperSlide key={item.id} >
                                                    <div className="swiper-slide">
                                                        <div className="box-dream style-2 type-small wow fadeInUp">
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
                                                                    {item.gallery.map((i, index) => (
                                                                        <SwiperSlide key={index} >
                                                                            <div className="swiper-slide">
                                                                                <div className="w-full">
                                                                                    <img
                                                                                        className="w-full"
                                                                                        src={i}
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
                                                                </div>
                                                                <div className="location">
                                                                    <div className="icon">
                                                                        <i className="flaticon-location" />
                                                                    </div>
                                                                    <p>{item.address}</p>
                                                                </div>
                                                                <div className="bot">
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
                                                                            <p>
                                                                                {!isSquareMeter
                                                                                    ? item.size_mt + " Sq M"
                                                                                    : item.size + " Sq ft"}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price">${item.price.toLocaleString()}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}






                                        </Swiper>

                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /recent-properties */}
                        {/* recent-properties */}
                        <section className="tf-section recent-properties">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">Recent Properties for Sale</h2>
                                            <div className="text wow fadeInUp">
                                                Listings Crafted Just For You
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <Swiper
                                            className="swiper-container slider-recent-properties pagination-style-2"
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            modules={[Pagination, A11y, Navigation]}
                                            // navigation
                                            pagination={{ clickable: true }}
                                            breakpoints={{
                                                450: {
                                                    slidesPerView: 1,
                                                    spaceBetween: 30,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 30,
                                                },
                                                1024: { // Adjust breakpoint to avoid overlap with 868
                                                    slidesPerView: 3,
                                                    spaceBetween: 40,
                                                },
                                            }}
                                        >
                                            {recentForSale.map((item) => (
                                                <SwiperSlide key={item.id} >
                                                    <div className="swiper-slide">
                                                        <div className="box-dream style-2 type-small wow fadeInUp">
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
                                                                    {item.gallery.map((i, index) => (
                                                                        <SwiperSlide key={index} >
                                                                            <div className="swiper-slide">
                                                                                <div className="w-full">
                                                                                    <img
                                                                                        className="w-full"
                                                                                        src={i}
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
                                                                </div>
                                                                <div className="location">
                                                                    <div className="icon">
                                                                        <i className="flaticon-location" />
                                                                    </div>
                                                                    <p>{item.address}</p>
                                                                </div>
                                                                <div className="bot">
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
                                                                            <p>
                                                                                {!isSquareMeter
                                                                                    ? item.size_mt + " Sq M"
                                                                                    : item.size + " Sq ft"}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price">${item.price.toLocaleString()}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}

                                        </Swiper>

                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /recent-properties */}
                        {/* perfect-home */}
                        <section className="tf-section perfect-home style-1">
                            <div className="cl-container">
                                <div className="row justify-between widget-tabs">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">
                                                How It works? Find a perfect home
                                            </h2>
                                            <div className="text wow fadeInUp">
                                                Take a decision towards better future
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="content-left widget-menu-tab">
                                            <div className="box-icon has-bg item-title active">
                                                <div className="icon">
                                                    <i className="flaticon-house" />
                                                </div>
                                                <div className="content">
                                                    <Link href="#" className="title">
                                                        Find Real Estate
                                                    </Link>
                                                    <p>
                                                        Sumo petentium ut per, at his wisim utinam adipiscing. Est
                                                        ei graeco Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="box-icon has-bg item-title">
                                                <div className="icon">
                                                    <i className="flaticon-online-meeting" />
                                                </div>
                                                <div className="content">
                                                    <Link href="#" className="title">
                                                        Meet Relator
                                                    </Link>
                                                    <p>
                                                        Sumo petentium ut per, at his wisim utinam adipiscing. Est
                                                        ei graeco Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="box-icon has-bg item-title">
                                                <div className="icon">
                                                    <i className="flaticon-rental" />
                                                </div>
                                                <div className="content">
                                                    <Link href="#" className="title">
                                                        Take The Keys
                                                    </Link>
                                                    <p>
                                                        Sumo petentium ut per, at his wisim utinam adipiscing. Est
                                                        ei graeco Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="widget-content-tab">
                                            <div className="widget-content-inner active">
                                                <div className="img-right">
                                                    <img src="/assets/images/section/works-step-1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="widget-content-inner">
                                                <div className="img-right">
                                                    <img src="/assets/images/section/works-step-1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="widget-content-inner">
                                                <div className="img-right">
                                                    <img src="/assets/images/section/works-step-1.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="img-right">
                              <img src="/assets/images/section/works-step-1.jpg" alt="">
                          </div> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /perfect-home */}
                        {/* parallax */}
                        <div className="parallax-wrap">
                            <div className="content">
                                <div className="heading wow fadeInUp">
                                    Discover a Place You’ll <br /> Love To Live
                                </div>
                                <div className="text wow fadeInUp">
                                    Pellentesque egestas elementum egestas faucibus sem.
                                    <br /> Velit nunc egestas ut morbi. Leo diam diam{" "}
                                </div>
                                <Link
                                    href="#"
                                    className="tf-button-primary style-green m-auto wow fadeInUp"
                                >
                                    View Properties
                                    <i className="icon-arrow-right-add" />
                                </Link>
                            </div>
                        </div>
                        {/* /parallax */}
                        {/* luxury-home */}
                        <section className="tf-section luxury-home style-1">
                            <div className="cl-container">
                                <div className="row justify-between">
                                    <div className="col-md-6">
                                        <div className="image wow fadeInLeft">
                                            <img src="/assets/images/section/luxury-home-2.jpg" alt="" />
                                            <div className="box">
                                                <div className="icon">
                                                    <i className="flaticon-customer" />
                                                </div>
                                                <div>
                                                    <p>Total Clients</p>
                                                    <h4>7,000 M</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="content">
                                            <h2 className="wow fadeInUp">
                                                Why You Should Work <br />
                                                With Us
                                            </h2>
                                            <div className="text-content wow fadeInUp">
                                                Pellentesque egestas elementum egestas faucibus sem. Velit
                                                nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa
                                                pretium. Mi mauris nulla ac dictum ut mauris non.
                                            </div>
                                            <ul>
                                                <li className="wow fadeInUp">
                                                    <h4>Buy or Rent Homes</h4>
                                                    <p>
                                                        We sell your home at the best <br />
                                                        market price and very quickly as well.
                                                    </p>
                                                </li>
                                                <li className=" wow fadeInUp" data-wow-delay="0.1s">
                                                    <h4>Thrusted by Thousands</h4>
                                                    <p>
                                                        We offer you free consultancy to <br />
                                                        get a loan for your new home.
                                                    </p>
                                                </li>
                                            </ul>
                                            <Link
                                                href="#"
                                                className="tf-button-primary style-green wow fadeInUp"
                                            >
                                                Learn More
                                                <i className="icon-arrow-right-add" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <div className="text">
                                                Thousands of world’s leading companies trust Space
                                            </div>
                                        </div>
                                    </div>
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
                                                            <Link href="#">
                                                                <img
                                                                    src="/assets/images/image-box/brand-1.png"
                                                                    alt="images"
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div className="slogan-logo">
                                                            <Link href="#">
                                                                <img
                                                                    src="/assets/images/image-box/brand-2.png"
                                                                    alt="images"
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div className="slogan-logo">
                                                            <Link href="#">
                                                                <img
                                                                    src="/assets/images/image-box/brand-3.png"
                                                                    alt="images"
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div className="slogan-logo">
                                                            <Link href="#">
                                                                <img
                                                                    src="/assets/images/image-box/brand-4.png"
                                                                    alt="images"
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div className="slogan-logo">
                                                            <Link href="#">
                                                                <img
                                                                    src="/assets/images/image-box/brand-5.png"
                                                                    alt="images"
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div className="slogan-logo">
                                                            <Link href="#">
                                                                <img
                                                                    src="/assets/images/image-box/brand-6.png"
                                                                    alt="images"
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div className="slogan-logo">
                                                            <Link href="#">
                                                                <img
                                                                    src="/assets/images/image-box/brand-1.png"
                                                                    alt="images"
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>
                                            <div >
                                                <div className="swiper-wrapper">






                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /luxury-home */}
                    </div>
                    {/* /main-content */}
                    <Footer />
                </div>
                {/* /#page */}
            </div >
            <div className="modal fade modalCenter" id="modallogin">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content modal-sm">
                        <Link href="#" className="btn-hide-modal" data-bs-dismiss="modal">
                            <i className="icon-close" />
                        </Link>
                        <div className="image-left">
                            <img src="/assets/images/section/login.jpg" alt="" />
                            <h3>Welcome to Your Real Estate Website</h3>
                        </div>
                        <div className="content-right">
                            <h4>Sign into your account</h4>
                            <form className="form-login">
                                <fieldset className="name">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className=""
                                        name="text"
                                        tabIndex={2}
                                        defaultValue="creative"
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <fieldset className="password">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className=""
                                        name="password"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <div className="flex items-center justify-between w-full">
                                    <div className="checkbox-item">
                                        <label>
                                            <p>Remember me</p>
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                    </div>
                                    <Link href="#" className="lost-password">
                                        Lost your password?
                                    </Link>
                                </div>
                                <div className="button-submit w-full">
                                    <button className="tf-button-primary w-full" type="submit">
                                        Login
                                        <i className="icon-arrow-right-add" />
                                    </button>
                                </div>
                            </form>
                            <div className="flex items-center justify-center">
                                <p>Not a member?</p>
                                <Link
                                    href="#"
                                    className="btn-show-register"
                                    data-bs-dismiss="modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalregister"
                                >
                                    Register here
                                </Link>
                            </div>
                            <ul className="wg-social-1">
                                <li>
                                    <Link href="#">
                                        <i className="flaticon-google" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="flaticon-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="flaticon-facebook" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade modalCenter" id="modalregister">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content modal-sm">
                        <Link href="#" className="btn-hide-modal" data-bs-dismiss="modal">
                            <i className="icon-close" />
                        </Link>
                        <div className="image-left">
                            <img src="/assets/images/section/login.jpg" alt="" />
                            <h3>Welcome to Your Real Estate Website</h3>
                        </div>
                        <div className="content-right">
                            <h4>Create an account</h4>
                            <form className="form-login">
                                <fieldset className="name">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className=""
                                        name="text"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <fieldset className="email">
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
                                </fieldset>
                                <fieldset className="password">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className=""
                                        name="password"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <fieldset className="password">
                                    <input
                                        type="password"
                                        placeholder="Retype Password"
                                        className=""
                                        name="password"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                    />
                                </fieldset>
                                <div className="flex items-center justify-between">
                                    <div className="checkbox-item">
                                        <label>
                                            <p>I agree with terms &amp; conditions</p>
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                    </div>
                                </div>
                                <div className="button-submit">
                                    <button className="tf-button-primary w-full" type="submit">
                                        Register
                                        <i className="icon-arrow-right-add" />
                                    </button>
                                </div>
                            </form>
                            <div className="flex items-center justify-center">
                                <p>Have an account?</p>
                                <Link
                                    href="#"
                                    className="btn-show-register"
                                    data-bs-dismiss="modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modallogin"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CustomScript
                src="/assets/js/jquery.min.js"
                strategy="lazyOnload" // Load it after the page load

                onError={(e) => console.error("Failed to load jQuery:", e)}
            />
            {/* <CustomScript src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" /> */}
            <CustomScript src="/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
            <CustomScript src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
            <CustomScript src="/assets/js/main.js" />


        </>

    )
}

export default HomeComponent