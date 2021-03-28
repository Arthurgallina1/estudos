import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import CompUm from '../Components/CompUm';
import CompD from '../Components/CompD';
import ComponenteQ from '../Components/ComponenteQ';
import Comp5 from '../Components/Comp5';
import CompUseRef from '../Components/ComponenteUseRef';
import Protected from '../Components/Protected';
import PrivateRoute from './PrivateRoute';
import { LoginContext } from '../LoginContext';
import Comp6 from '../Components/Comp6Error';
import ForwardRef from '../Components/ForwardRef';

export default function Routes() {
  const { logged } = useContext(LoginContext);
  return (
    <Switch>
      <Route path="/" exact component={CompUm} />
      <Route path="/c2/:id" exact component={CompD} />
      <Route path="/c3" component={ComponenteQ} />
      <Route path="/c5" component={Comp5} />
      <Route path="/useref" component={CompUseRef} />
      <Route path="/c6" component={Comp6} />
      <Route path="/fref" component={ForwardRef} />
      <PrivateRoute path="/protected" auth={logged}>
        <Protected />
      </PrivateRoute>
      <Route path="*">
        <h1> 404 ! </h1>
      </Route>
    </Switch>
  );
}
