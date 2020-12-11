import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import WeatherContextProvider from './contexts/WeatherContext'

const App = () => {
    return (
        <WeatherContextProvider>
            <div className='app'>
                <Header />
                <Main />
                <Footer />
            </div >
        </WeatherContextProvider>
    )
}

export default App
