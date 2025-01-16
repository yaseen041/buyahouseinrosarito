"use client";
import dynamic from 'next/dynamic';
const AboutComponent = dynamic(()=>import("@/app/components/about"),{ssr:false})
const About = () => {
 

  return (
   <AboutComponent />

  )
}

export default About