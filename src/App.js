import React, { useContext, useEffect } from 'react';
import { WeatherContext } from './contexts/WeatherContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Message from './components/layout/Message';
import useGeoLocation from './hooks/useGeoLocation';

const App = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const { geo } = useGeoLocation();

  useEffect(() => {
    const getWeather = (location) => {
      // fetch(
      //   `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${location}&days=3`
      // )
      fetch(`/.netlify/functions/getWeather?location=${location}`)
        .then((res) => {
          if (res.status === 400) {
            localStorage.clear();
            dispatch({ type: 'FORECAST', payload: null });
            dispatch({
              type: 'MESSAGE',
              payload: {
                isActive: true,
                text: `Sorry, we could't find that location.`,
              },
            });
            throw Error('Error');
          } else if (!res.ok) {
            dispatch({ type: 'FORECAST', payload: null });
            dispatch({
              type: 'MESSAGE',
              payload: {
                isActive: true,
                text: `Something went wrong.`,
              },
            });
            throw Error('Error');
          }
          return res.json();
        })

        .then((data) => {
          dispatch({ type: 'FORECAST', payload: data });
          dispatch({ type: 'LOADING', payload: false });
          dispatch({ type: 'ERROR', payload: null });
        })

        .catch((error) => {
          dispatch({ type: 'ERROR', payload: error.message });
          dispatch({ type: 'LOADING', payload: false });
        });
    };
    if (state.settings.geoLocation === 'on' && geo !== null) {
      getWeather(geo);
    } else {
      getWeather(state.location);
    }
  }, [geo, state.settings.geoLocation, state.location, dispatch]);

  useEffect(() => {
    if (state.weather) {
      console.log('Unsplash query:', state.weather.current.condition.text);
      // fetch(
      //   `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_IMAGE_KEY}&query=${state.weather.current.condition.text}`
      // )
      fetch(
        `/.netlify/functions/getImage?query=${state.weather.current.condition.text}`
      )
        .then((res) => {
          if (!res.ok) {
            throw Error(`Failed to fetch image.`);
          }
          return res.json();
        })
        .then((data) => {
          console.log('Unsplash API response:', data);
          dispatch({ type: 'IMAGE', payload: data.urls.regular });
        })
        .catch((error) => {
          dispatch({ type: 'LOADING', payload: false });
        });
    }
  }, [state.weather, dispatch]);

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Message message={state.message.text} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/settings' exact component={Settings} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
