'use client';

import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { api } from '@/app/utils/api';
import { url } from '@/app/utils/urls';
import { useRouter, useSearchParams } from 'next/navigation';
const PropertyComponent = dynamic(() => import("@/app/components/property"))

const Property = () => {
  const [loading, setLoading] = React.useState(true)
  const [properties, setProperties] = React.useState([])
  const [types, setTypes] = React.useState([])
  const [agents, setAgents] = React.useState([])
  const [filters, setFilters] = React.useState({})
  const [totalData, setTotalData] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(0);
  const [selectedstatus, setSelectedStatus] = React.useState({ id: 0, title: "All Status" })
  const [selectedTypes, setSelectedTypes] = React.useState({ id: 0, title: "All types" })
  const [selectedCity, setSelectedCity] = React.useState({ id: 0, title: "City" })
  const [selectedSorting, setSelectedSorting] = React.useState({ id: 1, title: "Default" })
  const [cities, setCities] = React.useState([])

  const router = useRouter();
  const searchParams = useSearchParams()
  const status = searchParams.get("status")
  const type = searchParams.get("type")
  const city = searchParams.get("city")
  const sort = searchParams.get("sort")
  const page = searchParams.get("page")


  const handlePageChange = (page, offset) => {
    console.log(currentPage)
    setCurrentPage(page.selected +1 );
    const newParams = new URLSearchParams(searchParams.toString());
    if(currentPage>0){
      newParams.set("page", page.selected +1 )
      router.push(`/property?${newParams.toString()}`)
    }else{
      newParams.delete("page")
    }
   
  };
  const handleStatus = (id, title) => {
    setSelectedStatus({ id: id, title: title })

  }
  const handleTypes = (id, title) => {
    setSelectedTypes({ id: id, title: title })
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

  const getAgents = async ()=>{
    try {
      const data = await api.Get(url.AGENTS_3)
      if(data){
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


  React.useEffect(() => {
    if(page!==null){
      setCurrentPage(Number(page))
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page",page )
      router.push(`/property?${newParams.toString()}`)
     }
    getFilters()
    getTypes()
    getCities()
    getAgents()

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
      if (type !== null) {
        const filterType = filters.types.find((i) => i.title === type)
        setSelectedTypes({ id: filterType.id, title: filterType.title })
        body.append("listing_type", type !== null ? filterType.id : "")
      }
      if (city !== null) {
        const filterCity = cities.find((i) => i.name === city)
        setSelectedCity({ id: filterCity.id, title: filterCity.name })
        body.append("listing_type", city !== null ? filterCity.id : "")
      }
      if (sort !== null) {
        const filterSort = filters.sorting.find((i) => i.title === sort)
        setSelectedSorting({ id: filterSort.id, title: filterSort.title })
        body.append("sorting", sort !== null ? filterSort.id : 1)
      }

      const data = await api.Post(`${url.PROPERTIES}?page=${currentPage}`, body)
      if (data) {
        setProperties(data.data.data)
        setTotalData(data.records_count)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getProprties()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentPage, filters, status, type, sort,page])

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
    router.push(`/property?${newParams.toString()}`)
  }

  return (
    <>
    {loading && (
        <div className="preload preload-container">
        <div className="middle" />
      </div>
    )}
    

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


      />
    </>

  )
}

export default Property