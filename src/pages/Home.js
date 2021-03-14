import React from "react";
import CurrentConditions from "../components/current_conditions/CurrentConditions";
import Days from "../components/Days";
import Header from "../components/header/Header";
import HourlyConditions from "../components/hourly_weather/HourlyConditions";
import HourlyPrecipitation from "../components/hourly_weather/HourlyPrecipitation";
import HourlyWind from "../components/hourly_weather/HourlyWind";

const Home = () => {
  return (
    <>
      <Header />
      <CurrentConditions />
      <Days />
      <HourlyConditions />
      <HourlyPrecipitation />
      <HourlyWind />
    </>
  );
};

export default Home;
