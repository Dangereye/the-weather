import { useState, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

const useGeoLocation = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const [geo, setGeo] = useState(null);
  const success = (position) => {
    setGeo(`${position.coords.latitude}, ${position.coords.longitude}`);
  };
  const error = () => {
    dispatch({
      type: "SETTINGS",
      payload: { ...state.settings, geoLocation: "off" },
    });
  };

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported in your browser");
  }

  if (navigator.geolocation && state.settings.geoLocation === "on") {
    navigator.geolocation.getCurrentPosition(success, error);
  }
  return { geo };
};

export default useGeoLocation;
