"use client";
import React from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:"AIzaSyBy2l4KGGTm4cTqoSl6h8UAOAob87sHBsA", // Replace with your API key
      });
      const center = React.useMemo(() => ({ lat: -34.397, lng: 150.644 }), []);
      if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      center={center}
      zoom={10}
      mapContainerStyle={{ width: "100%", height: "500px" }}
    >
      <Marker position={center} />
    </GoogleMap>
  )
}

export default Map