import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import Routes from './Router/routes';
import history from './history';
import NavLinks from './Components/NavLinks';
import { LoginContext } from './LoginContext';
import ErrorBoundaries from './Components/Comp6Error/Boundaries';

function App() {
  const [logged, setLogged] = useState(false);
  const [active, setActive] = useState(0);

  function setLogin() {
    setLogged(!logged);
  }
  function actFunc(n) {
    setActive(n);
  }

  return (
    <div>
      <LoginContext.Provider value={{ logged, setLogin, active, actFunc }}>
        <ErrorBoundaries>
          <Router history={history}>
            <NavLinks />
            <Routes />
          </Router>
        </ErrorBoundaries>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
