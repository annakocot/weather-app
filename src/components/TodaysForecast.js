import React, { useState } from 'react';
import styled from 'styled-components'; 
import {resolveWeatherCode} from '../helpers/WeatherHelper';

const CityName = styled.h1`
font-size: 18px;`
const Temperature = styled.h2`
font-size: 34px;`
const Description = styled.p`
font-size: 18px;`
const TodayForecastContainer = styled.div`
  width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const TodaysForecast = ({todaysWeather}) => {

  const weatherDesc = todaysWeather ? resolveWeatherCode(todaysWeather) : '';

  return (
    <TodayForecastContainer>
    {todaysWeather ?
      <>
      <CityName>{todaysWeather.city}</CityName>
        <Temperature>Temperature: {todaysWeather.temperature_2m}°C</Temperature>
        <Description>
        <p>Apparent temperature: {todaysWeather.apparent_temperature}°C </p>

        Wind: {todaysWeather.windspeed_10m} km/h
       { weatherDesc}</Description>
      </>
      : null }
    </TodayForecastContainer> 
  )
}

export default TodaysForecast;
