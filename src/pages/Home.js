import React from "react";
import CurrentConditions from "../components/current_conditions/CurrentConditions";
import Days from "../components/Days";
import Header from "../components/header/Header";
import DailyConditions from "../components/daily_weather/DailyConditions";
import DailyPrecipitation from "../components/daily_weather/DailyPrecipitation";
import DailyWind from "../components/daily_weather/DailyWind";

const Home = () => {
  return (
    <>
      <Header />
      <CurrentConditions />
      <Days />
      <DailyConditions />
      <DailyPrecipitation />
      <DailyWind />
    </>
  );
};

export default Home;
