import React from 'react'
import Header3 from '../header3'
import Link from 'next/link'
import { Accordion } from 'react-bootstrap'
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
import { useUnitContext } from "@/app/utils/UnitContext";
import Footer from '../footer';
import { useRouter } from 'next/navigation';
import Loader from '../loader/Loader';
import Map from '../map';
const CommunityComponent = ({
    community = {},
    city = {},
    loading = true
}) => {
    const { isSquareMeter, toggleUnit } = useUnitContext();
    const router = useRouter()
    return (
        <div>
            <div id="page" className="">
                {/* header */}
                <Header3 />
                {/* /header */}
                {/* main-content */}
                {loading ? <Loader /> :
                    <div className="main-content">
                        {/* flat-title */}
                        <div className="flat-title">
                            <div className="cl-container full">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="content">
                                            <h2>{Object.keys(community).length > 0 ? community.neighborhood.title : null}</h2>
                                            <ul className="breadcrumbs">
                                                <li>
                                                    <Link href="/">Home</Link>
                                                </li>
                                                <li>/</li>
                                                <li>{Object.keys(community).length > 0 ? community.neighborhood.title : null}</li>
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
                                    <div className="col-lg-3">
                                        <div className="sidebar">

                                            <div className="sidebar-item sidebar-categories no-bg">
                                                <div className="sidebar-title">Communities</div>
                                                <ul>
                                                    {Object.keys(community).length > 0 ? community.related_neighborhoods.map((item) => (
                                                        <li
                                                            key={item.id}


                                                        >
                                                            <Link href={`/community/${item.slug}`} >{item.title}</Link>
                                                        </li>
                                                    )) : null}
                                                </ul>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="col-lg-9">

                                        <div className="row">
                                            <div className='col-12 col-md-12 ' >
                                                {Object.keys(community).length > 0 ?
                                                    <>
                                                        <div className='d-flex flex-column ' >
                                                            <img src={community.neighborhood.banner} alt="" style={{ maxHeight: "400px", objectFit: "cover" }} />
                                                        </div>

                                                    </>
                                                    : null}
                                            </div>
                                            <div className='col-12 col-md-12' >
                                                {Object.keys(community).length > 0 ?
                                                    <>
                                                        <div className='d-flex  ' >
                                                        
                                                            <div className='mt-5' dangerouslySetInnerHTML={{ __html: community.neighborhood.description }} />
                                                        </div>
                                                    </>
                                                    : null}
                                            </div>

                                        </div>
                                        <div className='mt-5' >
                                            {Object.keys(community.properties_by_type).map((type, typeIndex) => (
                                                <Accordion defaultActiveKey="0" key={typeIndex}  >
                                                    <Accordion.Item eventKey={typeIndex.toString()}>
                                                        <Accordion.Header>
                                                            <p>{type}</p>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="row">
                                                                {community.properties_by_type[type].properties.map((property, propertyIndex) => {
                                                                    return (
                                                                        <div className="col-xl-6" key={property.id}>
                                                                            <div className="box-dream has-border wow fadeInUp">
                                                                                <div className="image">
                                                                                    <div className="list-tags">
                                                                                        <div className="tags-item for-sell">
                                                                                            {property.listing_status}
                                                                                        </div>
                                                                                        {property.is_featured && (
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
                                                                                        {property.gallery.map((g, i) => (
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
                                                                                            <Link href={`/property/${property.slug}`}>
                                                                                                {property.title}
                                                                                            </Link>
                                                                                        </div>
                                                                                        <div className="price">
                                                                                            ${property.price.toLocaleString()}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="location">
                                                                                        <div className="icon">
                                                                                            <i className="flaticon-location" />
                                                                                        </div>
                                                                                        <p>{property.address}</p>
                                                                                    </div>
                                                                                    <div className="icon-box">
                                                                                        <div className="item">
                                                                                            <i className="flaticon-hotel" />
                                                                                            <p>{property.bedrooms} Beds</p>
                                                                                        </div>
                                                                                        <div className="item">
                                                                                            <i className="flaticon-bath-tub" />
                                                                                            <p>{property.bathrooms} Baths</p>
                                                                                        </div>
                                                                                        <div className="item">
                                                                                            <i className="flaticon-minus-front" />
                                                                                            {/* <p>
                                                                                                {!isSquareMeter
                                                                                                    ? property.size_mt + " Sq M"
                                                                                                    : property.size + " Sq ft"}
                                                                                            </p> */}
                                                                                            <p>{property.size + "sqft"}/{property.size_mt + "sqm"}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    );
                                                                })}
                                                                {community.properties_by_type[type].has_more && (
                                                                    <div className='d-flex justify-center ' >
                                                                        <button className="tf-button-default" onClick={() => {
                                                                            router.push(`/property?type=${type}&page=2`)
                                                                        }} >
                                                                            Show More
                                                                        </button>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            ))}




                                        </div>
                                        {Object.keys(community).length > 0 && (
                                    <div className='mt-5 col-12 col-md-12 ' >
                                        <Map
                                            lattitude={Number(community.neighborhood.latitude)}
                                            longitude={Number(community.neighborhood.longitude)}
                                        />
                                    </div>
                                )}
                                    </div>
                                            


                                </div>
                               

                            </div>
                        </div>
                        {/* /property-list-wrap */}
                    </div>
                }
                {/* /main-content */}
                {/* footer */}
                <Footer />
                {/* /footer */}
            </div>
        </div>
    )
}

export default CommunityComponent