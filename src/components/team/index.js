import React, { Component } from 'react';
import { Fade } from "react-reveal";

import PlayerCard from "../ui/player_card";
import stripes from '../../Resources/images/stripes.png';
import { firebasePlayers, firebase } from "../../firebase";
import { firebaseLopper } from "../ui/misc";

class Team extends Component {
    state = {
        loading: true,
        players: []
    }

    componentDidMount() {
        firebasePlayers.once('value')
            .then(snapshot => {
                const players = firebaseLopper(snapshot);
                let promises = [];

                for(let key in players) {
                    promises.push(
                        new Promise((resolve, reject) => {
                            firebase.storage().ref('players')
                                .child(players[key].image)
                                .getDownloadURL()
                                .then(url => {
                                    players[key].url = url;
                                    resolve();
                                }).catch(err => reject(err));
                        })
                    )
                }

                Promise.all(promises).then(() => {
                    this.setState({
                        loading: false,
                        players
                    });
                })
            })
    }

    showPlayersCategory(category) {
        return this.state.players
            ? this.state.players.map((player, i) => {
                return player.position === category
                    ? <Fade delay={20} left key={i}>
                        <div className="item">
                            <PlayerCard
                                number={player.number}
                                name={player.name}
                                lastname={player.lastname}
                                bck={player.url}
                            />
                        </div>
                      </Fade>
                    : null
            })
            : null
    }

    render() {
        return (
            <div
                className="the_team_container"
                style={{
                    background: `url(${stripes}) repeat`
                }}
            >
                {
                    !this.state.loading
                        ? (
                            <div>
                                <div className="team_category_wrapper">
                                    <div className="title">Keepers</div>
                                    <div className="team_cards">
                                        { this.showPlayersCategory('Keeper') }
                                    </div>
                                </div>

                                <div className="team_category_wrapper">
                                    <div className="title">Defence</div>
                                    <div className="team_cards">
                                        { this.showPlayersCategory('Defence') }
                                    </div>
                                </div>

                                <div className="team_category_wrapper">
                                    <div className="title">Midfield</div>
                                    <div className="team_cards">
                                        { this.showPlayersCategory('Midfield') }
                                    </div>
                                </div>

                                <div className="team_category_wrapper">
                                    <div className="title">Strikers</div>
                                    <div className="team_cards">
                                        { this.showPlayersCategory('Striker') }
                                    </div>
                                </div>
                            </div>
                        )
                        : null
                }
            </div>
        );
    }
}

export default Team;
