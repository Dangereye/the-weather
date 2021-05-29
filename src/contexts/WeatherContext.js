import React, { createContext, useReducer } from "react";

export const WeatherContext = createContext();

const weatherReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "MESSAGE":
      return { ...state, message: action.payload };
    case "LOCATION":
      localStorage.setItem("saved-location", JSON.stringify(action.payload));
      return { ...state, location: action.payload };
    case "DAY":
      return { ...state, day: action.payload };
    case "FORECAST":
      return { ...state, weather: action.payload };
    case "IMAGE":
      return { ...state, image: action.payload };
    case "SETTINGS":
      localStorage.setItem("settings", JSON.stringify(action.payload));
      return { ...state, settings: action.payload };
    default:
      return state;
  }
};

const WeatherContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, {
    isLoading: true,
    message: { isActive: false, text: "" },
    error: null,
    location: localStorage.getItem("saved-location")
      ? JSON.parse(localStorage.getItem("saved-location"))
      : "london",
    day: 0,
    weather: null,
    image: null,
    settings: localStorage.getItem("settings")
      ? JSON.parse(localStorage.getItem("settings"))
      : {
          geoLocation: "off",
          temp: "celsius",
          speed: "mph",
          distance: "miles",
          precipitation: "mm",
          pressure: "mb",
        },
  });

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
