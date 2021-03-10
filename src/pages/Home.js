import React from "react";
import CurrentConditions from "../components/current_conditions/CurrentConditions";
import Days from "../components/Days";
import Header from "../components/header/Header";
import HourlyWeather from "../components/hourly_weather/HourlyWeather";

const Home = () => {
  return (
    <>
      <Header />
      <CurrentConditions />
      <Days />
      <HourlyWeather />
    </>
  );
};

export default Home;
