import React, { Component } from 'react';
import Input from '../input/Input';
import css from './header.module.css';

export default class Header extends Component {
  canWrite = true;

  render() {
    return (
      <>
        <h3 className={css.title}>react-text-transformer</h3>
        <Input title="Digite um texto qualquer:" />
      </>
    );
  }
}
