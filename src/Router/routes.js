import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CompUm from '../Components/CompUm';
import CompD from '../Components/CompD';
import Protected from '../Components/Protected';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
    return (
            <Switch>
                <Route path="/" exact component={CompUm}/>
                <Route path="/c2/:id" exact component={CompD}/>
                <PrivateRoute path="/protected" auth={true}>
                    <Protected />  
                </PrivateRoute>
                <Route path="*">
                     <h1> 404 ! </h1> 
                </Route>
                

            </Switch>
    )
}
