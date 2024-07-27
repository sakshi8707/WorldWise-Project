import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

// Import marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Set default icon for markers
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

  useEffect(() => {
    console.log("Cities data:", cities);
  }, [cities]);

  const handleMarkerClick = (city) => {
    navigate(`/app/cities/${city.id}`);
  };

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[20, 0]} // Adjust default coordinates if necessary
        zoom={2}
        scrollWheelZoom={true}
        className={styles.map}
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
