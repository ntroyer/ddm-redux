import React, { Component } from 'react';
import styled from 'styled-components';

import Board from "./board/board.component";
import PlayerTest from "./debug/player-test.component";

const Game = styled.div`
    display: flex;
    justify-content: center;
`;

export default class NewGame extends Component {
    constructor(props) {
        super(props);

        // todo - look into sharing objects between components so we can do something like currentPlayer.position and currentPlayer.color
        this.state = {
            currentPlayer: 1,
            currentPlayerColor: "blue"
        }

        this.changePlayer = this.changePlayer.bind(this);
    }

    changePlayer(player, color) {
        console.log('changing player...', color);
        this.setState(state => ({
            currentPlayer: player,
            currentPlayerColor: color
        }));
    }

    render() {
        return (
            <Game>
                <PlayerTest currentPlayer={this.state.currentPlayer} onPlayerChange={this.changePlayer} />
                <Board 
                    currentPlayer={this.state.currentPlayer}
                    currentPlayerColor={this.state.currentPlayerColor}
                    boardX={19}
                    boardY={19}
                />
            </Game>
        )
    }
}