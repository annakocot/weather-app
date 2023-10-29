import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'; 
import WeeklyForecast from './weekly-forecast/WeeklyForecast';
import { WEATHER_CODES } from '../../consts/weatherCodes';
import { WiStrongWind } from 'react-icons/wi';
import SearchBar from './SearchBar';
import { transformDateFormat } from '../../helpers/DateHelper';
import { fetchWeatherData } from '../../api/WeatherService';
import { getTodayForecast } from '../../helpers/WeatherHelper';
import DailyForecast from '../DailyForecast';

const Container = styled.div`
 font-family: ${props => props.theme.fonts[0]};
width: 100%;
margin: 0 auto;`

const Main = () => {
  const [query, setQuery] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});
  const [nextDaysWeather, setNextDaysWeather] = useState({});

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
      const todayWeatherResponse =
        await fetchWeatherData(enteredData);
      const todayForecastValues = getTodayForecast(todayWeatherResponse);

      setTodayForecast(todayForecastValues);
      setTodayWeather([{ city: enteredData.label }, todayForecastValues]);
    } catch (error) {
      setError(true);
      console.error(error)
    }

    setIsLoading(false);
  };

  const ref = useRef();
  useEffect(() => {
    ref.current = query; 
  },[query]); 
  
  return (
    <Container>
      <SearchBar
      onInputChange={searchChangeHandler}
      />
   <DailyForecast 
    todaysWeather={todayWeather}
   />
    <WeeklyForecast
    weeklyWeather={nextDaysWeather}
    ></WeeklyForecast>
    </Container>
  )
}

export default Main;
