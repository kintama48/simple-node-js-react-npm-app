import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SQA Final Project!</h1>
          <h2>This is a dummy application to test Jenkins!</h2>
        </header>
      </div>
    );
  }
}

export default App;
