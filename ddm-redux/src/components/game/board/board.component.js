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
    constructor(props) {
        super(props);

        this.state = {
            currentComputedPolyo: [-1, -1]
        }

        this.setCurrentCenter = this.setCurrentCenter.bind(this);
    }

    setCurrentCenter(row, col) {
        console.log('this is the current center...', row, col);

        // todo - add currentCenter to state?
        // todo - when the mouse comes off the grid at its edges, the polyo should be removed

        this.setState(state => ({
            currentComputedPolyo: this.computePolyoCoords(row, col)
        }));
    }

    computePolyoCoords(row, col) {
        return [[row, col]].concat(this.props.currentPolyo.map((value) => {
            return [(row + value[0]), (col + value[1])]
        }));
    }

    renderSquare(row, col) {
        let isBeingChecked = false;
        let stringifiedCoords = JSON.stringify([row, col]);

        if (this.state.currentComputedPolyo.some(item => JSON.stringify(item) === stringifiedCoords)) {
            isBeingChecked = true;
        }

        return (
            <Square 
                row={row}
                col={col}
                currentPlayer={this.props.currentPlayer}
                currentPlayerColor={this.props.currentPlayerColor}
                isBeingChecked={isBeingChecked}
                onSetCurrentCenter={() => this.setCurrentCenter(row, col)}
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