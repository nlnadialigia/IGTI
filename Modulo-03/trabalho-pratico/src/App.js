import React, { Component } from 'react';
import Body from './components/body/Body';
import Header from './components/header/Header';
import Input from './components/input/Input';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
    };
  }

  render() {
    return (
      <>
        <Header />
        <Body />
      </>
    );
  }
}
