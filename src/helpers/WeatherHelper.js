export const getWeekForecastWeather = (response, descriptions_list) => {
  let foreacast_data = [];
  let descriptions_data = [];
  let dayAvgsList = response


  if (!response || Object.keys(response).length === 0)
    return [];
  else {
    // TODO: resolve weather api response, weathercodes
  }

    return dayAvgsList;
  };

  export const getTodayForecastWeather = (
    response,
  ) => {
    let all_today_forecasts = [];
    console.log(response, 'res')
  
    if (!response || Object.keys(response).length === 0)
      return [];
    else {

      Object.entries(response.current).forEach((key, i) => {
        all_today_forecasts.push([key, i])
      });

      console.log(all_today_forecasts)
        return all_today_forecasts;
      };
  };
