import React from 'react';
import styled from 'styled-components';

const Week = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  `

const Date = styled.div`
  width: 100px;
  height: 200px;
  background-color: #c5cbd4;
  display: block;
  flex-direction: column;
  margin: 5px;
  border-radius: 5px;
`

const WeeklyForecast = ({weeklyWeather}) => {
  return(
    <>
    <Week>
    {weeklyWeather.time ? weeklyWeather.time.map((day) => {
        <Date>

          <p>{day}</p>
          
        </Date>})
  : null}
    </Week>
    </>
  )
}

export default WeeklyForecast;
