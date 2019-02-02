import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    const user = {
      firstName: 'Jeff',
      lastName: 'Palmer'
    };
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>{user.firstName} {user.lastName}</h3>
      </div>
    );
  }
}

export default App;
