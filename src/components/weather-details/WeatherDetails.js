import React, { useState, useContext } from 'react'
import { WeatherContext } from '../../contexts/WeatherContext'
import Astronomy from './Astronomy'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'
import HourlyWeather from './HourlyWeather'
import Settings from './Settings'

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
                                placeholder='New Location'
                                autoComplete='off'
                                required />
                            <button type='submit'><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div className="tabs">
                        <button
                            onClick={() => setTab('now')}
                            style={{ color: tab === 'now' ? 'rgb(250, 250, 250)' : '' }}
                        >Today</button>
                        <button
                            onClick={() => setTab('3 days')}
                            style={{ color: tab === '3 days' ? 'rgb(250, 250, 250)' : '' }}
                        >3 Days</button>
                        <button
                            onClick={() => setTab('astro')}
                            style={{ color: tab === 'astro' ? 'rgb(250, 250, 250)' : '' }}
                        >Astronomy</button>
                        <button
                            onClick={() => setTab('settings')}
                            style={{ color: tab === 'settings' ? 'rgb(250, 250, 250)' : '' }}
                        ><i className="fas fa-cog"></i></button>
                    </div>
                    <div className="info">
                        {tab === 'now' ? <><CurrentWeather /><HourlyWeather /></> : tab === '3 days' ? <ForecastWeather /> : tab === 'astro' ? < Astronomy /> : <Settings />}
                    </div>

                </div>
                <button className="close" onClick={() => dispatch({ type: 'HIDE_DETAILS' })}>
                    Close
                </button>
            </div >
        )
    }
    return <>loading</>
}

export default WeatherDetails
