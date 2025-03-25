import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import DateComponent from './shared/DateComponent';
import DayComponent from './daily_weather/DayComponent';
import Loader from './layout/Loader';
const Days = () => {
  const { state, dispatch } = useContext(WeatherContext);

  const forecast = state.weather?.forecast?.forecastday;

  return (
    <section className='days'>
      <div className='container'>
        {state.isLoading || !forecast || !forecast[state.day] ? (
          <Loader />
        ) : (
          <>
            <div className='links'>
              <span
                className={state.day === 0 ? 'day active ' : 'day'}
                onClick={() => dispatch({ type: 'DAY', payload: 0 })}
              >
                Today
              </span>
              <span
                className={state.day === 1 ? 'day active' : 'day'}
                onClick={() => dispatch({ type: 'DAY', payload: 1 })}
              >
                Tomorrow
              </span>
              <DayComponent data={forecast[2].date} />
            </div>
            <DateComponent data={forecast[state.day].date} />
          </>
        )}
      </div>
    </section>
  );
};

export default Days;
