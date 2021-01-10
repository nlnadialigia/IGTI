/* eslint-disable no-console */
import React, { Component } from 'react';
import Toggle from './components/Toogle/Toggle';
import Users from './components/Users/Users';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    };
  }

  async componentDidMount() {
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10',
    );

    const json = await res.json();

    this.setState({
      users: json.results,
    });
  }

  handleShowUsers = (isChecked) => {
    this.setState({ showUsers: isChecked });
  };

  render() {
    const { showUsers, users } = this.state;
    return (
      <>
        <h3>React Lifecycle</h3>
        <Toggle
          description="Mostrar usuários"
          enabel={showUsers}
          onToggle={this.handleShowUsers}
        />
        <hr />
        {showUsers && <Users users={users} />}
      </>
    );
  }
}
