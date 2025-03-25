import React, { useContext, useState, useEffect } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import HourlyWeatherSlider from './HourlyWeatherSlider';
import Loader from '../layout/Loader';

const HourlyWind = () => {
  const { state } = useContext(WeatherContext);
  const [des, setDes] = useState('');
  const loading = state.isLoading;
  const day = state.weather?.forecast?.forecastday[state.day]?.day;

  useEffect(() => {
    if (!loading && day) {
      const windSpeed =
        state.settings.speed === 'mph'
          ? `${day.maxwind_mph}mph`
          : `${day.maxwind_kph}kph`;

      const x = Math.round(day.maxwind_mph);
      const string = `with speeds reaching ${windSpeed}.`;

      if (x < 1) setDes(`Calm.`);
      else if (x < 4) setDes(`Light air, ${string}`);
      else if (x < 8) setDes(`A light breeze, ${string}`);
      else if (x < 13) setDes(`A gentle breeze, ${string}`);
      else if (x < 18) setDes(`A moderate breeze, ${string}`);
      else if (x < 25) setDes(`A fresh breeze, ${string}`);
      else if (x < 31) setDes(`A strong breeze, ${string}`);
      else if (x < 39) setDes(`High winds, ${string}`);
      else if (x < 47) setDes(`Gales, ${string}`);
      else if (x < 55) setDes(`Strong gales, ${string}`);
      else if (x < 64) setDes(`Storm conditions, ${string}`);
      else if (x < 74) setDes(`Violent storm conditions, ${string}`);
      else setDes(`Hurricane conditions, ${string}`);
    } else {
      setDes('');
    }
  }, [loading, day, state.settings.speed]);

  return (
    <section>
      <div className='container'>
        <h2>Wind</h2>
        {loading ? (
          <Loader />
        ) : (
          <>
            <p>{des}</p>
            <HourlyWeatherSlider type='wind' />
          </>
        )}
      </div>
    </section>
  );
};

export default HourlyWind;
