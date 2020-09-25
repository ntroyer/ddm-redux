import React, { Component } from 'react';
import styled from 'styled-components';

const GridComponent = styled.table`
    border-collapse: collapse;
`;

export default class Grid extends Component {
    constructor(props) {
        super();
    }

    renderSquare(row, col) {
        const key = 'square' + row + col;
        return (
            <Square 
                key={key}
                row={row}
                col={col}
                type={this.props.squareType}
                currentPlayer={this.props.currentPlayer}
                assignedPlayer={this.getSquareAssignment(row, col)}
                isBeingChecked={this.isSquareBeingChecked(row, col)}
                onSetCurrentCenter={() => this.setCurrentCenter(row, col)}
                assignSquaresToPlayer={() => this.assignSquaresToPlayer(this.props.currentPlayer)}
            />
        );
    }

    renderRow(row) {
        const key = 'row' + row;
        return (
            <tr key={key}>
            {
                [...Array(this.props.boardX)].map((_, column) => this.renderSquare(row, column))
            }
            </tr>
        );
    }

    render() {
        return (
            <Grid>
                <tbody onMouseLeave={() => this.resetCurrentPolyo()}>
                    {
                        [...Array(this.props.boardY)].map((_, row) => this.renderRow(row))
                    }
                </tbody>
            </Grid>
        )
    }
}