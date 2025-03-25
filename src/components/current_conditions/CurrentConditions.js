import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import DateComponent from '../shared/DateComponent';
import TimeComponent from '../shared/TimeComponent';
import ConditionGroup from './ConditionGroup';
import Loader from '../layout/Loader';

const CurrentConditions = () => {
  const { state } = useContext(WeatherContext);

  if (!state.weather?.current || !state.settings) return <Loader />;

  const now = state.weather.current;

  const current = {
    conditions: {
      title: 'Conditions',
      list: [
        { cloud_cover: `${now.cloud}%` },
        { condition: now.condition.text },
        {
          precipitation:
            state.settings.precipitation === 'mm'
              ? `${now.precip_mm}mm`
              : `${now.precip_in}in`,
        },
        {
          visibility:
            state.settings.distance === 'miles'
              ? `${now.vis_miles} miles`
              : `${now.vis_km}km`,
        },
      ],
    },

    temperature: {
      title: 'Temperature',
      list: [
        {
          temp:
            state.settings.temp === 'celsius'
              ? `${now.temp_c}°c`
              : `${now.temp_f}°f`,
        },
        {
          feels_like:
            state.settings.temp === 'celsius'
              ? `${now.feelslike_c}°c`
              : `${now.feelslike_f}°f`,
        },
        {
          humidity: `${now.humidity}%`,
        },
        {
          pressure:
            state.settings.pressure === 'mb'
              ? `${now.pressure_mb}mb`
              : `${now.pressure_in}in`,
        },
        {
          UV_index: now.uv,
        },
      ],
    },

    wind: {
      title: 'Wind',
      list: [
        {
          direction: now.wind_dir,
        },
        {
          speed:
            state.settings.speed === 'mph'
              ? `${now.wind_mph}mph`
              : `${now.wind_kph}kph`,
        },
        {
          gusts:
            state.settings.speed === 'mph'
              ? `${now.gust_mph}mph`
              : `${now.gust_kph}kph`,
        },
      ],
    },
  };

  return (
    <section>
      <div className='container'>
        <h2>Current Weather</h2>
        {state.isLoading ? (
          <Loader />
        ) : (
          <>
            <span>Last updated: </span>
            <DateComponent data={now.last_updated} />
            <span> at </span>
            <TimeComponent data={now.last_updated} />
            <div className='groups'>
              <ConditionGroup data={current.conditions} />
              <ConditionGroup data={current.temperature} />
              <ConditionGroup data={current.wind} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CurrentConditions;
