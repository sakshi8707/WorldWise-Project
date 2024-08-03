import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation");
      return;
    }

    console.log("Requesting geolocation...");
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("Geolocation position:", pos.coords);
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        console.error("Geolocation error:", error);
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
