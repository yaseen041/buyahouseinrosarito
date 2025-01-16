'use client';
import dynamic from 'next/dynamic';
const PropertyDetail = dynamic(() => import("@/app/components/propertyDetail"), { ssr: false })
const DetailPage = () => {
  return (
    <PropertyDetail />
  )
}

export default DetailPage