import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import Routes from './Router/routes';
import history from './history';
import NavLinks from './Components/NavLinks';
import { LoginContext } from './LoginContext';

function App() {
  const [logged, setLogged] = useState(false);

  function setLogin() {
    setLogged(!logged);
  }

  return (
    <div>
      <LoginContext.Provider value={{ logged, setLogin }}>
        <Router history={history}>
          <NavLinks />
          <Routes />
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
