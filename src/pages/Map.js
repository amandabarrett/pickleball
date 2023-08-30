import React, { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

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

    // GeoJSON data for markers
    // const geojson = {
    //   type: "FeatureCollection",
    //   features: [
    //     {
    //       type: "Feature",
    //       properties: { message: "Foo", iconSize: [60, 60] },
    //       geometry: { type: "Point", coordinates: [-66.324462, -16.024695] },
    //     },
    //     {
    //       type: "Feature",
    //       properties: { message: "Bar", iconSize: [50, 50] },
    //       geometry: { type: "Point", coordinates: [-61.21582, -15.971891] },
    //     },
    //     {
    //       type: "Feature",
    //       properties: { message: "Baz", iconSize: [40, 40] },
    //       geometry: { type: "Point", coordinates: [-63.292236, -18.281518] },
    //     },
    //   ],
    // };

    // Add markers to the map.
    geojson.features.forEach((marker) => {
      // Create a DOM element for each marker.
      const el = document.createElement("div");
      const width = marker.properties.iconSize[0];
      const height = marker.properties.iconSize[1];
      el.className = "marker";
      el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = "100%";

      el.addEventListener("click", () => {
        window.alert(marker.properties.message);
      });

      // Add markers to the map.
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    });

    // Cleanup when the component unmounts
    return () => map.remove();
  }, []); // Empty dependency array means this effect runs once after initial render

  return <div id="map" style={{ width: "65vw", height: "65vh" }}></div>;
}

export default Map;
