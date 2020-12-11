import React, { useContext } from 'react'
import { format } from 'date-fns'
import { WeatherContext } from '../../contexts/WeatherContext'
import { Swiper, SwiperSlide, Scrollbar } from 'swiper/react'

const HourlyWeather = () => {
    const { state, dispatch } = useContext(WeatherContext)

    return (


        <Swiper className="hourly" grabCursor={true} loop={false}>
            {
                state.weather.forecast.forecastday[0].hour.map(item => {
                    return (
                        <SwiperSlide key={item.time}>
                            <div>{item.temp_c}&deg;c</div>
                            <img src={item.condition.icon} />
                            <div>{format(new Date(item.time), "H:mm")}</div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper >

    )
}

export default HourlyWeather
