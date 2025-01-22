'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { url } from "@/app/utils/urls"
import { api } from "@/app/utils/api"
const HomeComponent = dynamic(() => import("@/app/components/home"), { ssr: false })


const HomePage = () => {
    const [loading, setLoading] = React.useState(true)
    const [types, setTypes] = React.useState([])
    const [cities, setCities] = React.useState([])
    const [recentForRent, setRecentForRent] = React.useState([])
    const [recentForSale, setRecentForSale] = React.useState([])
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
    const GetRecentForRent = async () => {
        try {
            const data = await api.Get(url.RECENT_FOR_RENT)
            if (data) {
                setRecentForRent(data.data)
                console.log(data)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    const GetRecentForSale = async () => {
        try {
            const data = await api.Get(url.RECENT_FOR_SALE)
            if (data) {
                setRecentForSale(data.data)
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        getTypes()
        getCities()
        GetRecentForRent()
        GetRecentForSale()

    }, [])

    return (
        <>
            {loading && (
                <div className="preload preload-container">
                    <div className="middle" />
                </div>
            )}


            <HomeComponent
                types={types}
                cities={cities}
                recentForRent={recentForRent}
                recentForSale={recentForSale}

            />

        </>

    )
}

export default HomePage