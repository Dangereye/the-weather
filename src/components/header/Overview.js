import React, { useContext, useState, useRef, useEffect } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import Loader from '../layout/Loader';
import { CgPushDown, CgPushUp } from 'react-icons/cg';

const Overview = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const [location, setLocation] = useState('');
  const [temp, setTemp] = useState('');
  const [minTemp, setMinTemp] = useState('');
  const [maxTemp, setMaxTemp] = useState('');
  const input = useRef();

  useEffect(() => {
    if (state.weather && state.settings) {
      const forecastDay = state.weather.forecast?.forecastday?.[0]?.day;
      const current = state.weather.current;
      const settings = state.settings;

      setLocation(state.weather.location?.name || '');
      if (forecastDay && current) {
        setTemp(
          settings.temp === 'celsius'
            ? `${current.temp_c}°c`
            : `${current.temp_f}°f`
        );
        setMinTemp(
          settings.temp === 'celsius'
            ? `${forecastDay.mintemp_c}°c`
            : `${forecastDay.mintemp_f}°f`
        );
        setMaxTemp(
          settings.temp === 'celsius'
            ? `${forecastDay.maxtemp_c}°c`
            : `${forecastDay.maxtemp_f}°f`
        );
      }
    }
  }, [state.weather, state.settings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location !== '') {
      dispatch({ type: 'LOADING', payload: true });
      dispatch({
        type: 'SETTINGS',
        payload: { ...state.settings, geoLocation: 'off' },
      });
      dispatch({ type: 'LOCATION', payload: location });
      input.current.blur();
    }
  };

  const region = state.weather?.location?.region ?? '';
  const country = state.weather?.location?.country ?? '';
  const conditionText = state.weather?.current?.condition?.text ?? '';

  return (
    <div className='overview'>
      <form onSubmit={handleSubmit}>
        <input
          className='overview-location'
          ref={input}
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='New Location?'
        />
      </form>

      <div className='overview-region'>
        {state.isLoading ? <Loader /> : `${region}, ${country}`}
      </div>

      <div className='overview-temp'>{state.isLoading ? <Loader /> : temp}</div>

      <div className='overview-condition'>
        {state.isLoading ? <Loader /> : conditionText}
      </div>

      <div className='overview-min-max-temp'>
        <div>
          <CgPushDown />
          <span>{state.isLoading ? <Loader /> : minTemp}</span>
        </div>
        <div>
          <CgPushUp />
          <span>{state.isLoading ? <Loader /> : maxTemp}</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
