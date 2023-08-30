import React, { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Courts from "../courts.json";

const TOKEN = process.env.REACT_APP_TOKEN;

function Map() {
  useEffect(() => {
    // Set Mapbox access token
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYW1hbmRhYmFycmV0dCIsImEiOiJjbGx3eWFpemMxeW9kM2txanBsM3ZwcTBtIn0.h1FKcFScdVgF7tElglrZBg";

    // Initialize map
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-80.1, 26.1], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    Courts.forEach((court) => {
      // Create a DOM element for each marker.
      const el = document.createElement("div");
      el.className = "marker";

      // Add a more customized marker style
      el.style.backgroundColor = "blue";
      el.style.borderRadius = "50%";
      el.style.width = "10px";
      el.style.height = "10px";

      // Add the marker to the map at the specified coordinates
      new mapboxgl.Marker(el)
        .setLngLat([court.coordinates.longtude, court.coordinates.lattitude])
        .addTo(map);
    });

    // Cleanup when the component unmounts
    return () => map.remove();
  }, []); // Empty dependency array means this effect runs once after initial render

  return <div id="map" style={{ width: "65vw", height: "65vh" }}></div>;
}

export default Map;
