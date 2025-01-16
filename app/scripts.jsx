"use client"
import { useEffect } from "react";

const CustomScript = ({ src, async = true, defer = true }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = async;
    script.defer = defer;
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return null;
};

export default CustomScript;
