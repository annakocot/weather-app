import React, { useState } from 'react';
import styled from 'styled-components'; 
import { resolveWeatherCode } from '../helpers/WeatherHelper';
import { WEATHER_ICONS } from '../consts/weatrherIcons';

const CityName = styled.h1`
text-align: right;
font-size: 3.2rem;`
const Temperature = styled.div`
display: flex;
flex-direction: row;
font-size: 4.4rem;`
const Description = styled.p`
font-size: 18px;`
const TodayForecastContainer = styled.div`
  width: 92rem;
  margin: 0 auto;
  box-shadow:
  0 0 #ffffff,
  0 0 #ffffff,
  0 25px 50px -12px rgba(71, 70, 79, 0.25);
  padding: 1rem 6rem;
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
      <div>{ weatherDesc }</div>
      <Temperature><TemperatureIcon />{todaysWeather.temperature_2m}°C</Temperature>
      </div>
        <Description>
          <div>Feels like: {todaysWeather.apparent_temperature}°C </div>
          <Wind><WindIcon /> {todaysWeather.windspeed_10m} km/h</Wind>
          <img src={weatherDesc in WEATHER_ICONS?
                `${ process.env.PUBLIC_URL + WEATHER_ICONS[weatherDesc]}` : `${ process.env.PUBLIC_URL + '/icons/cloud.svg'}`}
                />
       </Description>
      </>
      : null }
    </TodayForecastContainer> 
  )
}

export default TodaysForecast;
