import React from 'react';
import { Switch, Route } from "react-router-dom";

import PrivateRoute from './components/auth_routes/PrivateRoute';

import Layout from "./hoc/Layout";
import Home from "./components/home";
import SignIn from "./components/sign_in";
import Dashboard from "./components/admin/Dashboard";

const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <PrivateRoute exact {...props} path="/dashboard" component={ Dashboard } />
                <Route exact path="/" component={ Home } />
                <Route exact path="/sign_in" component={ SignIn } />
            </Switch>
        </Layout>
    );
};

export default Routes;
