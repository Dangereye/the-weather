import React, { useContext, useEffect } from "react";
import { WeatherContext } from "./contexts/WeatherContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Loader from "./components/layout/Loader";
import Message from "./components/layout/Message";
import useGeoLocation from "./hooks/useGeoLocation";

const App = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const { geo } = useGeoLocation();

  useEffect(() => {
    const getWeather = (location) => {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${location}&days=3`
      )
        .then((res) => {
          if (res.status === 400) {
            localStorage.clear();
            console.log(res);
            throw Error(`Oops! Unknown Location.`);
          } else if (!res.ok) {
            console.log(res);
            throw Error(
              `Oops! Something went wrong? Please reload the page, or try again later.`
            );
          }
          return res.json();
        })

        .then((data) => {
          dispatch({ type: "FORECAST", payload: data });
          dispatch({ type: "LOADING", payload: false });
          dispatch({ type: "ERROR", payload: null });
        })

        .catch((error) => {
          dispatch({ type: "ERROR", payload: error.message });
          dispatch({ type: "LOADING", payload: false });
        });
    };
    if (state.settings.geoLocation === "on") {
      getWeather(geo);
    } else {
      getWeather(state.location);
    }
  }, [geo, state.settings.geoLocation, state.location, dispatch]);

  // useEffect(() => {
  //   if (state.weather) {
  //     getBackgroundImage();
  //   }
  //   // eslint-disable-line react-hooks/exhaustive-deps
  // }, [state.weather]);

  return (
    <div className="app">
      <Router>
        <Navbar />
        {state.isLoading && <Loader />}
        {state.error && <Message text={state.error} role="error" />}
        {state.weather && (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/settings" exact component={Settings} />
          </Switch>
        )}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
