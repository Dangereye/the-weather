import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import HourlyWeatherSlider from './HourlyWeatherSlider';
import Loader from '../layout/Loader';

const HourlyConditions = () => {
  const { state } = useContext(WeatherContext);
  const loading = state.isLoading;
  const day = state.weather?.forecast?.forecastday[state.day]?.day;

  const summary =
    !loading && day
      ? `${day.condition.text}. Average temperatures of around ${
          state.settings.temp === 'celsius'
            ? `${day.avgtemp_c}°c`
            : `${day.avgtemp_f}°f`
        } with highs of ${
          state.settings.temp === 'celsius'
            ? `${day.maxtemp_c}°c`
            : `${day.maxtemp_f}°f`
        } and lows of ${
          state.settings.temp === 'celsius'
            ? `${day.mintemp_c}°c`
            : `${day.mintemp_f}°f`
        }`
      : null;

  return (
    <section className='hourly-conditions'>
      <div className='container'>
        <h2>Conditions</h2>
        {loading ? (
          <Loader />
        ) : (
          <>
            <p>{summary}</p>
            <HourlyWeatherSlider type='conditions' />
          </>
        )}
      </div>
    </section>
  );
};

export default HourlyConditions;
