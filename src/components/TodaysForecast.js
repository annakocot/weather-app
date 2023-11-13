import React, { useState } from 'react';
import styled from 'styled-components'; 
import { resolveWeatherCode, resolveWeatherIcon } from '../helpers/WeatherHelper';

const CityName = styled.h1`
font-size: 3.2rem;`
const Temperature = styled.h2`
font-size: 4.4rem;`
const Description = styled.p`
font-size: 18px;`
const TodayForecastContainer = styled.div`
  width: 96rem;
  margin: 0 auto;
  box-shadow:
  0 0 #ffffff,
  0 0 #ffffff,
  0 25px 50px -12px rgba(71, 70, 79, 0.25);
  padding: 1rem 3rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
`;
const TemperatureIcon =  styled.div`
  background: url(${ process.env.PUBLIC_URL + '/icons/thermometer-half.svg'});
  background-repeat: no-repeat;
  background-position: center;
  height: 4rem;
  width: 4rem;

`;
const WindIcon = styled.div`
background: url(${ process.env.PUBLIC_URL + '/icons/air-sock.svg'});
  background-repeat: no-repeat;
  background-position: center;
  height: 4rem;
  width: 4rem;
`
const Wind = styled.div`
display: flex;
flex-direction: row;`


const TodaysForecast = ({todaysWeather}) => {

  const weatherDesc = todaysWeather ? resolveWeatherCode(todaysWeather) : '';

  return (
    <TodayForecastContainer>
    {todaysWeather ?
      <>
      <div>
      <CityName>{todaysWeather.city}</CityName>
      <p>{ weatherDesc }</p>
      <TemperatureIcon /><Temperature>{todaysWeather.temperature_2m}°C</Temperature>
      </div>
        <Description>
          <p>Feels like: {todaysWeather.apparent_temperature}°C </p>
          <Wind><WindIcon /> {todaysWeather.windspeed_10m} km/h</Wind>
          
          { resolveWeatherIcon(todaysWeather)}
       </Description>
      </>
      : null }
    </TodayForecastContainer> 
  )
}

export default TodaysForecast;
