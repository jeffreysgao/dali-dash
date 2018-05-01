import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"http://static1.squarespace.com/static/551cbdc5e4b0cd11d2597487/t/563e61f4e4b0ef24f55baf8c/1524858856645/?format=1500w"} className="App-logo" alt="logo" />
          <h1 className="App-title">Directory</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Dashboard />
      </div>
    );
  }
}

export default App;
