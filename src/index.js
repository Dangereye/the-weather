import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.scss';
import WeatherContextProvider from './contexts/WeatherContext';

ReactDOM.render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>,
  document.querySelector('#root')
);
