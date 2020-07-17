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
    }

    render() {
        return (
            <Game>
                <PlayerTest />
                <Board 
                    boardX={19}
                    boardY={19}
                />
            </Game>
        )
    }
}