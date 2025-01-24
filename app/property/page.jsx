'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, Suspense } from 'react';
import { api } from '@/app/utils/api';
import { url } from '@/app/utils/urls';
import { useRouter, useSearchParams } from 'next/navigation';
const PropertyComponent = dynamic(() => import("@/app/components/property"),{ssr:false})
const PropertyPage = () => {
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
  const [currentPage, setCurrentPage] = React.useState(0);
  const [selectedstatus, setSelectedStatus] = React.useState({ id: 0, title: "All Status" })
  const [selectedTypes, setSelectedTypes] = React.useState({ id: 0, title: "All types" })
  const [selectedCity, setSelectedCity] = React.useState({ id: 0, title: "City" })
  const [selectedSorting, setSelectedSorting] = React.useState({ id: 1, title: "Default" })
  const [selectedCommunity, setSelectedCommunity] = React.useState({ id: 0, title: "All Community" })
  const [selectedBed, setSelectedBed] = React.useState({ id: 0, title: "Any No of Bedrooms" })
  const [selectedBath, setSelectedBath] = React.useState({ id: 0, title: "Any No of Bathrooms" })
  const [cities, setCities] = React.useState([])
  const [minArea, setMinArea] = React.useState("")
  const [maxArea, setMaxArea] = React.useState("")
  const [maxPrice, setMaxPrice] = React.useState("")
  const [minPrice, setMinPrice] = React.useState("")
  const [Keyword, setKeyword] = React.useState("")
  const router = useRouter();
  const searchParams = useSearchParams()
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
    if (page !== null) {
      setCurrentPage(Number(page))
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page", page)
      router.push(`/property?${newParams.toString()}`)
    }
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
    // const section = document.getElementById("property-list")
    // if(section){

    //   section.scrollIntoView({ behavior: "smooth" })
    // }
   
  }, [currentPage, filters, status, type, sort, page, city, community, bedrooms, bathrooms, minarea, maxarea, minprice, maxprice, features, title])

  const handleSearch = (e) => {
    e.preventDefault()
    const newParams = new URLSearchParams(searchParams.toString());
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

  return (
    <>
      
    

        <PropertyComponent
          properties={properties}
          types={types}
          filters={filters}
          totalProperties={totalData}
          handlePageChange={handlePageChange}
          handleStatus={handleStatus}
          cities={cities}
          status={selectedstatus}
          handleSearch={handleSearch}
          selectedTypes={selectedTypes}
          handleTypes={handleTypes}
          selectedCity={selectedCity}
          handleCity={handleCity}
          selectedSorting={selectedSorting}
          handleSorting={handleSorting}
          agents={agents}
          currentPage={currentPage}
          community={filterdCommunity}
          selectedCommunity={selectedCommunity}
          handleCommunity={handleCommunity}
          handleBed={handleBed}
          handleBath={handleBath}
          selectedBath={selectedBath}
          selectedBed={selectedBed}
          handleInputChange={handleInputChange}
          minArea={minArea}
          maxArea={maxArea}
          minPrice={minPrice}
          maxPrice={maxPrice}
          features={selectedFeatures}
          hanldeFeatures={hanldeFeatures}
          Keyword={Keyword}
          featuredProperties={featuredProperties}
          loading={loading}

        />
     </>
    
  )
}

const Property = () => {  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertyPage />
    </Suspense>
  )
}
export default Property