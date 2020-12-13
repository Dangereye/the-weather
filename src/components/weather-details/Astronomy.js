import React, { useContext } from 'react'
import { WeatherContext } from '../../contexts/WeatherContext'

const Astronomy = () => {
    const { state } = useContext(WeatherContext)
    return (
        <div>
            <h3 className='details-title'>Astronomy</h3>
            <div className='condition-group'>
                <span>Sunrise</span>
                <span>{state.weather.forecast.forecastday[0].astro.sunrise}</span>
            </div>
            <div className='condition-group'>
                <span>Sunset</span>
                <span>{state.weather.forecast.forecastday[0].astro.sunset}</span>
            </div>
            <div className='condition-group'>
                <span>Moonrise</span>
                <span>{state.weather.forecast.forecastday[0].astro.moonrise}</span>
            </div>
            <div className='condition-group'>
                <span>Moonset</span>
                <span>{state.weather.forecast.forecastday[0].astro.moonset}</span>
            </div>
            <div className='condition-group'>
                <span>Moon phase</span>
                <span>{state.weather.forecast.forecastday[0].astro.moon_phase}</span>
            </div>
        </div>
    )
}

export default Astronomy
