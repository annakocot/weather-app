import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'; 
import WeeklyForecast from './weekly-forecast/WeeklyForecast';
import { WEATHER_CODES } from '../../consts/weatherCodes';
import { WiStrongWind } from 'react-icons/wi';
import SearchBar from './SearchBar';
import { transformDateFormat } from '../../helpers/DateHelper';
import { fetchWeatherData } from '../../api/WeatherService';
import { getTodayForecastWeather, getWeekForecastWeather } from '../../helpers/WeatherHelper';

const Container = styled.div`
 font-family: ${props => props.theme.fonts[0]};
width: 100%;
margin: 0 auto;`
const CityName = styled.h1`
font-size: 18px;`
const Temperature = styled.h2`
font-size: 34px;`
const Description = styled.p`
font-size: 18px;`

const Main = () => {
  const [query, setQuery] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});
  const [nextDaysWeather, setNextDaysWeather] = useState({});

  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  const searchChangeHandler = async (enteredData) => {
    setIsLoading(true);

    const currentDate = transformDateFormat();
    const date = new Date();
    let dt_now = Math.floor(date.getTime() / 1000);

    try {
      // const weekForecastResponse = {}
      const todayWeatherResponse =
        await fetchWeatherData(enteredData);
      const all_today_forecasts_list = getTodayForecastWeather(
        todayWeatherResponse,
        currentDate,
        dt_now
      );
      console.log(all_today_forecasts_list);

      // const all_week_forecasts_list = getWeekForecastWeather(
      //   weekForecastResponse,
      //   WEATHER_CODES,
      // );

      setTodayForecast([...all_today_forecasts_list]);
      setTodayWeather({ city: enteredData.label, ...todayWeatherResponse });
      // setWeekForecast({
      //   city: enteredData.label,
      //   list: all_week_forecasts_list,
      // });
    } catch (error) {
      setError(true);
      console.error(error)
    }

    setIsLoading(false);
  };


  // const search = evt => {
  //   if (evt.key === "Enter") {
  //     fetch(`${locationAPI.base}name=${query}&count=1&language=en&forrmat=json`)
  //     .then(response => response.json())
  //     .then(location => {
  //       setCurrentWeather('')
  //       return fetch(`${weatherAPI.base}latitude=${location.results[0].latitude}&longitude=${location.results[0].longitude}&&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&current_weather=true& forecast_days=8`)
  // })
  //     .then(res => res.json())
  //     .then(result => {
  //       setCurrentWeather(result.current_weather);
  //       setNextDaysWeather(result.daily)
  //       console.log(currentWeather)
  //       setQuery('');
  //     })
  //     .catch(err => {
  //       console.error('Request failed:', err)
  //       setCurrentWeather({});
  //     });
  //   }
  // }

  const ref = useRef();
  useEffect(() => {
    ref.current = query; 
  },[query]); 
  
  return (
    <Container>
      <SearchBar
      onInputChange={searchChangeHandler}
      />
           {/* <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Find your city"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div> */}
    <CityName>{ !currentWeather.temperature ? `${ref.current} is not a city :(` : `${ref.current}`}</CityName>
    {typeof currentWeather !== 'undefined' ? 
    <>
      <Temperature>{currentWeather.temperature ? `${currentWeather.temperature}°C`: ''}</Temperature>
     <WiStrongWind style={{fontSize: '30px'}}/> 
     Wind: {currentWeather.windspeed ? `${currentWeather.windspeed}km/h` : ''}
      <Description>{typeof currentWeather.weathercode !== 'undefined' ? `${WEATHER_CODES.find(({code}) => code === currentWeather.weathercode).description}` : ''}</Description>
    </>
    : null}
    <WeeklyForecast
    weeklyWeather={nextDaysWeather}
    ></WeeklyForecast>
    </Container>
  )
}

export default Main;