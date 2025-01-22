"use client";
import React from 'react';
import dynamic from 'next/dynamic';
const AboutComponent = dynamic(()=>import("@/app/components/about"),{ssr:false})
import { url } from '../utils/urls';
import { api } from '../utils/api';
const About = () => {
 const [loading,setLoading] = React.useState(false)
 const [testimonials,setTestimonials] = React.useState([])
 const [agents,setAgents] = React.useState([])

 const getTestimonials = async ()=>{
  try {
    const data = await api.Get(url.TESTIMONIALS)
    if(data){
      setTestimonials(data.data)
    }
  } catch (error) {
    console.log(error)
  }
 }

 const getAgents = async ()=>{
  try {
    const data = await api.Get(url.AGENTS)
    if(data){
      setAgents(data.data)
    }
  } catch (error) {
    console.log(error)
  }
 }

 React.useEffect(()=>{
  getTestimonials()
  getAgents()
 },[])


  return (
   <AboutComponent 
   testimonials={testimonials}
   agents={agents}
   />

  )
}

export default About