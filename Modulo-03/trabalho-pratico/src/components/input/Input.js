import React from 'react';
import css from './input.module.css';

export default function Input({ title, icon, canWrite }) {
  return (
    <>
      <div className="row">
        <label className="active">{title}</label>
        <div className={css.inputField}>
          <input
            id="first_name2"
            type="text"
            className="input-field col s120"
          />
          <i className="material-icons">{icon}</i>
        </div>
      </div>
    </>
  );
}
