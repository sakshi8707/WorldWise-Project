import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import L, { map } from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import Button from "./Button.jsx";

// Import marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useGeolocation } from "../Hooks/useGeolocation";
import {useUrlPosition} from "../Hooks/useUrlPosition.js";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map({ cities }) {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([20, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();
  // console.log(mapLat);

  useEffect(() => {
    console.log("Cities data:", cities);
  }, [cities]);

  const handleMarkerClick = (city) => {
    navigate(`/app/cities/${city.id}`);
  };

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition) {
      console.log(
        "Setting map position to geolocation position:",
        geolocationPosition
      );
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    }
  }, [geolocationPosition]);

  const handleButtonClick = () => {
    console.log("Button clicked");
    getPosition();
  };

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={handleButtonClick}>
          {isLoadingPosition ? "Loading..." : "Use your Position"}
        </Button>
      )}

      <MapContainer
        center={mapPosition}
        zoom={5}
        scrollWheelZoom={true}
        className={styles.map}
        key={mapPosition} // Add key to force re-render when position changes
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities &&
          cities.map((city) => (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
              eventHandlers={{
                click: () => handleMarkerClick(city),
              }}
            >
              <Popup>
                <strong>{city.cityName}</strong>
                <br />
                {city.emoji || "No notes available."}
              </Popup>
            </Marker>
          ))}

        <DetectClick />
      </MapContainer>
    </div>
  );
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`/app/form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
