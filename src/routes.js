import React from 'react';
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Home from "./components/home";
import SignIn from "./components/sign_in";

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/sign_in" component={ SignIn } />
            </Switch>
        </Layout>
    );
};

export default Routes;
