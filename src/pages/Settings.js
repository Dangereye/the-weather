import React, { useContext, useState } from "react";
import RadioButton from "../components/shared/RadioButton";
import { WeatherContext } from "../contexts/WeatherContext";
import { FaTemperatureLow } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { IoWaterOutline } from "react-icons/io5";
import { RiWindyFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";

const Settings = () => {
  const { state, dispatch } = useContext(WeatherContext);

  const [isTemp, setIsTemp] = useState(false);
  const [isSpeed, setIsSpeed] = useState(false);
  const [isDistance, setIsDistance] = useState(false);
  const [isPrecipitation, setIsPrecipitation] = useState(false);
  const [isPressure, setIsPressure] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SETTINGS",
      payload: { ...state.settings, [name]: value },
    });
  };

  return (
    <section className="settings">
      <div className="container">
        <h2>Settings</h2>
        {/* Temperature */}
        <div
          className={isTemp ? "setting active" : "setting"}
          onClick={() => setIsTemp(!isTemp)}
        >
          <div className="setting-content">
            <div className="setting-icon">
              <FaTemperatureLow />
            </div>
            <div className="setting-text">
              <h4>Temperature</h4>
              <p>{state.settings.temp}</p>
            </div>
          </div>
          <BsChevronDown className="status" />
        </div>
        {isTemp && (
          <div className="setting-options">
            <div className="option">
              <RadioButton
                id="celsius"
                changed={handleChange}
                isSelected={state.settings.temp === "celsius"}
                name="temp"
                label="Celsius"
                value="celsius"
              />
            </div>
            <div className="option">
              <RadioButton
                id="fahrenheit"
                changed={handleChange}
                isSelected={state.settings.temp === "fahrenheit"}
                name="temp"
                label="Fahrenheit"
                value="fahrenheit"
              />
            </div>
          </div>
        )}

        {/* Wind speed */}
        <div
          className={isSpeed ? "setting active" : "setting"}
          onClick={() => setIsSpeed(!isSpeed)}
        >
          <div className="setting-content">
            <div className="setting-icon">
              <IoMdSpeedometer />
            </div>
            <div className="setting-text">
              <h4>Wind speed</h4>
              <p>{state.settings.speed}</p>
            </div>
          </div>
          <BsChevronDown className="status" />
        </div>
        {isSpeed && (
          <div className="setting-options">
            <div className="option">
              <RadioButton
                id="mph"
                changed={handleChange}
                isSelected={state.settings.speed === "mph"}
                name="speed"
                label="Miles per hour"
                value="mph"
              />
            </div>
            <div className="option">
              <RadioButton
                id="kph"
                changed={handleChange}
                isSelected={state.settings.speed === "kph"}
                name="speed"
                label="Kilometers per hour"
                value="kph"
              />
            </div>
          </div>
        )}

        {/* Visibility distance */}
        <div
          className={isDistance ? "setting active" : "setting"}
          onClick={() => setIsDistance(!isDistance)}
        >
          <div className="setting-content">
            <div className="setting-icon">
              <MdVisibility />
            </div>
            <div className="setting-text">
              <h4>Visibility distance</h4>
              <p>{state.settings.distance}</p>
            </div>
          </div>
          <BsChevronDown className="status" />
        </div>
        {isDistance && (
          <div className="setting-options">
            <div className="option">
              <RadioButton
                id="miles"
                changed={handleChange}
                isSelected={state.settings.distance === "miles"}
                name="distance"
                label="Miles"
                value="miles"
              />
            </div>
            <div className="option">
              <RadioButton
                id="kilometers"
                changed={handleChange}
                isSelected={state.settings.distance === "km"}
                name="distance"
                label="Kilometers"
                value="km"
              />
            </div>
          </div>
        )}

        {/* Precipitation volume */}
        <div
          className={isPrecipitation ? "setting active" : "setting"}
          onClick={() => setIsPrecipitation(!isPrecipitation)}
        >
          <div className="setting-content">
            <div className="setting-icon">
              <IoWaterOutline />
            </div>
            <div className="setting-text">
              <h4>Precipitation volume</h4>
              <p>{state.settings.precipitation}</p>
            </div>
          </div>
          <BsChevronDown className="status" />
        </div>
        {isPrecipitation && (
          <div className="setting-options">
            <div className="option">
              <RadioButton
                id="millimeters"
                changed={handleChange}
                isSelected={state.settings.precipitation === "mm"}
                name="precipitation"
                label="Millimeters"
                value="mm"
              />
            </div>
            <div className="option">
              <RadioButton
                id="inches"
                changed={handleChange}
                isSelected={state.settings.precipitation === "in"}
                name="precipitation"
                label="Inches"
                value="in"
              />
            </div>
          </div>
        )}

        {/* Air pressure */}
        <div
          className={isPressure ? "setting active" : "setting"}
          onClick={() => setIsPressure(!isPressure)}
        >
          <div className="setting-content">
            <div className="setting-icon">
              <RiWindyFill />
            </div>
            <div className="setting-text">
              <h4>Air pressure</h4>
              <p>{state.settings.pressure}</p>
            </div>
          </div>
          <BsChevronDown className="status" />
        </div>
        {isPressure && (
          <div className="setting-options">
            <div className="option">
              <RadioButton
                id="millibars"
                changed={handleChange}
                isSelected={state.settings.pressure === "mb"}
                name="pressure"
                label="Millibars"
                value="mb"
              />
            </div>
            <div className="option">
              <RadioButton
                id="pressure-inches"
                changed={handleChange}
                isSelected={state.settings.pressure === "in"}
                name="pressure"
                label="Inches"
                value="in"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Settings;
