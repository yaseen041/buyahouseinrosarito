"use client";
import React from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const Map = ({ lattitude, longitude }) => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBy2l4KGGTm4cTqoSl6h8UAOAob87sHBsA", // Replace with your API key
  });
  const center = React.useMemo(() => {
    const validLatitude = !Number.isNaN(lattitude) ? lattitude : -34.397;
    const validLongitude = !Number.isNaN(longitude) ? longitude : 150.644;
    return { lat: validLatitude, lng: validLongitude };
  }, [lattitude, longitude]);
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