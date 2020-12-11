import React, { createContext, useReducer } from 'react'

export const WeatherContext = createContext()

const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'GET_CURRENT':
            return { ...state, weather: action.payload, loading: false }
        case 'SET_LOCATION':
            return { ...state, location: action.payload }
        case 'SHOW_DETAILS':
            return { ...state, details: true }
        case 'HIDE_DETAILS':
            return { ...state, details: false }
        default:
            return state
    }
}

const WeatherContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(weatherReducer,
        {
            location: null,
            weather: null,
            loading: true,
            details: false
        })

    return (
        <WeatherContext.Provider value={{ state, dispatch }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider
