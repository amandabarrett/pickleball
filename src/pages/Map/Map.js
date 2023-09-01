// import React, { useState, useEffect, useRef } from "react";
import Courts from "../../courts.json";
import Map, { Marker } from "react-map-gl";
import MarkerImage from "../../assets/pickle.svg";

import "mapbox-gl/dist/mapbox-gl.css";

function MapBox() {
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 25.82,
          longitude: -80.28,
          zoom: 9,
        }}
        style={{ width: 500, height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiYW1hbmRhYmFycmV0dCIsImEiOiJjbGx3dnltazUwa21xM21uc2tqODZwbjQwIn0.LkCVbjdoZuzkfyZhjLdCIg"
      >
        {Courts.map((court) => (
          <Marker
            latitude={court.coordinates.lattitude}
            longitude={court.coordinates.longtude}
          >
            <img
              src={MarkerImage}
              alt="Court Marker"
              style={{
                borderRadius: "50%",
                width: "45px",
                height: "45px",
              }}
            />
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default MapBox;
