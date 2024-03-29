import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';

export default function PrivateRoute({path, component: Component, ...props}) {
    console.log(props);
    return localStorage.token
        ? <Route exact path={path} render={(routerProps) => <Component {...props} />} /> 
        : <Redirect to="/signup" />
}