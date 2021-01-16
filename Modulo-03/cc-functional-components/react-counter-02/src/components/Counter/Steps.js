import React from 'react';
import css from './counter.module.css';

export default function Steps({ currentSteps }) {
  return <span className={css.counterValue}>({currentSteps})</span>;
}
