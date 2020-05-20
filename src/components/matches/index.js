import React, { Component } from 'react';
import { CircularProgress } from "@material-ui/core";

import { firebaseMatches } from "../../firebase";
import { firebaseLopper, reverseArray } from "../ui/misc";
import LeagueTable from "./TableMatches";
import MatchesList from "./MatchesList";

class Matches extends Component {
    state = {
        loading: true,
        matches: [],
        filterMatches: [],
        playerFilter: 'All',
        resultFilter: 'All'
    }

    componentDidMount() {
        firebaseMatches.once('value')
            .then(snapshot => {
                const matches = firebaseLopper(snapshot);

                this.setState({
                    loading: false,
                    matches: reverseArray(matches),
                    filterMatches: reverseArray(matches)
                });
            });
    }

    render() {
        const state = this.state;

        return (
            <div className="the_matches_container">
                <div className="the_matches_wrapper">
                    <div className="left">
                        <div className="match_filters">

                        </div>
                        <MatchesList matches={state.filterMatches} />
                    </div>
                    <div className="right">
                        <LeagueTable />
                    </div>
                </div>
            </div>
        );
    }
}

export default Matches;
