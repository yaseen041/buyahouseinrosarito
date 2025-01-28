import React from 'react'
import Header3 from '../header3'
const CityComponent = ({
    community=[],
}) => {

    return (
        <div>
            <div id="page" className="">
                {/* header */}
                <Header3 />
                {/* /header */}
                {/* main-content */}
                <div className="main-content">
                    {/* flat-title */}
                    <div className="flat-title">
                        <div className="cl-container full">
                            <div className="row">
                                <div className="col-12">
                                    <div className="content">
                                        <h2>Real Estate &amp; Homes For Sale</h2>
                                        <ul className="breadcrumbs">
                                            <li>
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li>/</li>
                                            <li>Property List</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /flat-title */}
                    {/* property-list-wrap */}
                    <div className="property-list-wrap v1">
                        <div className="cl-container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="sidebar">
                                        
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
                                        
                                       
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="top">
                                        <form className="">
                                            <div className="wg-filter">
                                                <div className="tf-button-filter btn-filter">
                                                    <i className="flaticon-filter" />
                                                    Filter
                                                </div>
                                                <div className="open-filter filter-no-content" id="a1">
                                                    <div className="input-search relative wow fadeInUp">
                                                        <fieldset className="name">
                                                            <input
                                                                type="text"
                                                                placeholder="New York NY homes"
                                                                className=""
                                                                name="name"
                                                                tabIndex={2}
                                                                defaultValue=""
                                                                aria-required="true"
                                                                required=""
                                                            />
                                                        </fieldset>
                                                        <div className="button-submit style-absolute-right-center">
                                                            <button className="style-icon-default" type="submit">
                                                                <i className="flaticon-magnifiying-glass" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="nice-select wow fadeInUp" tabIndex={0}>
                                                        <span className="current">All Status</span>
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
                                                    <div className="nice-select wow fadeInUp" tabIndex={0}>
                                                        <span className="current">Home Type</span>
                                                        <ul className="list">
                                                            <li data-value="" className="option selected">
                                                                Apartments
                                                            </li>
                                                            <li data-value="For Ren" className="option">
                                                                Office
                                                            </li>
                                                            <li data-value="Sold" className="option">
                                                                Villa
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nice-select wow fadeInUp" tabIndex={0}>
                                                        <span className="current">Location</span>
                                                        <ul className="list">
                                                            <li data-value="" className="option selected">
                                                                USA
                                                            </li>
                                                            <li data-value="For Ren" className="option">
                                                                China
                                                            </li>
                                                            <li data-value="Sold" className="option">
                                                                Viet Nam
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nice-select wow fadeInUp" tabIndex={0}>
                                                        <span className="current">Beds</span>
                                                        <ul className="list">
                                                            <li data-value="" className="option selected">
                                                                2
                                                            </li>
                                                            <li data-value="For Ren" className="option">
                                                                3
                                                            </li>
                                                            <li data-value="Sold" className="option">
                                                                4
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nice-select wow fadeInUp" tabIndex={0}>
                                                        <span className="current">Baths</span>
                                                        <ul className="list">
                                                            <li data-value="" className="option selected">
                                                                2
                                                            </li>
                                                            <li data-value="For Ren" className="option">
                                                                3
                                                            </li>
                                                            <li data-value="Sold" className="option">
                                                                4
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nice-select wow fadeInUp" tabIndex={0}>
                                                        <span className="current">Garages</span>
                                                        <ul className="list">
                                                            <li data-value="" className="option selected">
                                                                2
                                                            </li>
                                                            <li data-value="For Ren" className="option">
                                                                3
                                                            </li>
                                                            <li data-value="Sold" className="option">
                                                                4
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="grid-2-cols">
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
                                                        <div className="nice-select wow fadeInUp" tabIndex={0}>
                                                            <span className="current">Min. Price</span>
                                                            <ul className="list">
                                                                <li data-value="" className="option">
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
                                                        <div
                                                            className="nice-select wow fadeInUp"
                                                            data-wow-delay="0.1s"
                                                            tabIndex={0}
                                                        >
                                                            <span className="current">Max. Price</span>
                                                            <ul className="list">
                                                                <li data-value="" className="option">
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
                                                    <a href="#" className="tf-button-other wow fadeInUp">
                                                        <div className="icon" />
                                                        Other Features
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="tf-button-primary w-full wow fadeInUp"
                                                    >
                                                        Search Property
                                                        <i className="icon-arrow-right-add" />
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="sub">
                                            <p>9,998 results</p>
                                            <div className="sort-wrap">
                                                <p className="wow fadeInUp">Sort by</p>
                                                <div
                                                    className="nice-select default wow fadeInUp"
                                                    tabIndex={0}
                                                >
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
                                    <div className="row">
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
                                                    <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-1.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-4.jpg"
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
                                                            <a href="property-single-v1.html">Archer House</a>
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
                                                    <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-4.jpg"
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
                                                    <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-4.jpg"
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
                                                    <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-4.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-4.jpg"
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
                                                            FOR RENT
                                                        </a>
                                                        <a href="#" className="tags-item featured">
                                                            FEATURED
                                                        </a>
                                                    </div>
                                                    <div className="button-heart">
                                                        <i className="flaticon-heart-1" />
                                                    </div>
                                                    <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-1.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-4.jpg"
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
                                                            <a href="property-single-v1.html">Archer House</a>
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
                                                    <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-4.jpg"
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
                                                    <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-4.jpg"
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
                                                    <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-4.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="">
                                                                    <img
                                                                        className=""
                                                                        src="/assets/images/house/property-listing-4.jpg"
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
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /property-list-wrap */}
                </div>
                {/* /main-content */}
                {/* footer */}
                <footer className="footer">
                    <div className="footer-inner">
                        <div className="footer-inner-wrap">
                            <div className="top-footer">
                                <div className="logo-footer">
                                    <a href="index.html">
                                        <img
                                            id="logo-footer"
                                            src="/assets/images/logo/logo-footer.svg"
                                            alt="images"
                                        />
                                    </a>
                                </div>
                                <div className="wg-social">
                                    <span>Follow Us</span>
                                    <ul className="list-social">
                                        <li>
                                            <a href="#">
                                                <i className="icon-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-linkedin2" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="center-footer">
                                <div className="footer-cl-1">
                                    <div className="ft-title">Subscribe</div>
                                    <form className="form-subscribe style-line-bottom">
                                        <fieldset className="email">
                                            <input
                                                type="email"
                                                placeholder="Your e-mail"
                                                className="style-1"
                                                name="email"
                                                tabIndex={2}
                                                defaultValue=""
                                                aria-required="true"
                                                required=""
                                            />
                                        </fieldset>
                                        <div className="button-submit style-absolute-right">
                                            <button className="tf-button-bg" type="submit">
                                                Send <i className="icon-arrow-right-add" />
                                            </button>
                                        </div>
                                    </form>
                                    <div className="text">
                                        Subscribe to our newsletter to receive our weekly feed.
                                    </div>
                                </div>
                                <div className="footer-cl-2">
                                    <div className="ft-title">Discover</div>
                                    <ul className="navigation-menu-footer">
                                        <li>
                                            <a href="property-map-v1.html">Miami</a>
                                        </li>
                                        <li>
                                            <a href="property-map-v1.html">New York</a>
                                        </li>
                                        <li>
                                            <a href="property-map-v1.html">Chicago</a>
                                        </li>
                                        <li>
                                            <a href="property-map-v1.html">Sacramento</a>
                                        </li>
                                        <li>
                                            <a href="#">Los Angeles</a>
                                        </li>
                                        <li>
                                            <a href="#">San Francisco</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-cl-3">
                                    <div className="ft-title">Quick Links</div>
                                    <ul className="navigation-menu-footer">
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">Faq</a>
                                        </li>
                                        <li>
                                            <a href="blog-list-v1.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="pricing.html">Pricing Plans</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-cl-4">
                                    <div className="ft-title">Contact Us</div>
                                    <ul className="navigation-menu-footer">
                                        <li>
                                            <div className="text">hi@justhome.com (123) 456-7890</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-cl-5">
                                    <div className="ft-title">Our Address</div>
                                    <ul className="navigation-menu-footer">
                                        <li>
                                            <div className="text">
                                                90 Fifth Avenue, 3rd Floor San Francisco, CA 1980
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-cl-6">
                                    <div className="ft-title">Get the app</div>
                                    <ul className="ft-download">
                                        <li>
                                            <a href="#">
                                                <div className="icon">
                                                    <i className="icon-appleinc" />
                                                </div>
                                                <div className="app">
                                                    <div>Download on the</div>
                                                    <div>Apple Store</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon">
                                                    <i className="icon-ch-play" />
                                                </div>
                                                <div className="app">
                                                    <div>Get in on</div>
                                                    <div>Google Play</div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bottom-footer">
                                <div className="text">Copyright © 2024. JustHome</div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* /footer */}
            </div>
        </div>
    )
}

export default CityComponent