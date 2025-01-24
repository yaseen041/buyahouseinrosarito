'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { url } from "@/app/utils/urls"
import { api } from "@/app/utils/api"
import { useSearchParams,useRouter } from 'next/navigation';

const HomeComponent = dynamic(() => import("@/app/components/home"), { ssr: false })

const Home = () => {
    const [loading, setLoading] = React.useState(true)
    const [types, setTypes] = React.useState([])
    const [cities, setCities] = React.useState([])
    const [recentForRent, setRecentForRent] = React.useState([])
    const [recentForSale, setRecentForSale] = React.useState([])
    const [communities, setCommunities] = React.useState([])
    const [selectedFeatures, setSelectedFeatures] = React.useState([])
    const [BestDeals, setBestDeals] = React.useState([])
    const [filters, setFilters] = React.useState({})
    const [selectedstatus, setSelectedStatus] = React.useState({ id: 0, title: "All Status" })
    const [selectedTypes, setSelectedTypes] = React.useState({ id: 0, title: "All types" })
    const [selectedCity, setSelectedCity] = React.useState({ id: 0, title: "City" })
    const [selectedSorting, setSelectedSorting] = React.useState({ id: 1, title: "Default" })
    const [selectedCommunity, setSelectedCommunity] = React.useState({ id: 0, title: "All Community" })
    const [selectedBed, setSelectedBed] = React.useState({ id: 0, title: "Any No of Bedrooms" })
    const [selectedBath, setSelectedBath] = React.useState({ id: 0, title: "Any No of Bathrooms" })
    const [minArea, setMinArea] = React.useState("")
    const [maxArea, setMaxArea] = React.useState("")
    const [minPrice, setMinPrice] = React.useState("")
    const [maxPrice, setMaxPrice] = React.useState("")
    const [Keyword, setKeyword] = React.useState("")
    const searchParams = useSearchParams();
    const router = useRouter();
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
        } else if (name === "keyword") {
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
   const getBestDeals = async () => {
        try {
          const data = await api.Get(url.BESTDEALS)
          if (data) {
            setBestDeals(data.data)
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
        getCommunity()
        getFilters()
        getBestDeals()
       


    }, [])

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
          const feature = selectedFeatures.map((i)=>i.title)
          newParams.set("features", feature)
        } else {
          newParams.delete("features")
        }
        if(Keyword.length>0){
          newParams.set("title",Keyword)
        }else{
          newParams.delete("title")
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


            <HomeComponent
                types={types}
                cities={cities}
                recentForRent={recentForRent}
                recentForSale={recentForSale}
                status={selectedstatus}
                selectedTypes={selectedTypes}
                selectedCity={selectedCity}
                selectedSorting={selectedSorting}
                selectedCommunity={selectedCommunity}
                selectedBed={selectedBed}
                selectedBath={selectedBath}
                selectedFeatures={selectedFeatures}
                handleInputChange={handleInputChange}
                handleStatus={handleStatus}
                hanldeFeatures={hanldeFeatures}
                handleCommunity={handleCommunity}
                handleTypes={handleTypes}
                handleBed={handleBed}
                handleBath={handleBath}
                handleCity={handleCity}
                community={communities}
                filters={filters}
                handleSearch={handleSearch}
                Keyword={Keyword}
                maxArea={maxArea}
                minArea={minArea}
                maxPrice={maxPrice}
                minPrice={minPrice}
                BestDeals={BestDeals}
            />

        </>

    )
}

const HomePage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Home />
        </Suspense>
    )
}
export default HomePage