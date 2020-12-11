import React from 'react'
import WeatherDetails from './weather-details/WeatherDetails'
import WeatherOverview from './WeatherOverview'

const Main = () => {
    return (
        <main>
            <div className="container">
                <WeatherOverview />
                <WeatherDetails />
            </div>
        </main>
    )
}

export default Main
