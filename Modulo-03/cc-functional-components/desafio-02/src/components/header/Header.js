import React from 'react';
import css from './header.module.css';
import { formatNumber } from '../../helpers/formtHelpers';

export default function Header({
  onChangeFilter,
  filter,
  countryCount,
  populationCount,
}) {
  const handleInputChange = (event) => {
    const newText = event.target.value;

    onChangeFilter(newText);
  };

  return (
    <div className={css.headerContainer}>
      <input
        placeholder="Filtro"
        type="text"
        className={css.choice}
        value={filter}
        onChange={handleInputChange}
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
