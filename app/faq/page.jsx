"use client"
import dynamic from 'next/dynamic';
const FaqComponent = dynamic(() => import("@/app/components/faq"), { ssr: false })
const page = () => {
  return (
  <FaqComponent />
  )
}

export default page