import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropertyInput from './Containers/PropertyInput/PropertyInput';
import PropertySummary from './Containers/PropertySummary/PropertySummary';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <p>
              Multifamily Analysis
            </p>
          </Link>
        </header>
        <div>
          <Route exact path="/" component={PropertyInput} />
          <Route exact path="/propertySummary" component={PropertySummary} />
        </div>
      </div>
    </Router>
  );
}
