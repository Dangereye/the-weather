import React, { useState, useContext, useRef } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import ConditionCard from "./ConditionCard";
import PrecipitationCard from "./PrecipitationCard";
import WindCard from "./WindCard";

const HourlyWeatherSlider = ({ type }) => {
  const { state } = useContext(WeatherContext);
  const [cursor, setCursor] = useState("pointer");
  const [drag, setDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [posX, setPosX] = useState(0);
  const target = useRef();
  const parent = useRef();

  const onMouseDown = (e) => {
    setDrag(true);
    setStartX(e.clientX - target.current.offsetLeft);
    setCursor("grabbing");
  };

  const onMouseUp = () => {
    if (drag) {
      setDrag(false);
    }
    if (target.current.offsetLeft > 0) {
      setPosX(0);
    }
    if (
      target.current.offsetLeft + target.current.clientWidth <
      parent.current.clientWidth
    ) {
      setPosX(parent.current.clientWidth - target.current.clientWidth);
    }
    setCursor("grab");
  };

  const onMouseMove = (e) => {
    if (drag) {
      setPosX(e.clientX - startX);
    }
  };

  return (
    <div
      ref={parent}
      className="hourly-weather-slider"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={() => setCursor("grab")}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div
        className="items"
        ref={target}
        style={{
          left: posX + "px",
          transition: drag ? "0s" : "0.4s",
          cursor: cursor,
        }}
      >
        {type === "conditions" &&
          state.weather.forecast.forecastday[state.day].hour.map(
            (item, index) => {
              return <ConditionCard key={`${type}-${index}`} item={item} />;
            }
          )}
        {type === "precipitation" &&
          state.weather.forecast.forecastday[state.day].hour.map(
            (item, index) => {
              return <PrecipitationCard key={`${type}-${index}`} item={item} />;
            }
          )}
        {type === "wind" &&
          state.weather.forecast.forecastday[state.day].hour.map(
            (item, index) => {
              return <WindCard key={`${type}-${index}`} item={item} />;
            }
          )}
      </div>
    </div>
  );
};

export default HourlyWeatherSlider;
