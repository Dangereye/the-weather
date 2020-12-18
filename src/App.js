import React, { useContext, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { WeatherContext } from "./contexts/WeatherContext";

const App = () => {
  const { state, dispatch } = useContext(WeatherContext);

  useEffect(() => {
    const updateBg = (text) => {
      switch (true) {
        case text.includes("cloudy") ||
          text.includes("overcast") ||
          text.includes("mist") ||
          text.includes("fog"):
          dispatch({ type: "SET_BACKGROUND", payload: "url(img/cloudy.jpg)" });
          break;
        case text.includes("rain") || text.includes("drizzle"):
          dispatch({ type: "SET_BACKGROUND", payload: "url(img/rain.jpg)" });
          break;
        case text.includes("snow") ||
          text.includes("sleet") ||
          text.includes("blizzard"):
          dispatch({ type: "SET_BACKGROUND", payload: "url(img/snow.jpg)" });
          break;
        case text.includes("sun") || text.includes("clear"):
          dispatch({
            type: "SET_BACKGROUND",
            payload: "url(img/clear-sky.jpg)",
          });
          break;
        default:
          return "none";
      }
    };
    if (!state.loading) {
      const text = state.weather.current.condition.text;
      console.log(text);
      updateBg(text.toLowerCase());
    }
  }, [state.background, state.loading, state.weather, dispatch]);
  const background = {
    backgroundImage: state.background,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="app" style={background}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
