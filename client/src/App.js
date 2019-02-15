import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import configureStore from './store';
import './App.css';
import PropertyInput from './containers/PropertyInput/PropertyInput';
import PropertySummary from './containers/PropertySummary/PropertySummary';

export default function App() {
  return (
    <Provider store={configureStore()}>
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
    </Provider>
  );
}
