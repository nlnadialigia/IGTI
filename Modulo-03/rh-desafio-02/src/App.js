/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredPopulation, setFilteredPopulation] = useState(0);
  const [userfilter, setUserFilter] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetch('https://restcountries.eu/rest/v2/all');
      const json = await data.json();

      const mapAllCountries = json.map(
        ({ name, numericCode, flag, population }) => {
          return {
            id: numericCode,
            name,
            filterName: name.toLowerCase(),
            flag,
            population,
          };
        },
      );

      const populationCount = calculateTotalPopulationFrom(mapAllCountries);

      setAllCountries(mapAllCountries);
      setFilteredCountries(Object.assign([], mapAllCountries));
      setFilteredPopulation(populationCount);
    };

    getCountries();
  }, []);

  const calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((acc, current) => {
      return acc + current.population;
    }, 0);

    return totalPopulation;
  };

  const handleChangeFilter = (newText) => {
    setUserFilter(newText);

    const filterLowerCase = newText.toLowerCase();

    const newFilteredCountries = allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase);
    });

    const populationCount = calculateTotalPopulationFrom(newFilteredCountries);

    setFilteredCountries(newFilteredCountries);
    setFilteredPopulation(populationCount);
  };

  return (
    <div className="container">
      <h2 style={style.centeredTitle}>React Countries</h2>
      <Header
        filter={userfilter}
        countryCount={filteredCountries.length}
        populationCount={filteredPopulation}
        onChangeFilter={handleChangeFilter}
      />
      <Countries countries={filteredCountries} />
    </div>
  );
}

const style = {
  centeredTitle: {
    textAlign: 'center',
    color: 'red',
  },
};
