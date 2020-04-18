import React, { Component } from 'react';

import { firebaseMatches } from "../../../firebase";
import { firebaseLopper, reverseArray } from "../../ui/misc";

class Blocks extends Component {
    state = {
        matches: []
    };

    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value')
            .then(snapshot => {
                this.setState({
                    matches: reverseArray(firebaseLopper(snapshot))
                })
            });
    }

    showMatches = () => (
      <div>1</div>
    );

    render() {
        return (
            <div className="home_matches">
                { this.showMatches(this.state.matches) }
            </div>
        );
    }
}

export default Blocks;