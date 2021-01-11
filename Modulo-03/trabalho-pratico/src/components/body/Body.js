import React, { Component } from 'react';
import Input from '../input/Input';
import css from './body.module.css';

export default class Body extends Component {
  render() {
    return (
      <div>
        <h3 className={css.title}>Transformações</h3>
        <Input title="Texto investido:" icon="content_copy" readOnly />
        <Input title="Texto numérico:" icon="content_copy" />
        <Input title="CSV:" icon="content_copy" />
        <Input title="Slug:" icon="content_copy" />
        <Input title="Somente vogais" icon="content_copy" />
        <Input title="Somente consoantes" icon="content_copy" />
        <Input title="Variável" icon="content_copy" />
      </div>
    );
  }
}
