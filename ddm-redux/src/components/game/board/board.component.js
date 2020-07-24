import React, { Component } from 'react';
import styled from 'styled-components';
import Square from './square.component';

const BoardGrid = styled.div`
    display: grid;
    width: ${props => (props.boardX)}00px;
    height: ${props => (props.boardY)}00px;
    grid-template-columns: repeat(${props => (props.boardX)}, auto);
`;

export default class Board extends Component {
    // as a general rule of thumb, if you are inclined to add a variable to a square, add it to the board instead
    // todo - add an array that keeps track of what squares each player is assigned to.
    constructor(props) {
        super(props);

        this.state = {
            currentComputedPolyo: [-1, -1],
            playerSquares: []
        }

        this.setCurrentCenter = this.setCurrentCenter.bind(this);
    }

    setCurrentCenter(row, col) {
        // todo - when the mouse comes off the grid at its edges, the polyo should be removed

        this.setState(state => ({
            currentComputedPolyo: this.computePolyoCoords(row, col)
        }));
    }

    assignSquaresToPlayer(player) {
        let currentPlayerSquares = this.state.playerSquares;

        this.state.currentComputedPolyo.map((item) => {
            currentPlayerSquares[item[0] + ',' + item[1]] = player;
            return true;
        });

        this.setState(state => ({
            playerSquares: currentPlayerSquares
        }));
    }

    computePolyoCoords(row, col) {
        return [[row, col]].concat(this.props.currentPolyo.map((value) => {
            return [(row + value[0]), (col + value[1])]
        }));
    }

    getSquareAssignment(row, col) {
        let rowColKey = row + ',' + col;

        if (this.state.playerSquares[rowColKey] && this.state.playerSquares[rowColKey] !== 'undefined') {
            return this.state.playerSquares[rowColKey];
        }

        return 0;
    }

    isSquareBeingChecked(row, col) {
        let stringifiedCoords = JSON.stringify([row, col]);

        if (this.state.currentComputedPolyo.some(item => JSON.stringify(item) === stringifiedCoords)) {
            return true;
        }
        return false;
    }

    renderSquare(row, col) {
        const key = row + ',' + col;
        return (
            <Square 
                key={key}
                row={row}
                col={col}
                currentPlayer={this.props.currentPlayer}
                assignedPlayer={this.getSquareAssignment(row, col)}
                isBeingChecked={this.isSquareBeingChecked(row, col)}
                onSetCurrentCenter={() => this.setCurrentCenter(row, col)}
                assignSquaresToPlayer={() => this.assignSquaresToPlayer(this.props.currentPlayer)}
            />
        );
    }

    render() {
        return (
            <BoardGrid boardX={this.props.boardX} boardY={this.props.boardY}>
                {
                    [...Array(this.props.boardY)].map((_, i) => (  
                        [...Array(this.props.boardX)].map((_, j) => this.renderSquare(i, j))  
                    ))
                }
            </BoardGrid>
        )
    }
}