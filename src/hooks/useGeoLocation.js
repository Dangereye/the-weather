import { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

const useGeoLocation = () => {
  const { state } = useContext(WeatherContext);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    const success = (position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    };
    const error = () => {
      throw new error("Unable to retrieve your location");
    };
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported in your browser");
    }
    if (navigator.geolocation && state.settings.geoLocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
  return { lat, lon };
};

export default useGeoLocation;
