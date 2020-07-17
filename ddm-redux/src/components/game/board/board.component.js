import React, { Component } from 'react';
import styled from 'styled-components';
import Square from './square.component';

const BoardGrid = styled.div`
    display: grid;
    width: ${props => (props.boardX)}00px; // todo - define default global variables for the css...
    height: ${props => (props.boardY)}00px;
    grid-template-columns: repeat(${props => (props.boardX)}, auto);
`;

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boardX: props.boardX,
            boardY: props.boardY
        }
    }

    renderSquare(row, col) {
        return (
            <Square 
                row={row}
                col={col}
            />
        );
    }

    render() {
        return (
            <BoardGrid boardX={this.state.boardX} boardY={this.state.boardY}>
                {
                    [...Array(this.state.boardY)].map((_, i) => (  
                        [...Array(this.state.boardX)].map((_, j) => this.renderSquare(i, j))  
                    ))
                }
            </BoardGrid>
        )
    }
}