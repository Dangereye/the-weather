import React, { useContext, useState, useEffect } from 'react'
import { WeatherContext } from '../../contexts/WeatherContext'


const Settings = () => {
    const { state, dispatch } = useContext(WeatherContext)
    const [temp, setTemp] = useState(state.settings.temp)
    const [speed, setSpeed] = useState(state.settings.speed)
    const [precipitation, setPrecipitation] = useState(state.settings.precipitation)

    useEffect(() => {
        dispatch({ type: 'SETTINGS', payload: { temp, speed, precipitation } })
    }, [temp, speed, precipitation, dispatch])

    return (
        <div className='settings'>
            <h3 className='details-title'>Settings</h3>
            <h5>Temp</h5>
            <div className='options-group'>
                <span>
                    <input
                        type='radio'
                        name='temp'
                        value='celsius'
                        onChange={(e) => setTemp(e.target.value)}
                        checked={state.settings.temp === 'celsius'}
                    />
                    <label htmlFor="celsius">&deg;c</label>
                </span>
                <span>
                    <input
                        type='radio'
                        name='temp'
                        value='fahrenheit'
                        onChange={(e) => setTemp(e.target.value)}
                        checked={state.settings.temp === 'fahrenheit'}
                    />
                    <label htmlFor="fahrenheit">&deg;f</label>
                </span>
            </div>
            <h5>Speed</h5>
            <div className='options-group'>
                <span>
                    <input
                        type='radio'
                        name='speed'
                        value='mph'
                        onChange={(e) => setSpeed(e.target.value)}
                        checked={state.settings.speed === 'mph'} />
                    <label htmlFor="mph">mph</label>
                </span>
                <span>
                    <input
                        type='radio'
                        name='speed'
                        value='kph'
                        onChange={(e) => setSpeed(e.target.value)}
                        checked={state.settings.speed === 'kph'} />
                    <label htmlFor="kph">kph</label>
                </span>
            </div>
            <h5>Precipitation</h5>
            <div className='options-group'>

                <span>
                    <input
                        type='radio'
                        name='precipitation'
                        value='mm'
                        onChange={(e) => setPrecipitation(e.target.value)} checked={state.settings.precipitation === 'mm'} />
                    <label htmlFor="mm">mm</label>
                </span>
                <span>
                    <input
                        type='radio'
                        name='precipitation'
                        value='in'
                        onChange={(e) => setPrecipitation(e.target.value)}
                        checked={state.settings.precipitation === 'in'} />
                    <label htmlFor="in">in</label>
                </span>
            </div>
        </div>
    )
}

export default Settings
