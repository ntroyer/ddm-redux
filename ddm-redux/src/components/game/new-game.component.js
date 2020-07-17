import React, { Component } from 'react';
import Board from "./board/board.component";
import styled from 'styled-components';

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
                <Board />
            </Game>
        )
    }
}