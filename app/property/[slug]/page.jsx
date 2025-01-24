"use client";
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { api } from '@/app/utils/api';
import { url } from '@/app/utils/urls';
import { useParams } from 'next/navigation';
import PropertyDetail from '@/app/components/propertyDetail';

const Detail = () => {
  const [loading, setLoading] = React.useState(true)
  const [property, setProperty] = React.useState({})
  const [agent, setAgent] = React.useState({})
  const params = useParams()
  const { slug } = params;
  console.log(slug)

  const getProertyDetail = async () => {
    try {
      const data = await api.Get(`${url.PROPERTY}/${slug}`)
      if (data) {
        setProperty(data.data)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const getAgent = async () => {
    try {
      const data = await api.Get(`${url.AGENT}/${property.agent}`)
      if (data) {
        setAgent(data.data)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getProertyDetail()

  }, [slug])
  React.useEffect(() => {
    getAgent()
  }, [property])

  return (
    <>
     
        <PropertyDetail
          property={property}
          agent={agent}
          loading={loading}
        />
     
    
     </>
  )
}
const PropertyDetailPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Detail />
    </Suspense>
  )
}

export default PropertyDetailPage
