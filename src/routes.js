import React from 'react';
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Home from "./components/home";
import SignIn from "./components/sign_in";
import Dashboard from "./components/admin/Dashboard";

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/sign_in" component={ SignIn } />
                <Route exact path="/dashboard" component={ Dashboard } />
            </Switch>
        </Layout>
    );
};

export default Routes;
