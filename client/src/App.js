import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropertyInput from './Containers/PropertyInput/PropertyInput';
import PropertySummary from './Containers/PropertySummary/PropertySummary';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Multifamily Analysis
          </p>
        </header>
        <div>
          <Route exact path="/" component={PropertyInput} />
          <Route exact path="/propertySummary" component={PropertySummary} />
        </div>
      </div>
    </Router>
  );
}
