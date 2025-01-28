"use client";
import React from 'react'
import dynamic from 'next/dynamic'
const CityComponent = dynamic(() => import('@/app/components/city'), { ssr: false })
import { url } from '@/app/utils/urls';
import { api } from '@/app/utils/api';
import { useParams } from 'next/navigation';
const CityProperties = () => {
    const [loading, setLoading] = React.useState(true)
    const [city, setCity] = React.useState({})
    const { slug } = useParams()
    const getCity = async () => {
        try {
            setLoading(true)
            const data = await api.Get(`${url.CITY_PAGE}/${slug}`)
            if (data) {
                setCity(data.response)
            }
            setLoading(false)
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    React.useEffect(() => {
        getCity()
    }
        , [])

    return (
        <div>
            <CityComponent 
            city={city}
            loading={loading}

            />
        </div>
    )
}

export default CityProperties