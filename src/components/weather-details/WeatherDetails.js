import React, { useState, useContext } from 'react'
import { format } from 'date-fns'
import { WeatherContext } from '../../contexts/WeatherContext'
import Astronomy from './Astronomy'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'
import HourlyWeather from './HourlyWeather'

const WeatherDetails = () => {
    const [location, setLocation] = useState('')
    const [tab, setTab] = useState('now')
    const { state, dispatch } = useContext(WeatherContext)

    const updateState = (e) => {
        e.preventDefault()
        localStorage.setItem('location', JSON.stringify(location))
        dispatch({ type: 'SET_LOCATION', payload: location })
        setLocation('')
    }

    if (!state.loading) {
        return (
            <div className={state.details ? 'weather-details active' : 'weather-details'}>
                <div className="content">
                    <div className="location">
                        <form onSubmit={updateState}>
                            <input
                                className='location'
                                type="text"
                                name='location'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder='Location'
                                autoComplete='off'
                                required />
                            <button type='submit'><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div className="tabs">
                        <button onClick={() => setTab('now')}>Today</button>
                        <button onClick={() => setTab('3 days')}>3 Days</button>
                        <button onClick={() => setTab('astro')}>Astronomy</button>
                    </div>
                    <div className="info">
                        {tab === 'now' ? <><CurrentWeather /><HourlyWeather /></> : tab === '3 days' ? <ForecastWeather /> : <Astronomy />}
                    </div>

                </div>
                <div className="close" onClick={() => dispatch({ type: 'HIDE_DETAILS' })}>
                    <i className="far fa-times-circle"></i>
                </div>
            </div>
        )
    }
    return <>loading</>
}

export default WeatherDetails
