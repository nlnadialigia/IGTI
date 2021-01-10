import React from 'react';
import css from './counter.module.css';

export default function Value(props) {
  return <span className={css.counterValue}>{props.value}</span>;
}
