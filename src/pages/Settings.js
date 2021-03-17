import React, { useContext } from "react";
import RadioButton from "../components/shared/RadioButton";
import { WeatherContext } from "../contexts/WeatherContext";

const Settings = () => {
  const { state, dispatch } = useContext(WeatherContext);

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
        <h3>Temperature</h3>
        <div className="radio-group">
          <RadioButton
            id="1"
            changed={handleChange}
            isSelected={state.settings.temp === "celsius"}
            name="temp"
            label="Celsius"
            value="celsius"
          />
          <RadioButton
            id="2"
            changed={handleChange}
            isSelected={state.settings.temp === "fahrenheit"}
            name="temp"
            label="Fahrenheit"
            value="fahrenheit"
          />
        </div>
        <h3>Speed</h3>
        <div className="radio-group">
          <RadioButton
            id="3"
            changed={handleChange}
            isSelected={state.settings.speed === "mph"}
            name="speed"
            label="mph"
            value="mph"
          />
          <RadioButton
            id="4"
            changed={handleChange}
            isSelected={state.settings.speed === "kph"}
            name="speed"
            label="kph"
            value="kph"
          />
        </div>
        <h3>Distance</h3>
        <div className="radio-group">
          <RadioButton
            id="5"
            changed={handleChange}
            isSelected={state.settings.distance === "miles"}
            name="distance"
            label="miles"
            value="miles"
          />
          <RadioButton
            id="6"
            changed={handleChange}
            isSelected={state.settings.distance === "km"}
            name="distance"
            label="kilometer"
            value="km"
          />
        </div>
        <h3>Volume</h3>
        <div className="radio-group">
          <RadioButton
            id="7"
            changed={handleChange}
            isSelected={state.settings.precipitation === "mm"}
            name="precipitation"
            label="millimeters"
            value="mm"
          />
          <RadioButton
            id="8"
            changed={handleChange}
            isSelected={state.settings.precipitation === "in"}
            name="precipitation"
            label="inches"
            value="in"
          />
        </div>
        <h3>Pressure</h3>
        <div className="radio-group">
          <RadioButton
            id="9"
            changed={handleChange}
            isSelected={state.settings.pressure === "mb"}
            name="pressure"
            label="millibars"
            value="mb"
          />
          <RadioButton
            id="10"
            changed={handleChange}
            isSelected={state.settings.pressure === "in"}
            name="pressure"
            label="inches"
            value="in"
          />
        </div>
      </div>
    </section>
  );
};

export default Settings;
