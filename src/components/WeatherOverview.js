import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import { WeatherContext } from '../contexts/WeatherContext'

const WeatherOverview = () => {
    const { state, dispatch } = useContext(WeatherContext)
    const [timeAndDate, setTimeAndDate] = useState(format(new Date(), "H:m eee do MMM yyyy"))
    const [option, setOption] = useState(null)

    setInterval(() => {
        setTimeAndDate(format(new Date(), "H:mm eee do MMM yyyy"))
    }, 1000)

    useEffect(() => {
        if (localStorage.getItem('location')) {
            const location = JSON.parse(localStorage.getItem('location'))
            dispatch({ type: 'SET_LOCATION', payload: location })
        }
    }, [dispatch])

    useEffect(() => {
        const getCurrentWeather = async () => {
            const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=1f0bb1485a0f4726a96204424200212&q=${state.location}&days=10`)
            dispatch({ type: 'GET_CURRENT', payload: data })
        }
        getCurrentWeather()
    }, [state.location, dispatch])

    if (!state.loading) {
        return (
            <div className='weather-overview' onClick={() => dispatch({ type: 'SHOW_DETAILS' })}>
                <div className='temperature'>{state.weather.current.temp_c}&deg;c</div>
                <div className='info'>
                    <div>
                        <h2 className='location'>{state.weather.location.name}</h2>
                        <p className='time'>{timeAndDate}</p>
                    </div>
                    <div className='condition'>
                        <div className='icon'>
                            <img src={state.weather.current.condition.icon} alt="icon" />
                        </div>
                        <div className='text'>{state.weather.current.condition.text}</div>
                    </div>
                </div>
            </div >
        )
    }

    return <>loading</>
}

export default WeatherOverview
