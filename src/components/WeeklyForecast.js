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
  display: flex;
  flex-direction: column;
  margin: 5px;
  border-radius: 5px;
`

const WeeklyForecast = ({ weekForecast }) => {


  return(
    <div>
    
    <Week>
      aefgiaf

    {weekForecast?.length > 0 ?
      weekForecast.map((day) => 

      <Date>{day.time}
      {day.temperature_2m_max}
      {day.temperature_2m_min}
      {day.weathercode}
      </Date>
       
      )
      : null}
    </Week>
  
    </div>
  )
}

export default WeeklyForecast;
