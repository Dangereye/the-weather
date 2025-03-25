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
    const getWeather = async (location) => {
      try {
        const res = await fetch(
          `/.netlify/functions/getWeather?location=${location}`
        );

        if (!res.ok) {
          const is404 = res.status === 400;

          localStorage.clear();
          dispatch({ type: 'FORECAST', payload: null });
          dispatch({
            type: 'MESSAGE',
            payload: {
              isActive: true,
              text: is404
                ? "Sorry, we couldn't find that location."
                : 'Something went wrong.',
            },
          });
          return;
        }

        const data = await res.json();
        dispatch({ type: 'FORECAST', payload: data });
        dispatch({ type: 'ERROR', payload: null });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error.message });
      } finally {
        dispatch({ type: 'LOADING', payload: false });
      }
    };

    if (state.settings.geoLocation === 'on' && geo !== null) {
      getWeather(geo);
    } else {
      getWeather(state.location);
    }
  }, [geo, state.settings.geoLocation, state.location, dispatch]);

  useEffect(() => {
    const fetchImage = async () => {
      const condition = state.weather?.current?.condition?.text;

      if (!condition) return;

      try {
        const res = await fetch(
          `/.netlify/functions/getImage?query=${condition}`
        );

        if (!res.ok) throw new Error('Failed to fetch image');

        const data = await res.json();
        dispatch({ type: 'IMAGE', payload: data.urls.regular });
      } catch (error) {
        console.error('Unsplash error:', error);
      } finally {
        dispatch({ type: 'LOADING', payload: false });
      }
    };

    fetchImage();
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
