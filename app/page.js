"use client"
import dynamic from 'next/dynamic';
const HomePage = dynamic(() => import("@/app/components/home"), { ssr: false })
export default function Home() {
  return (
    <>
    <HomePage />
   
    </>
  );
}
