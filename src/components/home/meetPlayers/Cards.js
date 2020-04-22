import React, { Component } from 'react';
import { easePolyInOut } from "d3-ease";
import { Animate } from "react-move";

import Otamendi from '../../../Resources/images/players/Otamendi.png';

class HomeCards extends Component {
    state = {
        cards: [
            { bottom: 90, left: 300 },
            { bottom: 60, left: 200 },
            { bottom: 30, left: 100 },
            { bottom: 0, left: 0 }
        ]
    };

    showAnimateCards = () => {
        return this.state.cards.map((card, i) => (
            <Animate
                key={i}
                show={this.props.show}
                start={{ left: 0, bottom: 0}}
                enter={{
                    left: [card.left],
                    bottom: [card.bottom],
                    timing: {duration: 500, ease: easePolyInOut}
                }}
            >
                {({ left, bottom }) => {
                    return (
                        <div
                            style={{
                                position: 'absolute',
                                left,
                                bottom
                            }}
                        >
                            div
                        </div>
                    );
                }}
            </Animate>
        ));
    };

    render() {
        return (
            <div>
                { this.showAnimateCards() }
            </div>
        );
    }
}

export default HomeCards;