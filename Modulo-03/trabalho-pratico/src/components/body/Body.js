import React, { Component } from 'react';
import Input from '../input/Input';
import css from './body.module.css';

export default class Body extends Component {
  render() {
    return (
      <div>
        <h3 className={css.title}>Transformações</h3>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    );
  }
}
