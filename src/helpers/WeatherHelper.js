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

  export const getTodayForecast = (
    response,
  ) => {

    if (!response || Object.keys(response).length === 0)
      return [];
    else {
        return response.current;
      };
  };
