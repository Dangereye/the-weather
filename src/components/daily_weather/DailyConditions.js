import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import HourlyWeatherSlider from './HourlyWeatherSlider';
import Loader from '../layout/Loader';

const HourlyConditions = () => {
  const { state } = useContext(WeatherContext);

  const forecast = state.weather?.forecast?.forecastday;
  const settings = state.settings;

  // Defensive check
  if (!forecast || forecast.length <= state.day || !settings) return <Loader />;

  const day = forecast[state.day].day;

  return (
    <section className='hourly-conditions'>
      <div className='container'>
        <h2>Conditions</h2>
        <p>
          {`${day.condition.text}. Average temperatures of around ${
            settings.temp === 'celsius'
              ? `${day.avgtemp_c}°c`
              : `${day.avgtemp_f}°f`
          } with highs of ${
            settings.temp === 'celsius'
              ? `${day.maxtemp_c}°c`
              : `${day.maxtemp_f}°f`
          } and lows of ${
            settings.temp === 'celsius'
              ? `${day.mintemp_c}°c`
              : `${day.mintemp_f}°f`
          }`}
        </p>
        <HourlyWeatherSlider type='conditions' />
      </div>
    </section>
  );
};

export default HourlyConditions;
