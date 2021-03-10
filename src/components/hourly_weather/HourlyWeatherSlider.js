import React, { useState, useContext, useRef } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

const HourlyWeatherSlider = ({ day }) => {
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
        className="hours"
        ref={target}
        style={{
          left: posX + "px",
          transition: drag ? "0s" : "0.4s",
          cursor: cursor,
        }}
      >
        {state.weather.forecast.forecastday[state.day].hour.map((item) => {
          return (
            <div key={item.time} className="hour-card">
              <div className="temp">
                {state.settings.temp === "celsius"
                  ? `${item.temp_c}°c`
                  : `${item.temp_f}°f`}
              </div>
              <img
                src={item.condition.icon}
                alt={item.condition.text}
                draggable={false}
              />
              <div className="time">
                {new Date(item.time).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyWeatherSlider;
