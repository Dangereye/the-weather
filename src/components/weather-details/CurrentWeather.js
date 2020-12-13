import React, { useContext } from 'react'
import { WeatherContext } from '../../contexts/WeatherContext'

const CurrentWeather = () => {
    const { state } = useContext(WeatherContext);
    return (
        <div className='current-weather'>
            <h3 className='details-title'>Current conditions</h3>
            <div className='condition-group'>
                <span>Temp</span>
                <span>{!state.loading ? state.weather.current.temp_c : '--'}&deg;c</span>
            </div>
            <div className='condition-group'>
                <span>Feels like</span>
                <span>{!state.loading ? state.weather.current.feelslike_c : '--'}&deg;c</span>
            </div>
            <div className='condition-group'>
                <span>Wind direction</span>
                <span>{!state.loading ? state.weather.current.wind_dir : '--'}</span>
            </div>
            <div className='condition-group'>
                <span>Wind speed</span>
                <span>{!state.loading ? state.weather.current.wind_mph : '--'}mph</span>
            </div>
            <div className='condition-group'>
                <span>Humidity</span>
                <span>{!state.loading ? state.weather.current.humidity : '--'}</span>
            </div>
            <div className='condition-group'>
                <span>UV</span>
                <span>{!state.loading ? state.weather.current.uv : '--'}</span>
            </div>
        </div>
    )
}

export default CurrentWeather
