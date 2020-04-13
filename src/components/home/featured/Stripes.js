import React, { Component } from 'react';
import { easePolyInOut } from "d3-ease";
import { Animate } from "react-move";

class Stripes extends Component {
    showStripes = () => {
        return 'stripes';
    }

    render() {
        return (
            <div className="featured_stripes">
                { this.showStripes() }
            </div>
        );
    }
}

export default Stripes;