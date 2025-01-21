"use client";
import dynamic from 'next/dynamic';
const PropertyDetail = dynamic(() => import("@/app/components/propertyDetail"))

const DetailPage = () => {


  return (
    <div>
      <PropertyDetail />
    </div>
  )
}

export default DetailPage