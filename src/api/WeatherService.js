
const WEATHER_API_URL ='https://api.open-meteo.com/v1/forecast?';
const LOCATION_API_URL = 'https://geocoding-api.open-meteo.com/v1/search?';

const WEATHER_API_PRAMS = '&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weathercode,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin&forecast_days=5';

export async function fetchCities(input) {
  try {
    const response = await fetch(`${LOCATION_API_URL}name=${input}&count=5&language=en&forrmat=json`);
    const data = await response.json();

    return data.results;
  } catch (error) { 
    console.error(error);
    return;
  }
}

export async function fetchWeatherData(input) {
  try {
    const latitude = input.value.toString().split(',')[0].trim();
    const longitude = input.value.toString().split(',')[1].trim();
    const response = await fetch(`${WEATHER_API_URL}latitude=${latitude}&longitude=${longitude}${WEATHER_API_PRAMS}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
