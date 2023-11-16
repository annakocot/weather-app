import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'; 
import WeeklyForecast from './WeeklyForecast';
import SearchBar from './SearchBar';
import { transformDateFormat } from '../helpers/DateHelper';
import { fetchWeatherData } from '../api/WeatherService';
import { getTodayForecast, getWeekForecast } from '../helpers/WeatherHelper';
import TodaysForecast from './TodaysForecast';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const Main = () => {
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState(null);
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  const searchChangeHandler = async (enteredData) => {
    setIsLoading(true);

    const currentDate = transformDateFormat();
    const date = new Date();
    let dt_now = Math.floor(date.getTime() / 1000);

    try {
      const weatherResponse =
        await fetchWeatherData(enteredData);
      const todayForecastValues = getTodayForecast(weatherResponse);
      const weekWeatherValues = getWeekForecast(weatherResponse);

      setTodayForecast(todayForecastValues);
      setTodayWeather({ city: enteredData.label , ...todayForecastValues});
      setWeekForecast(weekWeatherValues);
    } catch (error) {
      setError(true);
      console.error(error)
    }

    setIsLoading(false);
  };

  return (
    <Container>
      <SearchBar
      onInputChange={searchChangeHandler}
      />
      <TodaysForecast 
        todaysWeather={todayWeather}
      />
      <WeeklyForecast
      weekForecast={weekForecast}
      ></WeeklyForecast>
    </Container>
  )
}

export default Main;
 