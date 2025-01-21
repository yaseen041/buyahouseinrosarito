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
            console.log(data)
            if (data) {
                setCities(data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getTypes()
        getCities()
    }, [])

    return (
        <>
            <HomeComponent
                types={types}
                cities={cities}

            />

        </>

    )
}

export default HomePage