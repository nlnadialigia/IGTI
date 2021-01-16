/* eslint-disable no-console */
import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: '',
    };
  }

  async componentDidMount() {
    const data = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await data.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        filterName: name.toLowerCase(),
        flag,
        population,
      };
    });

    const filteredPopulation = this.calculateTotalPopulationFrom(allCountries);

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation,
    });
  }

  calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((acc, current) => {
      return acc + current.population;
    }, 0);

    return totalPopulation;
  };

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });

    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = this.state.allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase);
    });

    const filteredPopulation = this.calculateTotalPopulationFrom(
      filteredCountries,
    );

    this.setState({
      filteredCountries,
      filteredPopulation,
    });
  };

  render() {
    const { filteredCountries, filter, filteredPopulation } = this.state;

    return (
      <div className="container">
        <h2 style={style.centeredTitle}>React Countries</h2>
        <Header
          filter={filter}
          countryCount={filteredCountries.length}
          populationCount={filteredPopulation}
          onChangeFilter={this.handleChangeFilter}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}

const style = {
  centeredTitle: {
    textAlign: 'center',
    color: 'red',
  },
};
