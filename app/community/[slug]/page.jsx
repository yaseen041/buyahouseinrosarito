"use client";
import React from 'react'
import dynamic from 'next/dynamic'
const CommunityComponent = dynamic(()=>import("@/app/components/community"),{ssr:false})
import { url } from '@/app/utils/urls';
import { api } from '@/app/utils/api';
import { useParams } from 'next/navigation';
const Community = () => {
     const [loading, setLoading] = React.useState(true)
        const [communitis, setCommunities] = React.useState({})
        const { slug } = useParams()
        const getCity = async () => {
            try {
                setLoading(true)
                const data = await api.Get(`${url.COOMUNITY_PAGE}/${slug}`)
                if (data) {
                    setCommunities(data.response)
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
    <CommunityComponent 
    loading={loading}
    community={communitis}
    
    />
  )
}

export default Community