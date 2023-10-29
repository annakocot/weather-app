import React, { useState } from 'react';
import { WEATHER_CODES } from '../consts/weatherCodes';
import styled from 'styled-components'; 

const CityName = styled.h1`
font-size: 18px;`
const Temperature = styled.h2`
font-size: 34px;`
const Description = styled.p`
font-size: 18px;`


const DailyForecast = ({todaysWeather}) => {

  const weatherData = todaysWeather ? todaysWeather[1] : null;

  return (
    <>
    {todaysWeather ?
      <>
      <CityName>{todaysWeather[0].city}</CityName>
        <Temperature>Temperature: {weatherData.temperature_2m}°C</Temperature>
        <p>Apparent temperature: {weatherData.apparent_temperature}°C </p>

        Wind: {weatherData.windspeed_10m} km/h
        <Description>{typeof weatherData.weathercode !== 'undefined' ? `${WEATHER_CODES.find(({code}) => code === weatherData.weathercode).description}` : ''}</Description>
      </>
    : null }
  </> 
  )
}

export default DailyForecast;
