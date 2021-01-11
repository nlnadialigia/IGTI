import React, { Component } from 'react';
import css from './input.module.css';

export default class Input extends Component {
  constructor() {
    super();

    this.state = {
      icon: '',
      labelText: '',
    };
  }

  render() {
    const { icon, labelText } = this.state;

    return (
      <>
        <div className="row">
          <label className="active">{labelText}</label>
          <div className={css.inputField}>
            <input
              id="first_name2"
              type="text"
              className="input-field col s12"
            />
            <i className="material-icons">{icon}</i>
          </div>
        </div>
      </>
    );
  }
}
