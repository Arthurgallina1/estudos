import React from 'react';
import './App.css';
import Routes from './Router/routes'
import { Router } from 'react-router-dom';
import history from './history';
import NavLinks from './Components/NavLinks'

function App() {
  return (
    <div>
    <Router history={history}>
        <NavLinks />
        <Routes/>
    </Router>
    </div>
  );
}

export default App;
