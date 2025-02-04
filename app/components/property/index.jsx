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
import { api } from '@/app/utils/api';
import { url } from '@/app/utils/urls';
const PropertyComponent = ({
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
  const [loading, setLoading] = React.useState(false)
  const [properties, setProperties] = React.useState([])
  const [types, setTypes] = React.useState([])
  const [agents, setAgents] = React.useState([])
  const [communities, setCommunities] = React.useState([])
  const [filterdCommunity, setFilterdCommunity] = React.useState([])
  const [selectedFeatures, setSelectedFeatures] = React.useState([])
  const [featuredProperties, setFeaturedProperties] = React.useState([])
  const [filters, setFilters] = React.useState({})
  const [totalData, setTotalData] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedstatus, setSelectedStatus] = React.useState({ id: 0, title: "All Status" })
  const [selectedTypes, setSelectedTypes] = React.useState({ id: 0, title: "All types" })
  const [selectedCity, setSelectedCity] = React.useState({ id: 0, title: "City" })
  const [selectedSorting, setSelectedSorting] = React.useState({ id: 1, title: "Default" })
  const [selectedCommunity, setSelectedCommunity] = React.useState({ id: 0, title: "All Communities" })
  const [selectedBed, setSelectedBed] = React.useState({ id: 0, title: "Any Number" })
  const [selectedBath, setSelectedBath] = React.useState({ id: 0, title: "Any Number" })
  const [cities, setCities] = React.useState([])
  const [minArea, setMinArea] = React.useState("")
  const [maxArea, setMaxArea] = React.useState("")
  const [maxPrice, setMaxPrice] = React.useState("")
  const [minPrice, setMinPrice] = React.useState("")
  const [Keyword, setKeyword] = React.useState("")
  const status = searchParams.get("status")
  const type = searchParams.get("type")
  const city = searchParams.get("city")
  const sort = searchParams.get("sort")
  const page = searchParams.get("page")
  const community = searchParams.get("community")
  const bedrooms = searchParams.get("bedrooms")
  const bathrooms = searchParams.get("bathrooms")
  const minarea = searchParams.get("minarea")
  const maxarea = searchParams.get("maxarea")
  const minprice = searchParams.get("minprice")
  const maxprice = searchParams.get("maxprice")
  const features = searchParams.get("features")
  const title = searchParams.get("title")


  const handlePageChange = (page, offset) => {

    setCurrentPage(page.selected + 1);
    const newParams = new URLSearchParams(searchParams.toString());
    if (currentPage > 0) {
      newParams.set("page", page.selected + 1)
      router.push(`/property?${newParams.toString()}`)
    } else {
      newParams.delete("page")
    }

  };

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
    } else if (name === "Keyword") {
      setKeyword(value)
    }
  }

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
  const handleSorting = (id, title) => {
    setSelectedSorting({ id: id, title: title })
  }

  const getCities = async () => {
    try {

      const data = await api.Get(url.CITIES)
      if (data) {
        setCities(data.data)
      }

    } catch (error) {
      console.log(error)
    }
  }
  const getCommunity = async () => {
    try {

      const data = await api.Get(url.COMMUNITY)
      if (data) {
        setCommunities(data.data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const getAgents = async () => {
    try {
      const data = await api.Get(url.AGENTS_3)
      if (data) {
        setAgents(data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getTypes = async () => {
    try {
      const data = await api.Get(url.PROPERTY_TYPES)
      if (data) {
        setTypes(data.data)
      }

    } catch (error) {
      console.log(error)
    }
  }
  const getFilters = async () => {
    try {
      const data = await api.Get(url.FILTERS)
      if (data) {
        setFilters(data.data)

      }
    } catch (error) {
      console.log(error)
    }
  }
  const getFeaturedProperties = async () => {
    try {
      const data = await api.Get(url.FEATUREDPROPERTIES)
      if (data) {
        setFeaturedProperties(data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    if (selectedCity.id > 0) {
      const filterd = communities.filter((i) => i.city_id === selectedCity.id)
      setFilterdCommunity(filterd)
      setSelectedCommunity({ id: 0, title: "All Community" })
    } else {
      setFilterdCommunity(communities)
    }
  }, [selectedCity.id, communities])


  React.useEffect(() => {

    getFilters()
    getTypes()
    getCities()
    getAgents()
    getCommunity()
    getFeaturedProperties()

  }, [])


  const getProprties = async () => {
    try {
      setLoading(true)
      const body = new FormData()
      if (page !== null) {
        setCurrentPage(Number(page))
      } else {
        setCurrentPage(1)
      }
      if (status !== null) {
        const filterStatus = filters.listing_status?.find((i) => i.title === status)
        setSelectedStatus({ id: filterStatus.id, title: filterStatus.title })
        body.append("listing_status", status !== null ? filterStatus.id : "")
      }
      if (type !== null && Object.keys(filters).length > 0) {
        const filterType = filters?.types.find((i) => i.title === type)
        setSelectedTypes({ id: filterType.id, title: filterType.title })
        body.append("type_id", type !== null ? filterType.id : "")
      }
      if (city !== null) {
        const filterCity = cities.find((i) => i.name === city)
        setSelectedCity({ id: filterCity.id, title: filterCity.name })
        body.append("city_id", city !== null ? filterCity.id : "")
      }
      if (sort !== null) {
        const filterSort = filters.sorting.find((i) => i.title === sort)
        setSelectedSorting({ id: filterSort.id, title: filterSort.title })
        body.append("sorting", sort !== null ? filterSort.id : 1)
      }
      if (community !== null) {
        const filterCommunity = communities.find((i) => i.title === community)
        setSelectedCommunity({ id: filterCommunity.id, title: filterCommunity.title })
        body.append("neighborhood_id", community !== null ? filterCommunity.id : "")
      }
      if (bedrooms !== null) {
        const filterBedroom = filters.min_bed.find((i) => i.title === bedrooms)
        setSelectedBed({ id: filterBedroom.id, title: filterBedroom.title })
        body.append("min_bed", bedrooms !== null ? filterBedroom.id : "")
      }
      if (bathrooms !== null) {
        const filterBathroom = filters.min_bath.find((i) => i.title === bathrooms)
        setSelectedBath({ id: filterBathroom.id, title: filterBathroom.title })
        body.append("min_bath", bathrooms !== null ? filterBathroom.id : "")
      }

      if (minarea !== null) {
        setMinArea(minarea)
        body.append("min_size", minarea !== null ? minarea : "")
      }
      if (maxarea !== null) {
        setMaxArea(maxarea)
        body.append("max_size", maxarea !== null ? maxarea : "")
      }
      if (minprice !== null) {
        setMinPrice(minprice)
        body.append("min_price", minprice !== null ? minprice : "")
      }
      if (maxprice !== null) {
        setMaxPrice(maxprice)
        body.append("max_price", maxprice !== null ? maxprice : "")
      }
      if (features !== null) {
        const featureArry = features.split(",").map((i) => (i.trim()))
        const getfeatures = Object.keys(filters?.features || {}).flatMap((category) =>
          filters.features[category].filter((item) => featureArry.includes(item.title))
        );
        setSelectedFeatures(getfeatures)
        const ids = getfeatures.map((i) => i.id)
        body.append("features_id_array", JSON.stringify(ids))
      }
      if (title !== null) {
        setKeyword(title)
        body.append("title", title)
      }


      const data = await api.Post(`${url.PROPERTIES}?page=${currentPage}`, body)
      if (data) {
        setProperties(data.data.data)
        setTotalData(data.data.total)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getProprties()
  }, [filters, status, type, sort, page, city, community, bedrooms, bathrooms, minarea, maxarea, minprice, maxprice, features, title])

  const handleSearch = (e) => {
    e.preventDefault()

    const newParams = new URLSearchParams(searchParams.toString());
    if (page !== null) {
      setCurrentPage(1)
      newParams.delete("page")
    }
    if (selectedstatus.id !== 0) {
      newParams.set("status", selectedstatus.title)
    } else {
      newParams.delete("status")
    }
    if (selectedTypes.id !== 0) {
      newParams.set("type", selectedTypes.title)
    } else {
      newParams.delete("type")
    }
    if (selectedCity.id !== 0) {
      newParams.set("city", selectedCity.title)
    } else {
      newParams.delete("city")
    }
    if (selectedCommunity.id !== 0) {
      newParams.set("community", selectedCommunity.title)
    } else {
      newParams.delete("community")
    }
    if (selectedBed.id !== 0) {
      newParams.set("bedrooms", selectedBed.title)
    } else {
      newParams.delete("bedrooms")
    }
    if (selectedBath.id !== 0) {
      newParams.set("bathrooms", selectedBath.title)
    } else {
      newParams.delete("bathrooms")
    }
    if (minArea.length > 0) {
      newParams.set("minarea", minArea)
    } else {
      newParams.delete("minarea")
    }
    if (maxArea.length > 0) {
      newParams.set("maxarea", maxArea)
    } else {
      newParams.delete("maxarea")
    }
    if (minPrice.length > 0) {
      newParams.set("minprice", minPrice)
    } else {
      newParams.delete("minprice")
    }
    if (maxPrice.length > 0) {
      newParams.set("maxprice", maxPrice)
    } else {
      newParams.delete("maxprice")
    }
    if (selectedFeatures.length > 0) {
      const feature = selectedFeatures.map((i) => i.title)
      newParams.set("features", feature)
    } else {
      newParams.delete("features")
    }
    if (Keyword.length > 0) {
      newParams.set("title", Keyword)
    } else {
      newParams.delete("title")
    }
    router.push(`/property?${newParams.toString()}`)
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

  const handleClearSearch = (e)=>{
    e.preventDefault()
    setSelectedStatus({ id: 0, title: "All Status" });
    setSelectedTypes({ id: 0, title: "All types" });
    setSelectedCity({ id: 0, title: "City" });
    setSelectedSorting({ id: 1, title: "Default" });
    setSelectedCommunity({ id: 0, title: "All Communities" });
    setSelectedBed({ id: 0, title: "Any Number" });
    setSelectedBath({ id: 0, title: "Any Number" });
    setMinArea("");
    setMaxArea("");
    setMinPrice("");
    setMaxPrice("");
    setKeyword("");
    setSelectedFeatures([]);
    setCurrentPage(1); // Reset to the first page
    router.push("/property")

  }


  return (
    <>
      <div id="wrapper">
        {/* #page */}
        <div id="page" className="">
          <Header3 />
          {/* main-content */}
          <div className="main-content px-20">

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
                            <div className="divider-1" />
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
                                  Filters
                                </div>
                                <div
                                  className={`open-filter filter-no-content ${openFilter ? "active" : ""
                                    }  `}
                                  id="a1"
                                >
                                  <div  >
                                   
                                    <div className="d-flex justify-content-end mb-4 " >
                                    <div className="group-form ">
                                      <div className="button-submit">
                                        <button className="d-flex align-items-center" onClick={handleClearSearch} style={{padding: "12px 19px"}} >
                                        <i className="flaticon-close mx-2" />
                                          Clear Search
                                        </button>
                                      </div>
                                    </div>
                                    </div>
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
                                            {selectedstatus.title}
                                          </span>
                                          <ul className="list style-radio">
                                            <li
                                              data-value="For Sale"
                                              className={`option ${selectedstatus.id === 0
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
                                                    className={`option ${selectedstatus.id === item.id
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
                                            {filterdCommunity.map((item) => (
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
                                                            checked={selectedFeatures.some(
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
                          {totalData} results
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
                                <div className="content"  >
                                  <div style={{ minHeight: 120 }} >
                                    <div className="head">
                                      <div className="title"  >
                                        <Link href={`/property/${item.slug}`}>
                                          {item.title}
                                        </Link>
                                      </div>
                                      <div className="price">
                                        ${item.price.toLocaleString()} {item.listing_type === "rent" ? `/${item.rent_cycle}` : null}
                                      </div>
                                    </div>

                                    <div className="location">
                                      <div className="icon">
                                        <i className="flaticon-location" />
                                      </div>
                                      <p style={{ fontSize: 13 }}>{item.address}</p>
                                    </div>
                                  </div>
                                  <div className="icon-box">
                                    <div className="item">
                                      <i className="flaticon-hotel" />
                                      <p style={{ fontSize: 13,gap:5 }} className="d-flex" >{item.bedrooms} <span className="" > Beds </span></p>
                                    </div>
                                    <div className="item">
                                      <i className="flaticon-bath-tub" />
                                      <p style={{ fontSize: 13,gap:5 }} className="d-flex" >{item.bathrooms} <span className="" > Baths</span></p>
                                    </div>
                                    <div className="item">
                                      <i className="flaticon-minus-front" />

                                      {/* <p style={{fontSize:13}}>
                                        {!isSquareMeter
                                          ? item.size_mt + " Sq M"
                                          : item.size + " Sq ft"}
                                      </p> */}
                                      <p style={{ fontSize: 13,gap:5 }} className="d-flex" >{item.size + "sqft"} / {item.size_mt + "sqm"}</p>
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
                    {totalData >= 6 && (
                      <CustomPagination
                        itemsPerPage={6}
                        onPageChange={handlePageChange}
                        totalData={totalData}
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
                                if (page !== null) {
                                  newParams.delete("page")
                                }
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
                          {filterdCommunity.map((item) => (
                            <li
                              key={item.id}
                              className={` ${selectedCommunity.id === item.id ? "active" : ""
                                } `}
                              onClick={() => {
                                handleCommunity(item.id, item.title);
                                const newParams = new URLSearchParams(
                                  searchParams.toString()
                                );
                                if (page !== null) {
                                  newParams.delete("page")
                                }
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
                                <p>{item.designation}</p>
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
