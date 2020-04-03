import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CompUm from './Components/CompUm';
import CompD from './Components/CompD';

export default function Routes() {
    return (
            <Switch>
                <Route path="/" exact component={CompUm}/>
                <Route path="/c2/:id" exact component={CompD}/>
            </Switch>
    )
}
