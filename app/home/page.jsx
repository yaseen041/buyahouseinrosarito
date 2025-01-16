'use client';
import dynamic from 'next/dynamic';
const HomeComponent = dynamic(() => import("@/app/components/home"), { ssr: false })


const HomePage = () => {


    return (
        <>
            <HomeComponent />

        </>

    )
}

export default HomePage