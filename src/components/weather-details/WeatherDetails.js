import React, { useState, useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import Details from "./Details";
import HourlyWeather from "./HourlyWeather";
import Settings from "./Settings";

const WeatherDetails = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const [location, setLocation] = useState("");
  const [tab, setTab] = useState("now");
  const [day, setDay] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("lsLocation", JSON.stringify(location));
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "LOCATION", payload: location });
    setLocation("");
  };

  const previousDay = () => {
    if (day > 0) {
      setDay(day - 1);
    }
  };
  const nextDay = () => {
    if (day < 2) {
      setDay(day + 1);
    }
  };

  if (state.weather) {
    const name = state.weather.location.name;
    const region = state.weather.location.region;
    const country = state.weather.location.country;
    const current = {
      title: "current conditions",
      details: [
        {
          temp:
            state.settings.temp === "celsius"
              ? `${state.weather.current.temp_c}°c`
              : `${state.weather.current.temp_f}°f`,
        },
        {
          feels_like:
            state.settings.temp === "celsius"
              ? `${state.weather.current.feelslike_c}°c`
              : `${state.weather.current.feelslike_f}°f`,
        },
        { wind_direction: state.weather.current.wind_dir },
        {
          wind_speed:
            state.settings.speed === "mph"
              ? `${state.weather.current.wind_mph}mph`
              : `${state.weather.current.wind_kph}kph`,
        },
        { humidity: state.weather.current.humidity },
        { uv: state.weather.current.uv },
      ],
    };

    const forecast = {
      title: "forecast",
      details: [
        {
          max_temp:
            state.settings.temp === "celsius"
              ? `${state.weather.forecast.forecastday[day].day.maxtemp_c}°c`
              : `${state.weather.forecast.forecastday[day].day.maxtemp_f}°f`,
        },
        {
          min_temp:
            state.settings.temp === "celsius"
              ? `${state.weather.forecast.forecastday[day].day.mintemp_c}°c`
              : `${state.weather.forecast.forecastday[day].day.mintemp_f}°f`,
        },
        {
          chance_of_rain: `${state.weather.forecast.forecastday[day].day.daily_chance_of_rain}%`,
        },
        {
          total_rainfall:
            state.settings.precipitation === "mm"
              ? `${state.weather.forecast.forecastday[day].day.totalprecip_mm}mm`
              : `${state.weather.forecast.forecastday[day].day.totalprecip_in}in`,
        },
        {
          chance_of_snow: `${state.weather.forecast.forecastday[day].day.daily_chance_of_snow}%`,
        },
      ],
    };

    const astronomy = {
      title: "astronomy",
      details: [
        { sunrise: state.weather.forecast.forecastday[day].astro.sunrise },
        { sunset: state.weather.forecast.forecastday[day].astro.sunset },
        { moonrise: state.weather.forecast.forecastday[day].astro.moonrise },
        { moonset: state.weather.forecast.forecastday[day].astro.moonset },
        {
          moon_phase: state.weather.forecast.forecastday[day].astro.moon_phase,
        },
      ],
    };

    return (
      <div
        className={state.details ? "weather-details active" : "weather-details"}
      >
        <div className="content">
          <div className="location">
            <form onSubmit={handleSubmit}>
              <input
                className="location"
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="New Location"
                autoComplete="off"
                required
              />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
            <div className="current-location">{`${name}, ${region}, ${country}`}</div>
          </div>

          <div className="tabs">
            <button
              onClick={() => setTab("now")}
              style={{ color: tab === "now" ? "rgb(250, 250, 250)" : "" }}
            >
              Current
            </button>
            <button
              onClick={() => setTab("3 days")}
              style={{ color: tab === "3 days" ? "rgb(250, 250, 250)" : "" }}
            >
              Forecast
            </button>
            <button
              onClick={() => setTab("astro")}
              style={{ color: tab === "astro" ? "rgb(250, 250, 250)" : "" }}
            >
              Astronomy
            </button>
            <button
              onClick={() => setTab("settings")}
              style={{ color: tab === "settings" ? "rgb(250, 250, 250)" : "" }}
            >
              <i className="fas fa-cog"></i>
            </button>
          </div>

          <div className="day-group">
            <span onClick={previousDay}>
              <i className="previous fas fa-caret-left"></i>
            </span>
            <span>date</span>
            <span onClick={nextDay}>
              <i className="next fas fa-caret-right"></i>
            </span>
          </div>

          <div className="info">
            {tab === "now" ? (
              <Details data={current} />
            ) : tab === "3 days" ? (
              <Details data={forecast} />
            ) : tab === "astro" ? (
              <Details data={astronomy} />
            ) : (
              <Settings />
            )}
          </div>

          <div className="hourly">
            <HourlyWeather day={day} />
          </div>
        </div>

        <button
          className="close"
          onClick={() =>
            dispatch({ type: "TOGGLE_DETAILS", payload: !state.details })
          }
        >
          Close
        </button>
      </div>
    );
  }

  return null;
};

export default WeatherDetails;
