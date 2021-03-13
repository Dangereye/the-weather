import React from "react";
import CurrentConditions from "../components/current_conditions/CurrentConditions";
import Days from "../components/Days";
import Header from "../components/header/Header";
import HourlyConditions from "../components/hourly_weather/HourlyConditions";
import HourlyPrecipitation from "../components/hourly_weather/HourlyPrecipitation";

const Home = () => {
  return (
    <>
      <Header />
      <CurrentConditions />
      <Days />
      <HourlyConditions />
      <HourlyPrecipitation />
    </>
  );
};

export default Home;
