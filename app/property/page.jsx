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
  const [filters, setFilters] = React.useState({})
  const [totalData, setTotalData] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedstatus, setSelectedStatus] = React.useState({ id: 0, title: "All Status" })
  const [selectedTypes, setSelectedTypes] = React.useState({ id: 0, title: "All types" })
  const [cities, setCities] = React.useState([])

  const router = useRouter();
  const searchParams = useSearchParams()
  const status = searchParams.get("status")
  const type = searchParams.get("type")
 

  const handlePageChange = (page, offset) => {
    setCurrentPage(page.selected + 1);
    router.push(`/property?page=${page.selected + 1}`)
  };
  const handleStatus = (id, title) => {
    setSelectedStatus({ id: id, title: title })

  }
  const handleTypes = (id,title)=>{
    setSelectedTypes({id:id,title:title})
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
    getFilters()
    getTypes()
    getCities()
  }, [])


  const getProprties = async () => {
    try {
      const sorting = 1
      const body = new FormData()
      if (status !== null) {
        const filterStatus = filters.listing_status?.find((i) => i.title === status)
        setSelectedStatus({ id: filterStatus.id, title: filterStatus.title })
        body.append("listing_status", status !== null ? filterStatus.id : "")
      }
      if(type !==null){
        const filterType = filters.types.find((i)=>i.title===type)
        setSelectedTypes({id:filterType.id,title:filterType.title})
        body.append("listing_type", type !== null ? filterType.id : "")
      }
      body.append("sorting", sorting !== undefined ? sorting : 1)
      const data = await api.Post(`${url.PROPERTIES}?page=${currentPage}`, body)
      if (data) {
        setProperties(data.data.data)
        setTotalData(data.records_count)
      }

    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getProprties()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentPage, filters, status,type])

  const handleSearch = (e) => {
    e.preventDefault()
    const newParams = new URLSearchParams(searchParams.toString());
    if (selectedstatus.id !== 0){
       newParams.set("status", selectedstatus.title)   
    }else{
      newParams.delete("status")
    }
    if(selectedTypes.id !==0){
      newParams.set("type",selectedTypes.title)
    }else{
      newParams.delete("type")
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


      />
    </>

  )
}

export default Property