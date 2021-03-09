import React from "react";
import Header from "../components/Header";
import HourlyWeather from "../components/weather-details/HourlyWeather";

const Home = () => {
  return (
    <>
      <Header />
      <HourlyWeather />
    </>
  );
};

export default Home;
