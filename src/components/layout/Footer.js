import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <p className='copyright'>&copy; Craig Puxty 2021</p>
        <p>
          <a
            href='https://www.weatherapi.com/'
            title='Weather API'
            target='_blank'
            rel='noopener noreferrer'
          >
            WeatherAPI.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
