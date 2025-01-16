'use client';

import dynamic from 'next/dynamic';
const PropertyComponent = dynamic(() => import("@/app/components/property"), { ssr: false })
const Property = () => {
  
  return (
    <>
    
  <PropertyComponent />
    </>

  )
}

export default Property