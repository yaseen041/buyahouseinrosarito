'use client';
import dynamic from 'next/dynamic';
const ContactComponent = dynamic(() => import("@/app/components/contact"), { ssr: false })
const Contact = () => {
  

    return (
     <ContactComponent />
    )
}

export default Contact