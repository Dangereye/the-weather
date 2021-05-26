import React, { createContext, useReducer } from "react";

export const WeatherContext = createContext();

const weatherReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "TOGGLE_DETAILS":
      return { ...state, details: action.payload };
    case "LOCATION":
      return { ...state, location: action.payload };
    case "DAY":
      return { ...state, day: action.payload };
    case "FORECAST":
      return { ...state, weather: action.payload };
    case "IMAGE":
      return { ...state, image: action.payload };
    case "SETTINGS":
      return { ...state, settings: action.payload };
    default:
      return state;
  }
};

const WeatherContextProvider = ({ children }) => {
  let currentLocation = "London";

  if (localStorage.getItem("lsLocation")) {
    currentLocation = JSON.parse(localStorage.getItem("lsLocation"));
  }

  const [state, dispatch] = useReducer(weatherReducer, {
    isLoading: true,
    error: null,
    details: false,
    location: currentLocation,
    day: 0,
    weather: null,
    image: null,
    settings: {
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
