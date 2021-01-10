import React, { Component } from 'react';
import css from './header.module.css';
import { formatNumber } from '../../helpers/formtHelpers';

export default class Header extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;

    this.props.onChangeFilter(newText);
  };

  render() {
    const { filter, countryCount, populationCount } = this.props;
    return (
      <div className={css.headerContainer}>
        <input
          placeholder="Filtro"
          type="text"
          className={css.choice}
          value={filter}
          onChange={this.handleInputChange}
        />
        |
        <span className={css.style}>
          Quantidade de países: <strong>{countryCount}</strong>
        </span>
        |
        <span className={css.style}>
          População total: <strong>{formatNumber(populationCount)}</strong>
        </span>
      </div>
    );
  }
}
