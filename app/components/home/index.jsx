'use client';
import React from 'react';
import Footer from '../footer';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "animate.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay"
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';
import VideoComponent from '../video';
import Header3 from '../header3';
import { useRouter } from 'next/navigation';
import HomeSizeCalculator from '../SizeCalculeter';
import Temperatures from '../temp';
import RosaritoComparisonTable from '../comparison';
import useSWR from "swr";
import { api } from '@/app/utils/api';
import { url } from '@/app/utils/urls';



const HomeComponent = () => {


    const [openFilter, setOpenFilter] = React.useState(false)
    const toggleFilter = () => setOpenFilter(!openFilter)
    const [selectedFeatures, setSelectedFeatures] = React.useState([])
    const [selectedstatus, setSelectedStatus] = React.useState({ id: 0, title: "All Status" })
    const [selectedTypes, setSelectedTypes] = React.useState({ id: 0, title: "All types" })
    const [selectedCity, setSelectedCity] = React.useState({ id: 0, title: "City" })
    const [selectedCommunity, setSelectedCommunity] = React.useState({ id: 0, title: "All Communities" })
    const [selectedBed, setSelectedBed] = React.useState({ id: 0, title: "Any Number" })
    const [selectedBath, setSelectedBath] = React.useState({ id: 0, title: "Any Number" })
    const [minArea, setMinArea] = React.useState("")
    const [maxArea, setMaxArea] = React.useState("")
    const [minPrice, setMinPrice] = React.useState("")
    const [maxPrice, setMaxPrice] = React.useState("")
    const [Keyword, setKeyword] = React.useState("")
    const swiperRef = React.useRef(null);
    const [data, setData] = React.useState({
        types: [],
        cities: [],
        recentForRent: [],
        recentForSale: [],
        community: [],
        filters: [],
        BestDeals: [],
    });

    const [query, setQuery] = React.useState({});
    const router = useRouter();
    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === "minArea") {
            setMinArea(value)
        } else if (name === "maxArea") {
            setMaxArea(value)
        } else if (name === "minPrice") {
            setMinPrice(value)
        } else if (name === "maxPrice") {
            setMaxPrice(value)
        } else if (name === "keyword") {
            setKeyword(value)
        }
    }
    React.useEffect(() => {
        async function fetchHomeData() {
            try {

                const [
                    types,
                    cities,
                    recentForRent,
                    recentForSale,
                    communities,
                    filters,
                    bestDeals,
                ] = await Promise.all([
                    api.Get(url.PROPERTY_TYPES).then((res) => res.data).catch(() => []),
                    api.Get(url.CITIES).then((res) => res.data).catch(() => []),
                    api.Get(url.RECENT_FOR_RENT).then((res) => res.data).catch(() => []),
                    api.Get(url.RECENT_FOR_SALE).then((res) => res.data).catch(() => []),
                    api.Get(url.COMMUNITY).then((res) => res.data).catch(() => []),
                    api.Get(url.FILTERS).then((res) => res.data).catch(() => []),
                    api.Get(url.BESTDEALS).then((res) => res.data).catch(() => []),
                ]);

                setData({
                    types,
                    cities,
                    recentForRent,
                    recentForSale,
                    community: communities,
                    filters,
                    BestDeals: bestDeals,
                });
            } catch (error) {
                console.error("Error fetching home data:", error);
            } finally {

            }
        }

        fetchHomeData();
    }, []);

    const { community = [], types = [], filters = [], BestDeals = [], cities = [], recentForRent = [], recentForSale = [] } = data || {}
    const handleMouseEnter = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop(); // Stops instantly
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start(); // Resumes autoplay
        }
    };
    const handleStatus = (id, title) => {
        setSelectedStatus({ id: id, title: title })

    }

    const hanldeFeatures = (id, title) => {
        const exist = selectedFeatures.filter((i) => i.id === id)
        if (exist.length > 0) {
            setSelectedFeatures((prev) => prev.filter((i) => i.id !== id))
        } else {

            setSelectedFeatures((prev) => [...prev, { id: id, title: title }])
        }
    }

    const handleCommunity = (id, title) => {
        setSelectedCommunity({ id: id, title: title })

    }
    const handleTypes = (id, title) => {
        setSelectedTypes({ id: id, title: title })
    }
    const handleBed = (id, title) => {
        setSelectedBed({ id: id, title: title })
    }
    const handleBath = (id, title) => {
        setSelectedBath({ id: id, title: title })
    }
    const handleCity = (id, title) => {
        setSelectedCity({ id: id, title: title })
    }



    // const handleSearch = (e) => {
    //     e.preventDefault()
    //     const newParams = new URLSearchParams(searchParams.toString());
    //     if (selectedstatus.id !== 0) {
    //         newParams.set("status", selectedstatus.title)
    //     } else {
    //         newParams.delete("status")
    //     }
    //     if (selectedTypes.id !== 0) {
    //         newParams.set("type", selectedTypes.title)
    //     } else {
    //         newParams.delete("type")
    //     }
    //     if (selectedCity.id !== 0) {
    //         newParams.set("city", selectedCity.title)
    //     } else {
    //         newParams.delete("city")
    //     }
    //     if (selectedCommunity.id !== 0) {
    //         newParams.set("community", selectedCommunity.title)
    //     } else {
    //         newParams.delete("community")
    //     }
    //     if (selectedBed.id !== 0) {
    //         newParams.set("bedrooms", selectedBed.title)
    //     } else {
    //         newParams.delete("bedrooms")
    //     }
    //     if (selectedBath.id !== 0) {
    //         newParams.set("bathrooms", selectedBath.title)
    //     } else {
    //         newParams.delete("bathrooms")
    //     }
    //     if (minArea.length > 0) {
    //         newParams.set("minarea", minArea)
    //     } else {
    //         newParams.delete("minarea")
    //     }
    //     if (maxArea.length > 0) {
    //         newParams.set("maxarea", maxArea)
    //     } else {
    //         newParams.delete("maxarea")
    //     }
    //     if (minPrice.length > 0) {
    //         newParams.set("minprice", minPrice)
    //     } else {
    //         newParams.delete("minprice")
    //     }
    //     if (maxPrice.length > 0) {
    //         newParams.set("maxprice", maxPrice)
    //     } else {
    //         newParams.delete("maxprice")
    //     }
    //     if (selectedFeatures.length > 0) {
    //         const feature = selectedFeatures.map((i) => i.title)
    //         newParams.set("features", feature)
    //     } else {
    //         newParams.delete("features")
    //     }
    //     if (Keyword.length > 0) {
    //         newParams.set("title", Keyword)
    //     } else {
    //         newParams.delete("title")
    //     }
    //     router.push(`/property?${newParams.toString()}`)
    // }
    const handleSearch = (e) => {
        e.preventDefault();

        const updatedQuery = {
            status: selectedstatus.id !== 0 ? selectedstatus.title : undefined,
            type: selectedTypes.id !== 0 ? selectedTypes.title : undefined,
            city: selectedCity.id !== 0 ? selectedCity.title : undefined,
            community: selectedCommunity.id !== 0 ? selectedCommunity.title : undefined,
            bedrooms: selectedBed.id !== 0 ? selectedBed.title : undefined,
            bathrooms: selectedBath.id !== 0 ? selectedBath.title : undefined,
            minarea: minArea.length > 0 ? minArea : undefined,
            maxarea: maxArea.length > 0 ? maxArea : undefined,
            minprice: minPrice.length > 0 ? minPrice : undefined,
            maxprice: maxPrice.length > 0 ? maxPrice : undefined,
            features: selectedFeatures.length > 0 ? selectedFeatures.map(i => i.title).join(",") : undefined,
            title: Keyword.length > 0 ? Keyword : undefined,
            page: 1,
        };

        // Remove undefined values from query
        Object.keys(updatedQuery).forEach((key) => {
            if (updatedQuery[key] === undefined) {
                delete updatedQuery[key];
            }
        });

        setQuery(updatedQuery);
        const queryString = new URLSearchParams(updatedQuery).toString();
        router.push(`/property?${queryString}`);
    };
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
        if (typeof window !== "undefined") {
            import("wow.js").then((module) => {
                const WOW = module.default;
                new WOW().init();
            });
        }
    }, []);

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
        <main>
            < div id="wrapper">
                <div id="page" className="">
                    <Header3 />
                    <div className="main-content default"  >
                        <section className="slider home3 relative z-5"   >
                        
                            <video autoPlay loop muted playsInline>
                                <source src="/assets/intro.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                            </video>
                            <div className='row g-0  '     >
                                <div className='col-12 col-lg-12' >
                                    <div className="wrap-slider">
                                        <div className="slider-item">
                                            <div className="cl-container">
                                                <div className="row"  >
                                                    <div className="col-12">
                                                        <div className="slider-content">
                                                            <h1 className="wow fadeInUp">
                                                                Rosarito isn't just a beach, it's a community. . .
                                                            </h1>
                                                            <div className="text wow fadeInUp">
                                                                and you're invited! -The Hansome Family
                                                            </div>
                                                            <div className="widget-tabs d-block d-lg-block ">
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
                                                                                                {item.title} ({item.count})
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
                                                                                                {item.name} ({item.count})
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
                                                                            </div>
                                                                            <div className="group-form">
                                                                                <div className="wg-filter">
                                                                                    <div className={`tf-button-filter btn-filter ${openFilter ? "active" : ""} `} onClick={toggleFilter}  >
                                                                                        <i className="flaticon-filter" />
                                                                                        Filters
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
                                                                                                        <span className="current">{selectedstatus.title}</span>
                                                                                                        <ul className="list style-radio">
                                                                                                            <li
                                                                                                                data-value="For Sale"
                                                                                                                className={`option ${selectedstatus.id === 0 ? "selected" : ""} `}

                                                                                                                onClick={() => handleStatus(0, " All Status")}
                                                                                                            >
                                                                                                                All Status
                                                                                                            </li>
                                                                                                            {Object.keys(filters).length > 0 ? filters.listing_status.map((item) => (
                                                                                                                <li
                                                                                                                    data-value="For Sale"
                                                                                                                    className={`option ${selectedstatus.id === item.id ? "selected" : ""} `}
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
                                                                                                                    {item.title} ({item.property_count})
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

                                                                </div>
                                                            </div>
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
                                                Why Are More and More Americans Moving to Rosarito? The Answer May Surprise You!
                                            </h2>
                                            {/* <div className="text wow fadeInUp">
                                                Take a decision towards better future
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="counter">
                                    <div className='row justify-center' >

                                        <div className='col-12 col-md-6 ' >
                                            {/* <VideoComponent src="https://www.youtube.com/embed/Yf61HtiwTlo?si=4GV-EyuIpK4TbwC6" /> */}
                                            <iframe width="100%" height="415" src="https://www.youtube.com/embed/Yf61HtiwTlo?si=4GV-EyuIpK4TbwC6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="tf-section flat-counter video-section ">
                            <div className="cl-container">
                                <div className="row justify-center ">
                                    <div className="col-12 col-md-8">
                                        <div className="heading-section text-center">

                                            <div className="text wow fadeInUp">
                                                <p className=''>
                                                    <Link href="https://www.sandiegored.com/en/news/229355/Playas-de-Rosarito-becomes-paradise-for-retired-Americans/?utm_source=chatgpt.com" target='_blank' >Rosarito, officially known as Playas de Rosarito</Link>
                                                    {" "} is quickly becoming one of the most sought-after destinations for Americans looking to escape the high cost of living and {" "}
                                                    <Link href="https://www.latimes.com/environment/story/2025-01-16/climate-change-california-fires" target='_blank' >extreme climate in many U.S. cities.</Link>
                                                </p>
                                                <p className='pt-3'>
                                                    <Link href="https://www.realtor.com/international/mx/rosarito-baja-california-sur/" target='_blank' > Known for its stunning beachfront properties</Link>, year-round mild climate, and affordability, Rosarito offers an unmatched lifestyle at a fraction of the price compared to U.S. cities like Los Angeles or Honolulu.
                                                </p>
                                                <h5 className='pt-3'>
                                                    With Average Cost Per Square Foot of only $110, Can You Afford To Not Live Here?

                                                </h5>
                                                <p className='pt-3'>
                                                    Imagine owning a luxury home with ocean views for as little as $300 per square foot, or a spacious inland property for just $110 per square foot. With{" "}
                                                    <strong>average high temperatures ranging from 65°F (18°C) in January to 75°F (24°C) in August</strong>,
                                                    {" "} <Link href="https://en.wikipedia.org/wiki/Rosarito?utm_source=chatgpt.com" target='_blank' >Playas de Rosarito</Link>
                                                    {" "} boasts one of the most comfortable climates in the region, perfect for those seeking to avoid extreme weather.
                                                </p>
                                                <p className='pt-3'>
                                                    In addition to its affordability and climate, Rosarito is just a short drive from the{" "}
                                                    <Link href="https://bwt.cbp.gov/details/09250401/POV" target='_blank' >U.S. San Ysidro border</Link>,
                                                    {" "} 40 minutes from the {" "}
                                                    <Link href="https://bwt.cbp.gov/details/09250601/POV" target='_blank' >Otay border</Link>{" "} and {" "}
                                                    <Link href="https://maps.app.goo.gl/e9BMg6V7WAtSj3LN6" target='_blank' >only 1 hour from the Tecate border</Link>,
                                                    making it an ideal location for expats and retirees who want easy access to California while enjoying the relaxed pace and {" "}
                                                    <Link href="https://finance.yahoo.com/news/much-average-retiree-mexico-savings-130010760.html" target='_blank' >cost savings of life in Mexico.</Link>
                                                </p>
                                                <p className='pt-3'>
                                                    Whether you’re searching for a quiet retirement home or an affordable second home on the beachfront to escape, Playas de Rosarito offers endless possibilities. With our tools to estimate home size based on budget, you can easily find the property that fits your lifestyle and financial goals. Take the first step toward your dream home and {" "}
                                                    <Link href="https://buyahouseinrosarito.com/contact" target='_blank' >Contact Aaron (English) & Adriana (Spanish) By Clicking Here Now</Link>, {" "}
                                                    for more information.
                                                </p>
                                                <p className='pt-3'>
                                                    Please Use this Rosarito App To Estimate <strong>Beachfront, Oceanview</strong>, or <strong>Non-Ocean View</strong> {" "}
                                                    Cost of Ownership
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter">
                                    <div className='row justify-center' >
                                        <div className='col-12 col-md-6' >
                                            <HomeSizeCalculator />
                                        </div>
                                        <div className='col-12 col-md-6 mt-5 mt-md-0 ' >
                                            <Temperatures />
                                        </div>
                                        <div className='col-12 mt-5' style={{ paddingTop: 10 }} >
                                            <RosaritoComparisonTable />
                                        </div>
                                    </div>

                                </div>
                                <div className='video-section text-center ' >
                                    <img className='pt-3' src='/assets/images/video-section-image.jpg' alt="A sunset over Rosarito  beach" />
                                    <p className='pt-3' >
                                        <Link href="https://www.tripadvisor.com/LocationPhotoDirectLink-g150774-i462503810-Rosarito_Baja_California.html" target='_blank' >Sunset Over Rosarito Beach</Link>
                                    </p>
                                    <p className='pt-3' >
                                        <Link href="https://buyahouseinrosarito.com/contact" target='_blank' >Contact Aaron (English) & Adriana (Spanish) By Clicking Here Now</Link>, for more information.
                                    </p>
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
                                                                <img src={item.banner} alt={item.title} style={{ cursor: "pointer" }} />
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
                                                                    {item.gallery.map((i, index) => (
                                                                        <SwiperSlide key={index} >
                                                                            <div className="swiper-slide">
                                                                                <div className="w-full">
                                                                                    <img
                                                                                        className="w-full"
                                                                                        src={i}
                                                                                        alt="gallery-image"
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
                                                                            {/* <p>
                                                                                {!isSquareMeter
                                                                                    ? item.size_mt + " Sq M"
                                                                                    : item.size + " Sq ft"}
                                                                            </p> */}
                                                                            <p>{item.size + "sqft"} / {item.size_mt + "sqm"}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price">${item.price.toLocaleString()} {item.listing_type === "rent" ? `/${item.rent_cycle}` : null}</div>
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
                                                                <Link href={`/city/${item.slug}`}  >
                                                                    <div className="image">
                                                                        <img src={item.image} alt={item.name} />
                                                                    </div>
                                                                </Link>
                                                                <div className="content">
                                                                    <p>{item.properties_count} Properties</p>
                                                                    <h4>
                                                                        <Link href={`/city/${item.slug}`}  >{item.name}</Link>
                                                                    </h4>
                                                                </div>
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
                                                                    {item.gallery.map((i, index) => (
                                                                        <SwiperSlide key={index} >
                                                                            <div className="swiper-slide">
                                                                                <div className="w-full">
                                                                                    <img
                                                                                        className="w-full"
                                                                                        src={i}
                                                                                        alt="gallery-image"
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
                                                                            {/* <p>
                                                                                {!isSquareMeter
                                                                                    ? item.size_mt + " Sq M"
                                                                                    : item.size + " Sq ft"}
                                                                            </p> */}
                                                                            <p>{item.size + "sqft"} / {item.size_mt + "sqm"}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price">${item.price.toLocaleString()} {item.listing_type === "rent" ? `/${item.rent_cycle}` : null} </div>
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
                                                                    <div className="tags-item for-sell" style={{ backgroundColor: item.listing_type === "rent" ? "#124773" : "" }} >
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
                                                                                        alt="gallery-image"
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
                                                                            {/* <p>
                                                                                {!isSquareMeter
                                                                                    ? item.size_mt + " Sq M"
                                                                                    : item.size + " Sq ft"}
                                                                            </p> */}
                                                                            <p>{item.size + "sqft"} / {item.size_mt + "sqm"}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price">${item.price.toLocaleString()} {item.listing_type === "rent" ? `/${item.rent_cycle}` : null}</div>
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
                        <section className="tf-section work-with-us">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">Why You Should Work With Us</h2>
                                            <div className="text wow fadeInUp">
                                                Reliable experts to guide your move to Rosarito!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-center">
                                    <div className="col-xl-10">
                                        <div className="wrap">
                                            <div className="box-icon style-1">
                                                <div className="icon has-ellipse">
                                                    <i className="flaticon-house-1" />
                                                </div>
                                                <div className="content wow fadeInUp">
                                                    <a href="#" className="title">
                                                        Wide Range of Properties
                                                    </a>
                                                    <p>
                                                        We offer expert legal help for all related <br /> property items
                                                        in Dubai.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="box-icon style-1">
                                                <div className="icon has-ellipse">
                                                    <i className="flaticon-home" />
                                                </div>
                                                <div className="content wow fadeInUp" data-wow-delay="0.1s">
                                                    <a href="#" className="title">
                                                        Buy or Rent Homes
                                                    </a>
                                                    <p>
                                                        We sell your home at the best market price <br /> and very
                                                        quickly as well.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="box-icon style-1">
                                                <div className="icon has-ellipse">
                                                    <i className="flaticon-shield" />
                                                </div>
                                                <div className="content wow fadeInUp" data-wow-delay="0.5s">
                                                    <a href="#" className="title">
                                                        Thrusted by Thousands
                                                    </a>
                                                    <p>
                                                        We offer you free consultancy to get a loan <br /> for your new
                                                        home.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </section>

                        {/* /perfect-home */}
                        {/* parallax */}
                        <div className="parallax-wrap">
                            <div className="content">
                                <div className="heading wow fadeInUp" style={{ color: "#FFF" }} >
                                    Discover a Place You’ll <br /> Love To Live
                                </div>
                                <div className="text wow fadeInUp" style={{ color: "#FFF" }}>
                                    Pellentesque egestas elementum egestas faucibus sem.
                                    <br /> Velit nunc egestas ut morbi. Leo diam diam{" "}
                                </div>
                                <Link
                                    href="/property"
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
                                            <img src="/assets/images/section/luxury-home-2.jpg" alt="luxury-home" />
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
                                                    <h3>Buy or Rent Homes</h3>
                                                    <p>
                                                        We sell your home at the best <br />
                                                        market price and very quickly as well.
                                                    </p>
                                                </li>
                                                <li className=" wow fadeInUp" data-wow-delay="0.1s">
                                                    <h3>Thrusted by Thousands</h3>
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
                                            <h2 className="wow fadeInUp">Trusted Partners</h2>
                                            <div className="text wow fadeInUp">
                                                Reliable experts to guide your move to Rosarito!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="flat-brand" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                                            <Swiper
                                                className="swiper-container slider-brand"
                                                slidesPerView={2}

                                                autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                                                modules={[Autoplay]}
                                                speed={10000}
                                                onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                            <img src="/assets/images/section/login.jpg" alt="login-image" />
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
                            <img src="/assets/images/section/login.jpg" alt="login-image" />
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

            {/* <CustomScript
                src="/assets/js/jquery.min.js"
                strategy="lazyOnload" // Load it after the page load

                onError={(e) => console.error("Failed to load jQuery:", e)}
            /> */}
            {/* <CustomScript src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" /> */}
            {/* <CustomScript src="/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
            <CustomScript src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
            <CustomScript src="/assets/js/main.js" /> */}


        </main>

    )
}

export default HomeComponent