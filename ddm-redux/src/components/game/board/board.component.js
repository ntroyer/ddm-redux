import React, { Component } from 'react';
import styled from 'styled-components';

// todo - less janky way to handle outline going over border...
const BoardSquare = styled.div`
    background: #fff;
    font-weight: bold;
    width: 100px;
    height: 100px;
    padding: 0;
    text-align: center;
    outline: 2px solid black;

    &:hover {
        border-color: blue;
        border-style: solid;
        border-top-width: 5px;
        border-left-width: 5px;
        border-right-width: 7px;
        border-bottom-width: 7px;
    }
`;

const BoardGrid = styled.div`
    display: grid;
    width: 1900px; // todo - define default global variables for the css...
    height: 1900px;
    grid-template-columns: repeat(19, auto);
`;

function Square(props) {
    return (
        <BoardSquare>
            {props.row}, {props.col}
        </BoardSquare>
    );
}

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.boardX = 19; // todo - define default global variables somewhere...
        this.boardY = 19; // todo - define default global variables
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
            <BoardGrid>
                {
                    [...Array(this.boardX)].map((_, i) => (  
                        [...Array(this.boardY)].map((_, j) => this.renderSquare(i, j))  
                    ))
                }
            </BoardGrid>
        )
    }
}