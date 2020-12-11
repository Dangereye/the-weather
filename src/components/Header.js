import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

const Header = () => {
    const { state, dispatch } = useContext(WeatherContext)
    return (
        <header>
            <div className="container">
                <div className="logo">the weather</div>

            </div>
        </header>
    )
}

export default Header
