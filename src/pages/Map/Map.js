import React, { useState, useEffect, useRef } from "react";
import Courts from "../../courts.json";
import Map, { Marker, Popup } from "react-map-gl";
import MarkerImage from "../../assets/pickle.svg";
import "../Map/Map.scss";

import "mapbox-gl/dist/mapbox-gl.css";

function MapBox() {
  const [popupInfo, setPopupInfo] = useState(null);

  const handleMarkerClick = (court) => {
    setPopupInfo(court);
  };

  const closePopup = () => {
    setPopupInfo(null);
  };
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 25.82,
          longitude: -80.28,
          zoom: 9,
        }}
        style={{ width: "100%", height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiYW1hbmRhYmFycmV0dCIsImEiOiJjbGx3dnltazUwa21xM21uc2tqODZwbjQwIn0.LkCVbjdoZuzkfyZhjLdCIg"
        onViewportChange={(viewport) => {}}
      >
        {Courts.map((court) => (
          <Marker
            key={court.name}
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
              onClick={() => handleMarkerClick(court)}
            />
          </Marker>
        ))}
        {popupInfo && (
          <Popup
            latitude={popupInfo.coordinates.lattitude}
            longitude={popupInfo.coordinates.longtude}
            closeButton={true}
            closeOnClick={false}
            onClose={closePopup}
          >
            <div>
              <h2>{popupInfo.name}</h2>
              <p>Address: {popupInfo.address}</p>
              <p>Rating: {popupInfo.rating}</p>
              <p>Courts: {popupInfo.outdoor}</p>
              <p>Access: {popupInfo.access}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default MapBox;
