import React, { Component } from 'react';
import styled from 'styled-components';

import PolyominoPreviewSquare from './polyomino-preview-square';

const BoardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => (props.boardX)}, auto);
`;

export default class PolyominoPreview extends Component {
    isSquareInCurrentPolyo(row, col) {
        if (this.isSquareCenter(row, col)) {
            return true;
        }

        return Array.isArray(
            this.props.currentPolyo.find(
                (item) => (item[0] === row && item[1] === col)
            )
        );
    }

    isSquareCenter(row, col) {
        return (row === 0 && col === 0);
    }

    renderSquare(row, col) {
        row = row-2;
        col = col-2;
        const key = row + "," + col;
        return (
            <PolyominoPreviewSquare
                key={key}
                row={row}
                col={col}
                currentPlayer={this.props.currentPlayer}
                isAssigned={this.isSquareInCurrentPolyo(row, col)}
                isCenter={this.isSquareCenter(row, col)}
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
