import React, { useContext, useState, useEffect } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import HourlyWeatherSlider from './HourlyWeatherSlider';
import Loader from '../layout/Loader';

const HourlyPrecipitation = () => {
  const { state } = useContext(WeatherContext);
  const [des, setDes] = useState('');
  const loading = state.isLoading;
  const day = state.weather?.forecast?.forecastday[state.day]?.day;

  useEffect(() => {
    if (!loading && day) {
      if (day.daily_will_it_rain && day.daily_will_it_snow) {
        setDes(
          `There's a ${day.daily_chance_of_rain}% chance of rain, with a ${day.daily_chance_of_snow}% chance of snow.`
        );
      } else if (day.daily_will_it_rain) {
        setDes(`There's a ${day.daily_chance_of_rain}% chance of rain.`);
      } else if (day.daily_will_it_snow) {
        setDes(`There's a ${day.daily_chance_of_snow}% chance of snow.`);
      } else {
        setDes(`Should be dry all day.`);
      }
    } else {
      setDes('');
    }
  }, [loading, day]);

  return (
    <section style={{ backgroundColor: '#fff' }}>
      <div className='container'>
        <h2>Precipitation</h2>
        {loading ? (
          <Loader />
        ) : (
          <>
            <p>{des}</p>
            <HourlyWeatherSlider type='precipitation' />
          </>
        )}
        {!loading && day && (
          <p className='daily-total'>
            Total daily precipitation:
            <span>
              {state.settings.precipitation === 'mm'
                ? `${day.totalprecip_mm}mm`
                : `${day.totalprecip_in}in`}
            </span>
          </p>
        )}
      </div>
    </section>
  );
};

export default HourlyPrecipitation;
