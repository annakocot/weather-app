import React from 'react';
import styled from 'styled-components';
import {resolveWeatherCode} from '../helpers/WeatherHelper';
import { WEATHER_ICONS } from '../consts/weatrherIcons';

const Week = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  `

const Weekday = styled.div`
  width: 15rem;
  height: 20rem;
  background-color: ${({theme}) => theme.secondaryContainer};
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-radius: .8rem;
  padding: 2rem;
  font-size: 1.6rem;
`

const WeeklyForecast = ({ weekForecast }) => {


  return( 
    <Week>
    {weekForecast?.length > 0 ?
      weekForecast.map((day) => 
      <Weekday>{day.time}
      {day.temperature_2m_max}
      {day.temperature_2m_min}
      <p>{resolveWeatherCode(day)}</p>
      <img src={resolveWeatherCode(day) in WEATHER_ICONS?
                `${ process.env.PUBLIC_URL + WEATHER_ICONS[resolveWeatherCode(day)]}` : `${ process.env.PUBLIC_URL + '/icons/cloud.svg'}`}
                />
      </Weekday> 
      )
      : null}
    </Week>
  )
}

export default WeeklyForecast;
