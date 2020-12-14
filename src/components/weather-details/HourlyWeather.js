import React, { useContext } from 'react'
import { format } from 'date-fns'
import { WeatherContext } from '../../contexts/WeatherContext'
import { Swiper, SwiperSlide } from 'swiper/react'

const HourlyWeather = () => {
    const { state } = useContext(WeatherContext)
    let _temp = state.settings.temp === 'celsius' ?
        `${state.weather.current.temp_c}°c` :
        `${state.weather.current.temp_f}°f`
    return (
        <Swiper className="hourly" grabCursor={true} loop={false}>
            {
                state.weather.forecast.forecastday[0].hour.map(item => {
                    return (
                        <SwiperSlide key={item.time}>
                            <div>{_temp}</div>
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
