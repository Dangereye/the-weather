import React, { useEffect, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import CurrentConditions from "../components/current_conditions/CurrentConditions";
import Days from "../components/Days";
import Header from "../components/header/Header";
import DailyConditions from "../components/daily_weather/DailyConditions";
import DailyPrecipitation from "../components/daily_weather/DailyPrecipitation";
import DailyWind from "../components/daily_weather/DailyWind";
import DailyAstronomy from "../components/daily_weather/DailyAstronomy";

const Home = ({ location }) => {
  const { state } = useContext(WeatherContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      {state.weather && (
        <>
          <CurrentConditions />
          <Days />
          <DailyConditions />
          <DailyPrecipitation />
          <DailyWind />
          <DailyAstronomy />
        </>
      )}
    </>
  );
};

export default Home;
