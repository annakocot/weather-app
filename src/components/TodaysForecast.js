import React, { useState } from 'react';
import styled from 'styled-components'; 
import { resolveWeatherCode } from '../helpers/WeatherHelper';
import { WEATHER_ICONS } from '../consts/weatrherIcons';

const TodayForecastContainer = styled.div`
  width: 92rem;
  margin: 0 auto;
  box-shadow:
  0 0 #ffffff,
  0 0 #ffffff,
  0 25px 50px -12px rgba(71, 70, 79, 0.25);
  padding: 6rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
`;
const Description = styled.div`
  display: flex;
  align-items: right;
  flex-direction: column;
  width: 30rem;
  order: 2;
  margin-right: 5rem;
`;

const CityName = styled.h1`
  text-align: right;
  font-size: 3.2rem;
  margin: 0;
`;
const Temperature = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 4.4rem;
  position: relative;
  justify-content: right;
  &::before {
    content: url(${ process.env.PUBLIC_URL + '/icons/thermometer-half.svg'});
    background-repeat: no-repeat;
    background-position: center;
    height: 8rem;
    width: 8rem;
    position: absolute;
    top: .2rem;
    left: 15.5rem;
  }
`;
const WeatherIcon = styled.img`
  height: 15rem;
  width: 15rem;
  margin-left: auto;
`;
const Details = styled.div`
  margin-top: auto;
  font-size: 2.2rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-family: 'PT Sans Narrow', 'sans-serif';
  line-height: .7;
  margin-left: 3rem;
`;
const Wind = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: 2.5rem;
  margin-bottom: 2rem;
  &::before {
    content: url(${ process.env.PUBLIC_URL + '/icons/air-sock.svg'});
    background-repeat: no-repeat;
    background-position: center;
    height: 8rem;
    width: 8rem;
    position: absolute;
    top: -0.5rem;
    left: -3rem;
  }
`;
const Humidity = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: 2.5rem;
  margin-bottom: 2rem;
  &::before {
    content: url(${ process.env.PUBLIC_URL + '/icons/raindrop.svg'});
    background-repeat: no-repeat;
    background-position: center;
    height: 8rem;
    width: 8rem;
    position: absolute;
    top: -0.7rem;
    left: -3.2rem;
  }
`;

const TodaysForecast = ({todaysWeather}) => {
  const weatherDesc = todaysWeather ? resolveWeatherCode(todaysWeather) : '';

  return (
    <TodayForecastContainer>
    {todaysWeather ?
      <>
      <Description>
      <CityName>{todaysWeather.city}</CityName>
      <WeatherIcon src={weatherDesc in WEATHER_ICONS ?
                `${process.env.PUBLIC_URL + WEATHER_ICONS[weatherDesc]}` : `${process.env.PUBLIC_URL + '/icons/cloud.svg'}`}
                />
      <Temperature>{todaysWeather.temperature_2m}°C</Temperature>
      </Description>
        <Details>
          <Wind>{todaysWeather.windspeed_10m} km/h</Wind>
        <Humidity>{todaysWeather.relativehumidity_2m}</Humidity>
        <div style={{mariginLeft: 350}}>Feels like {todaysWeather.apparent_temperature}°C 
        <p>{todaysWeather.showers > 0 ? 'Possible rainshowers' : ''}</p>
        <p>{todaysWeather.rain > 0 ? `Rain: ${todaysWeather.rain}mm` : ''}</p>
        <p>{todaysWeather.snow > 0 ? `Snow: ${todaysWeather.snow}mm` : ''}</p>
        </div>
       </Details>
      </>
      : null }
    </TodayForecastContainer> 
  )
}

export default TodaysForecast;
