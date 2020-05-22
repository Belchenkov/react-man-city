import React from 'react';
import { Switch } from "react-router-dom";

import PrivateRoute from './components/auth_routes/PrivateRoute';
import PublicRoute from './components/auth_routes/PublicRoutes';

import Layout from "./hoc/Layout";
import Home from "./components/home";
import SignIn from "./components/sign_in";
import Dashboard from "./components/admin/Dashboard";
import AdminMatches from "./components/admin/matches";
import AddEditMatch from "./components/admin/matches/AddEditMatch";
import AdminPlayers from "./components/admin/players";
import AddEditPlayers from "./components/admin/players/AddEditPlayers";
import Team from "./components/team";
import Matches from "./components/matches";
import NotFound from "./components/ui/not_found";

const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <PrivateRoute
                    exact
                    {...props}
                    path="/admin_players/add_players"
                    component={ AddEditPlayers }
                />
                <PrivateRoute
                    exact
                    {...props}
                    path="/admin_players/add_players/:id"
                    component={ AddEditPlayers }
                />
                <PrivateRoute
                    exact
                    {...props}
                    path="/admin_matches/edit_match"
                    component={ AddEditMatch }
                />
                <PrivateRoute
                    exact
                    {...props}
                    path="/admin_matches/edit_match/:id"
                    component={ AddEditMatch }
                />
                <PrivateRoute
                    exact
                    {...props}
                    path="/admin_players"
                    component={ AdminPlayers }
                />
                <PrivateRoute
                    exact
                    {...props}
                    path="/admin_matches"
                    component={ AdminMatches }
                />
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
                {/*<PublicRoute
                    {...props}
                    exact
                    path="/the_team"
                    restricted={false}
                    component={ Team }
                />*/}
                <PublicRoute
                    {...props}
                    exact
                    path="/the_matches"
                    restricted={false}
                    component={ Matches }
                />
                <PublicRoute
                    restricted={false}
                    {...props}
                    exact
                    path="/"
                    component={ Home }
                />
                <PublicRoute
                    restricted={false}
                    {...props}
                    component={ NotFound }
                />
            </Switch>
        </Layout>
    );
};

export default Routes;
