import React from 'react';
import './App.css';
import Routes from './routes'
import { Router } from 'react-router-dom';
import history from './history';

function App() {
  return (
    <div>
    <Router history={history}>
        <Routes/>
    </Router>
    </div>
  );
}

export default App;
