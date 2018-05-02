import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';
import Dashboard from './components/dashboard/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <header className="App-header">
            <img src={"http://static1.squarespace.com/static/551cbdc5e4b0cd11d2597487/t/563e61f4e4b0ef24f55baf8c/1524858856645/?format=1500w"} className="App-logo" alt="logo" />
            <h1 className="App-title">Directory</h1>
          </header>
          <Dashboard />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
