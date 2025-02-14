"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import React, { Suspense } from "react";
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


import { UnitProvider } from "./utils/UnitContext";
import Loader from "./components/loader/Loader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const [isJQueryLoaded, setIsJQueryLoaded] = React.useState(false);
  const pathname = usePathname();
  React.useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleComplete = () => NProgress.done();
    handleStart();
    handleComplete();
    const handleRouteChange = () => {
      handleStart();
      handleComplete();
    };

    handleRouteChange();

    return () => {
      handleComplete();
    };
  }, [pathname]);

  React.useEffect(() => {
    const handleWindowLoad = () => NProgress.done();
    window.addEventListener("load", handleWindowLoad);

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  const Loadin = () => {
    return (
      <div className="preload preload-container">
        <div className="middle"></div>
      </div>

    )
  }

  return (
    <html lang="en">

      <head>



        <link rel="stylesheet" type="text/css" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/animation.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/nouislider.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/jquery.fancybox.min.css"></link>
        <link rel="stylesheet" type="text/css" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/bootstrap-select.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/magnific-popup.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/assets/css/mmenu.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />


        <link rel="stylesheet" href="/assets/font/fonts.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="stylesheet" href="https://i.icomoon.io/public/temp/4b7fddacba/UntitledProject/style.css"></link> */}

        <link rel="stylesheet" type="text/css" href="/assets/icon/flaticon_just-home.css" />
        <link rel="stylesheet" type="text/css" href="/assets/icon/icomoon/style.css" />


        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="./favicon.ico" />



      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}  body counter-scroll mm-wrapper`}>
      
        <Suspense fallback={<Loadin />} >
          <UnitProvider>
            {children}
          </UnitProvider>
        </Suspense>

        <Script
          src="/assets/js/jquery.min.js"
          strategy="beforeInteractive" // Load it after the page load

          onError={(e) => console.error("Failed to load jQuery:", e)}
        />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        {/* <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/bootstrap-select.min.js" strategy="afterInteractive" /> */}




        {/* <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/swiper.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/countto.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/circletype.min.js" strategy="afterInteractive" /> */}
        {/* <Script
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBy2l4KGGTm4cTqoSl6h8UAOAob87sHBsA"
              async
              strategy="afterInteractive"
            /> */}
        {/* <Script src="/assets/js/marker.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/jquery.fancybox.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/apexcharts.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/area-chart.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/morris.min.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/raphael.min.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/morris.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/nouislider.min.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/rangle-slider.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/mmenu.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/wow.min.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/scrollmagic.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/main.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/maps.js" strategy="afterInteractive" /> */}
        {/* <Script src="/assets/js/infobox.min.js" strategy="afterInteractive" /> */}
        {/* <Scripts /> */}


      </body>
    </html>
  );
}
