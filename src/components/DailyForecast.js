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

  return (
    <>
    {todaysWeather ?
      <>
      {console.log(todaysWeather)}
      <CityName>{todaysWeather.city}</CityName>
        <Temperature>Temperature: {todaysWeather.temperature_2m}°C</Temperature>
        <p>Apparent temperature: {todaysWeather.apparent_temperature}°C </p>

        Wind: {todaysWeather.windspeed_10m} km/h
        <Description>{typeof todaysWeather.weathercode !== 'undefined' ? `${WEATHER_CODES.find(({code}) => code === todaysWeather.weathercode).description}` : ''}</Description>
      </>
    : null }
  </> 
  )
}

export default DailyForecast;
