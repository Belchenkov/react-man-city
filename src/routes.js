import React from 'react';
import { Switch, Route } from "react-router-dom";

import PrivateRoute from './components/auth_routes/PrivateRoute';
import PublicRoute from './components/auth_routes/PublicRoutes';

import Layout from "./hoc/Layout";
import Home from "./components/home";
import SignIn from "./components/sign_in";
import Dashboard from "./components/admin/Dashboard";

const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <PrivateRoute
                    exact
                    {...props}
                    path="/dashboard"
                    component={ Dashboard }
                />
                <PublicRoute
                    {...props}
                    exact
                    path="/sign_in"
                    restricted={true}
                    component={ SignIn }
                />
                <PublicRoute
                    restricted={false}
                    {...props}
                    exact
                    path="/"
                    component={ Home }
                />
            </Switch>
        </Layout>
    );
};

export default Routes;
