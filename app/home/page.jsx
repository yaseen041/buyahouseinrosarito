'use client';
import React from 'react';
import Header1 from '../components/header1'
import Footer from '../components/footer';
import Scripts from '../scripts';
import $ from "jquery";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WOW from "wow.js";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import "animate.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay"
const initCounto = () => {
    (function ($) {
        $.fn.countTo = function (options) {
            options = options || {};

            return $(this).each(function () {
                var settings = $.extend(
                    {},
                    $.fn.countTo.defaults,
                    {
                        from: $(this).data("from"),
                        to: $(this).data("to"),
                        speed: $(this).data("speed"),
                        refreshInterval: $(this).data("refresh-interval"),
                        decimals: $(this).data("decimals"),
                    },
                    options
                );

                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data("countTo") || {};

                $self.data("countTo", data);

                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof settings.onUpdate == "function") {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        $self.removeData("countTo");
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof settings.onComplete == "function") {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.text(formattedValue);
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1000,
            refreshInterval: 100,
            decimals: 0,
            formatter: formatter,
            onUpdate: null,
            onComplete: null,
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    })($);

    $('#counter').countTo({
        from: 0,
        to: 100,
        speed: 1500,
        refreshInterval: 50,
        decimals: 0,
        onComplete: function () {
            console.log('Counting complete!');
        }
    });

    return () => {
        clearInterval($('#counter').data('countTo')?.interval);
    };
};



const HomePage = () => {
    const [openFilter, setOpenFilter] = React.useState(false)
    const [openNiceSelect, setOpenNiceSelect] = React.useState(false)
    const toggleFilter = () => setOpenFilter(!openFilter)
    const toggleNiceSelect = () => setOpenNiceSelect(!openNiceSelect)

    React.useEffect(() => {
        new WOW().init();
        initCounto();
        // initSliders();
    }, [])

    return (
        <>
            <Scripts />
            < div id="wrapper">
                <div id="page" className="">
                    <Header1 />
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
                                                        <ul
                                                            className="widget-menu-tab list-link wow fadeInUp"
                                                            data-wow-delay="0.1s"
                                                        >
                                                            <li className="item-title item active">Buy</li>
                                                            <li className="item-title item">Rent</li>
                                                        </ul>
                                                        <div className="widget-content-tab">
                                                            <div className="widget-content-inner active">
                                                                <form className="form-search-home3 wow fadeInUp">
                                                                    <div className="group-form">
                                                                        <div
                                                                            onClick={toggleNiceSelect}
                                                                            className={`nice-select border-radius-1 ${openNiceSelect ? "open" : ""}`}
                                                                            tabIndex={0}
                                                                        >
                                                                            <span className="current open ">Type</span>
                                                                            <ul className="list style-radio">
                                                                                <li data-value="" className="option">
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
                                                                    </div>
                                                                    <div className="group-form">
                                                                        <div className="button-submit">
                                                                            <button className="" type="submit">
                                                                                Search
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="widget-content-inner">
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
                        <section className="tf-section flat-explore">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">Explore Our Properties</h2>
                                            <div className="text wow fadeInUp">
                                                Based on your view history
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="wrap">
                                            <div className="cities-item style-3 wow fadeInUp">
                                                <img src="/assets/images/house/our-properties-1.jpg" alt="" />
                                                <div className="content">
                                                    <h4>Town House</h4>
                                                    <p>17 Properties</p>
                                                </div>
                                                <a href="property-map-v1.html" className="button-arrow-right">
                                                    <i className="icon-arrow-right-add" />
                                                </a>
                                            </div>
                                            <div
                                                className="cities-item style-3 wow fadeInUp"
                                                data-wow-delay="0.1s"
                                            >
                                                <img src="/assets/images/house/our-properties-2.jpg" alt="" />
                                                <div className="content">
                                                    <h4>Modern Villa</h4>
                                                    <p>17 Properties</p>
                                                </div>
                                                <a href="property-map-v1.html" className="button-arrow-right">
                                                    <i className="icon-arrow-right-add" />
                                                </a>
                                            </div>
                                            <div
                                                className="cities-item style-3 wow fadeInUp"
                                                data-wow-delay="0.15s"
                                            >
                                                <img src="/assets/images/house/our-properties-3.jpg" alt="" />
                                                <div className="content">
                                                    <h4>Apartment</h4>
                                                    <p>17 Properties</p>
                                                </div>
                                                <a href="property-map-v1.html" className="button-arrow-right">
                                                    <i className="icon-arrow-right-add" />
                                                </a>
                                            </div>
                                            <div
                                                className="cities-item style-3 wow fadeInUp"
                                                data-wow-delay="0.2s"
                                            >
                                                <img src="/assets/images/house/our-properties-4.jpg" alt="" />
                                                <div className="content">
                                                    <h4>Single Family</h4>
                                                    <p>17 Properties</p>
                                                </div>
                                                <a href="property-map-v1.html" className="button-arrow-right">
                                                    <i className="icon-arrow-right-add" />
                                                </a>
                                            </div>
                                            <div
                                                className="cities-item style-3 wow fadeInUp"
                                                data-wow-delay="0.25s"
                                            >
                                                <img src="/assets/images/house/our-properties-5.jpg" alt="" />
                                                <div className="content">
                                                    <h4>Office</h4>
                                                    <p>17 Properties</p>
                                                </div>
                                                <a href="property-map-v1.html" className="button-arrow-right">
                                                    <i className="icon-arrow-right-add" />
                                                </a>
                                            </div>
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
                                                Based on your view history
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter">
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
                                                Based on your view history
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">

                                        <Swiper
                                            className='swiper-container slider-discover padding-bottom-80 pagination-style-2'
                                            slidesPerView={3}
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
                                                  slidesPerView: 3,
                                                  spaceBetween: 40,
                                                },
                                              }}
                                        >
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="box-dream style-2 wow fadeInUp">
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
                                                                className='swiper-container slider-box-dream arrow-style-1 pagination-style-1'
                                                                slidesPerView={1}

                                                                modules={[Pagination, A11y, Navigation]}
                                                                navigation
                                                                pagination={{ clickable: true }}

                                                            >

                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/home-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/home-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/home-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/home-4.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                            </Swiper>
                                                            <div className="swiper-pagination box-dream-pagination" />

                                                        </div>
                                                        <div className="content">
                                                            <div className="head">
                                                                <div className="title">
                                                                    <a href="property-single-v1.html">Archer House</a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="box-dream style-2 wow fadeInUp"
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/home-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/home-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/home-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/home-4.jpg"
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
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-wrapper">


                                                    <div className="swiper-slide">
                                                        <div
                                                            className="box-dream style-2 wow fadeInUp"
                                                            data-wow-delay="0.15s"
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
                                                                            <div className="w-full">
                                                                                <img
                                                                                    className="w-full"
                                                                                    src="/assets/images/house/home-3.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <div className="swiper-slide">
                                                                            <div className="w-full">
                                                                                <img
                                                                                    className="w-full"
                                                                                    src="/assets/images/house/home-1.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <div className="swiper-slide">
                                                                            <div className="w-full">
                                                                                <img
                                                                                    className="w-full"
                                                                                    src="/assets/images/house/home-2.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <div className="swiper-slide">
                                                                            <div className="w-full">
                                                                                <img
                                                                                    className="w-full"
                                                                                    src="/assets/images/house/home-4.jpg"
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
                                                                            Home Pitt Street
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="location">
                                                                    <div className="icon">
                                                                        <i className="flaticon-location" />
                                                                    </div>
                                                                    <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                                </div>
                                                                <div className="bot">
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
                                                                    <div className="price">$815,000</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-wrapper">


                                                    <div className="swiper-slide">
                                                        <div
                                                            className="box-dream style-2 wow fadeInUp"
                                                            data-wow-delay="0.15s"
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
                                                                            <div className="w-full">
                                                                                <img
                                                                                    className="w-full"
                                                                                    src="/assets/images/house/home-3.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <div className="swiper-slide">
                                                                            <div className="w-full">
                                                                                <img
                                                                                    className="w-full"
                                                                                    src="/assets/images/house/home-1.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <div className="swiper-slide">
                                                                            <div className="w-full">
                                                                                <img
                                                                                    className="w-full"
                                                                                    src="/assets/images/house/home-2.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <div className="swiper-slide">
                                                                            <div className="w-full">
                                                                                <img
                                                                                    className="w-full"
                                                                                    src="/assets/images/house/home-4.jpg"
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
                                                                            Home Pitt Street
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="location">
                                                                    <div className="icon">
                                                                        <i className="flaticon-location" />
                                                                    </div>
                                                                    <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                                </div>
                                                                <div className="bot">
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
                                                                    <div className="price">$815,000</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </SwiperSlide>


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
                                            <h2 className="wow fadeInUp">Explore Cities</h2>
                                            <div className="text wow fadeInUp">
                                                Based on your view history
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
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div className="cities-item style-1 wow fadeInUp">
                                                            <div className="image">
                                                                <img src="/assets/images/image-box/cities-1.jpg" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <p>13 Properties</p>
                                                                <h4>New York</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div
                                                            className="cities-item style-1 wow fadeInUp"
                                                            data-wow-delay="0.1s"
                                                        >
                                                            <div className="image">
                                                                <img src="/assets/images/image-box/cities-2.jpg" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <p>13 Properties</p>
                                                                <h4>Chicago</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div
                                                            className="cities-item style-1 wow fadeInUp"
                                                            data-wow-delay="0.15s"
                                                        >
                                                            <div className="image">
                                                                <img src="/assets/images/image-box/cities-3.jpg" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <p>13 Properties</p>
                                                                <h4>Los Angeles</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div
                                                            className="cities-item style-1 wow fadeInUp"
                                                            data-wow-delay="0.2s"
                                                        >
                                                            <div className="image">
                                                                <img src="/assets/images/image-box/cities-4.jpg" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <p>13 Properties</p>
                                                                <h4>Miami</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div
                                                            className="cities-item style-1 wow fadeInUp"
                                                            data-wow-delay="0.25s"
                                                        >
                                                            <div className="image">
                                                                <img src="/assets/images/image-box/cities-5.jpg" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <p>13 Properties</p>
                                                                <h4>Florida</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div
                                                            className="cities-item style-1 wow fadeInUp"
                                                            data-wow-delay="0.3s"
                                                        >
                                                            <div className="image">
                                                                <img src="/assets/images/image-box/cities-4.jpg" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <p>13 Properties</p>
                                                                <h4>Miami</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

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
                                                Based on your view history
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <Swiper
                                            className="swiper-container slider-recent-properties pagination-style-2"
                                            slidesPerView={3}
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
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="box-dream style-2 type-small wow fadeInUp">
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-4.jpg"
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
                                                                    <a href="property-single-v1.html">Archer House</a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="box-dream style-2 type-small wow fadeInUp"
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-4.jpg"
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
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="box-dream style-2 type-small wow fadeInUp"
                                                        data-wow-delay="0.15s"
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-4.jpg"
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
                                                                        Home Pitt Street
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="box-dream style-2 type-small wow fadeInUp"
                                                        data-wow-delay="0.2s"
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-4.jpg"
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
                                                                    <a href="property-single-v1.html">Archer House</a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="box-dream style-2 type-small">
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-4.jpg"
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
                                                                    <a href="property-single-v1.html">Archer House</a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="box-dream style-2 type-small">
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/rent-properties-4.jpg"
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
                                                                    <a href="property-single-v1.html">Archer House</a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
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
                                                Based on your view history
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
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="box-dream style-2 type-small wow fadeInUp">
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-4.jpg"
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
                                                                    <a href="property-single-v1.html">Archer House</a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="box-dream style-2 type-small wow fadeInUp"
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-4.jpg"
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
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="box-dream style-2 type-small wow fadeInUp"
                                                        data-wow-delay="0.15s"
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-4.jpg"
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
                                                                        Home Pitt Street
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="box-dream style-2 type-small wow fadeInUp"
                                                        data-wow-delay="0.2s"
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-4.jpg"
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
                                                                    <a href="property-single-v1.html">Archer House</a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="box-dream style-2 type-small">
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-4.jpg"
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
                                                                    <a href="property-single-v1.html">Archer House</a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="box-dream style-2 type-small">
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
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="swiper-slide">
                                                                        <div className="w-full">
                                                                            <img
                                                                                className="w-full"
                                                                                src="/assets/images/house/sale-properties-4.jpg"
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
                                                                    <a href="property-single-v1.html">Archer House</a>
                                                                </div>
                                                            </div>
                                                            <div className="location">
                                                                <div className="icon">
                                                                    <i className="flaticon-location" />
                                                                </div>
                                                                <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                                            </div>
                                                            <div className="bot">
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
                                                                <div className="price">$815,000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </SwiperSlide>
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
                                                Based on your view history
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
                                                    <a href="#" className="title">
                                                        Find Real Estate
                                                    </a>
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
                                                    <a href="#" className="title">
                                                        Meet Relator
                                                    </a>
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
                                                    <a href="#" className="title">
                                                        Take The Keys
                                                    </a>
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
                                <a
                                    href="#"
                                    className="tf-button-primary style-green m-auto wow fadeInUp"
                                >
                                    View Properties
                                    <i className="icon-arrow-right-add" />
                                </a>
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
                                            <a
                                                href="#"
                                                className="tf-button-primary style-green wow fadeInUp"
                                            >
                                                Learn More
                                                <i className="icon-arrow-right-add" />
                                            </a>
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
                                             
                                             autoplay={{delay:0,disableOnInteraction:false}}
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
                        <a href="#" className="btn-hide-modal" data-bs-dismiss="modal">
                            <i className="icon-close" />
                        </a>
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
                                    <a href="#" className="lost-password">
                                        Lost your password?
                                    </a>
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
                                <a
                                    href="#"
                                    className="btn-show-register"
                                    data-bs-dismiss="modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalregister"
                                >
                                    Register here
                                </a>
                            </div>
                            <ul className="wg-social-1">
                                <li>
                                    <a href="#">
                                        <i className="flaticon-google" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="flaticon-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="flaticon-facebook" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade modalCenter" id="modalregister">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content modal-sm">
                        <a href="#" className="btn-hide-modal" data-bs-dismiss="modal">
                            <i className="icon-close" />
                        </a>
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
                                <a
                                    href="#"
                                    className="btn-show-register"
                                    data-bs-dismiss="modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modallogin"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default HomePage