import React, { Component } from 'react';
import styled from 'styled-components';

const BoardSquare = styled.div`
    background: #fff;
    font-weight: bold;
    width: 100px;
    height: 100px;
    padding: 0;
    text-align: center;
    outline: 2px solid black;
`;

const BoardGrid = styled.div`
    display: grid;
    width: 80%;
    height: 80%;
    grid-template-columns: repeat(19, auto);
`;

function Square(props) {
    return (
        <BoardSquare>
            x
        </BoardSquare>
    );
}

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.boardX = 19; // todo - define default global variables somewhere...
        this.boardY = 19; // todo - define default global variables
    }

    renderSquare(i) {
        return (
            <Square 
                value={i}
            />
        );
    }

    render() {
        return (
            <BoardGrid>
                {
                    [...Array(this.boardY)].map((_, i) => (  
                        [...Array(this.boardX)].map((_, j) => this.renderSquare(3 * i + j))  
                    ))
                }
            </BoardGrid>
        )
    }
}