import React, { useState, useContext } from 'react'
import { format } from 'date-fns'
import { WeatherContext } from '../../contexts/WeatherContext';

const ForecastWeather = () => {
    const [day, setDay] = useState(0)
    const { state } = useContext(WeatherContext);

    const previousDay = () => {
        if (day > 0) {
            setDay(day - 1)
        }
    }
    const nextDay = () => {
        if (day < 2) {
            setDay(day + 1)
        }
    }
    if (!state.loading) {
        let _maxTemp = state.settings.temp === 'celsius' ?
            `${state.weather.forecast.forecastday[day].day.maxtemp_c}°c` :
            `${state.weather.forecast.forecastday[day].day.maxtemp_f}°f`

        let _minTemp = state.settings.temp === 'celsius' ?
            `${state.weather.forecast.forecastday[day].day.mintemp_c}°c` :
            `${state.weather.forecast.forecastday[day].day.mintemp_f}°f`

        let _precipitation = state.settings.precipitation === 'mm' ?
            `${state.weather.forecast.forecastday[day].day.totalprecip_mm}mm` :
            `${state.weather.forecast.forecastday[day].day.totalprecip_in}in`

        return (
            <div className='forecast-weather'>
                <h3 className='details-title'>Forecast</h3>
                <div className='condition-group'>
                    <span onClick={previousDay}><i className="fas fa-caret-left"></i></span>
                    <span>{format(new Date(state.weather.forecast.forecastday[day].date), 'eee do MMM')}</span>
                    <span onClick={nextDay}><i className="fas fa-caret-right"></i></span>
                </div>
                <div className='condition-group'>
                    <span>Max temp</span>
                    <span>{_maxTemp}</span>
                </div>
                <div className='condition-group'>
                    <span>Min temp</span>
                    <span>{_minTemp}</span>
                </div>
                <div className='condition-group'>
                    <span>Chance of rain</span>
                    <span>{state.weather.forecast.forecastday[day].day.daily_chance_of_rain}%</span>
                </div>
                <div className='condition-group'>
                    <span>Total rainfall</span>
                    <span>{_precipitation}</span>
                </div>
                <div className='condition-group'>
                    <span>Chance of snow</span>
                    <span>{state.weather.forecast.forecastday[day].day.daily_chance_of_snow}%</span>
                </div>
            </div>
        )
    }
}

export default ForecastWeather
