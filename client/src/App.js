import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropertyInput from './Containers/PropertyInput/PropertyInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Multifamily Analysis
          </p>
        </header>
        <PropertyInput />
      </div>
    );
  }
}

export default App;
