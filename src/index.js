import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './css/main.min.css'
import WeatherContextProvider from './contexts/WeatherContext'

ReactDOM.render(
    <WeatherContextProvider>
        <App />
    </WeatherContextProvider>
    , document.querySelector('#root'))