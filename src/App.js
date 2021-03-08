import React, { useContext, useEffect } from "react";
import { WeatherContext } from "./contexts/WeatherContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Loader from "./components/Loader";
import Message from "./components/Message";
import Header from "./components/Header";

const App = () => {
  const { state, dispatch } = useContext(WeatherContext);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${state.location}&days=3`
    )
      .then((res) => {
        if (res.status === 400) {
          localStorage.clear();
          console.log(res);
          throw Error(`Oops! We could not find ${state.location}.`);
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
  }, [state.location, dispatch, state.isLoading]);

  return (
    <div className="app">
      <Router>
        <Navbar />
        {state.isLoading && <Loader text="Fetching weather, please wait.." />}
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
