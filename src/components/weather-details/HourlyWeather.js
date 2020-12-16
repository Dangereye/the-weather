import React, { useContext } from 'react'
import { format } from 'date-fns'
import { WeatherContext } from '../../contexts/WeatherContext'
import { Swiper, SwiperSlide } from 'swiper/react'

const HourlyWeather = ({ day }) => {
    const { state } = useContext(WeatherContext)
    let temp = state.settings.temp === 'celsius' ?
        `${state.weather.current.temp_c}°c` :
        `${state.weather.current.temp_f}°f`
    return (
        <Swiper className="hourly" grabCursor={true} loop={false}>
            {
                state.weather.forecast.forecastday[day].hour.map(item => {
                    return (
                        <SwiperSlide key={item.time}>
                            <div>{temp}</div>
                            <img src={item.condition.icon} alt={item.condition.text} />
                            <div>{format(new Date(item.time), 'H:mm')}</div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper >

    )
}

export default HourlyWeather
