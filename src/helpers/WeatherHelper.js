import { WEATHER_CODES } from '../consts/weatherCodes';

export const getWeekForecast = (response) => {
  if (!response || Object.keys(response).length === 0) {
    return [];
  }

  const data = response.daily;
  const length = data.time.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(convertToSingleDay(data, i));
  }

  return result;
};

  export const getTodayForecast = (response) => {
    if (!response || Object.keys(response).length === 0) {
      return [];
     }
    return response.current;
  };

  export const convertToSingleDay = (data, index) => {
    return {
      time: data.time[index],
      weathercode: data.weathercode[index],
      temperature_2m_max: data.temperature_2m_max[index],
      temperature_2m_min: data.temperature_2m_min[index],
      apparent_temperature_max: data.apparent_temperature_max[index],
      apparent_temperature_min: data.apparent_temperature_min[index],
      sunrise: data.sunrise[index],
      sunset: data.sunset[index],
      uv_index_max: data.uv_index_max[index],
      precipitation_sum: data.precipitation_sum[index],
      rain_sum: data.rain_sum[index],
      showers_sum: data.showers_sum[index],
      snowfall_sum: data.snowfall_sum[index],
      precipitation_hours: data.precipitation_hours[index],
      precipitation_probability_max: data.precipitation_probability_max[index],
      windspeed_10m_max: data.windspeed_10m_max[index],
      winddirection_10m_dominant: data.winddirection_10m_dominant[index]
    }
  }

export const resolveWeatherCode = (input) => {
  const weatherCode = WEATHER_CODES.find(({code}) => code === input.weathercode);
  return weatherCode.description;
}

// TODO:
export const resolveWeatherIcon = (input) => {
  const weatherCode = WEATHER_CODES.find(({code}) => code === input.weathercode);
  switch (weatherCode) {
    case 0:
    case 1:
      return <div className="sun">sun</div>
    case 3:
      return <div className="cloud">cloud</div>
    case 45:
    case 48:
      return <div className="fog">fog</div>
    case 51:
      return <div className="cloud">drizzle</div>

  }
}
