import React, { useState } from "react";
import { fetchCities } from "../../api/WeatherService";
import AsyncSelect from 'react-select/async';

const SearchBar = ({onInputChange}) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return citiesList.map(city => {
      return {
        value: `${city.latitude}, ${city.longitude}`,
        label: `${city.name}, ${city.country_code}`
      };
    });
  }

  const valueChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onInputChange(enteredData);
  }

  return (
    <AsyncSelect
    placeholder="Find your city"
    debounceTimeout={600}
    value={searchValue}
    onChange={valueChangeHandler}
    loadOptions={loadOptions} />
  );
}

export default SearchBar;