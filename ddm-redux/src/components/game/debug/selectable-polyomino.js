import React, { Component } from 'react';
import styled from 'styled-components';

const SelectablePolyominoBlock = styled.div`
    width: ${props => (props.squareWidth)}px;
    height: ${props => (props.squareHeight)}px;
    background: ${props => (props.isAssigned ? props.currentPlayerColor : "white")};
    text-align: center;
    border: ${props => (props.isAssigned ? "2px solid black" : "0")};
`;

const PolyominoGrid = styled.div`
    display: grid;
    width: 100px;
    height: 100px;
    grid-template-columns: repeat(5,auto);
`;

const Polyomino = styled.div`
    flex: 0 0 100px;
`;

export default class SelectablePolyomino extends Component {
    getPlayerColor(player) {
        switch(player) {
            case 1:
                return "blue";
            case 2:
                return "orange";
            case 3:
                return "green";
            case 4:
                return "purple";
            default:
                return "white";
        }
    }

    isSquareInCurrentPolyo(row, col) {
        if (row === 0 && col === 0) {
            return true;
        }

        return Array.isArray(
            this.props.polyomino.find(
                (item) => (item[0] === row && item[1] === col)
            )
        );
    }

    renderSquare(row, col) {
        row = row-2;
        col = col-2;
        const key = row + "," + col;
        return (
            <SelectablePolyominoBlock 
                key={key}
                row={row}
                col={col}
                squareWidth={20}
                squareHeight={20}
                currentPlayerColor={this.getPlayerColor(this.props.currentPlayer)}
                isAssigned={this.isSquareInCurrentPolyo(row, col)}
            />
        );
    }

    render() {
        return (
            <Polyomino 
                onClick={() => this.props.setCurrentPolyomino(this.props.polyomino)}>
                <PolyominoGrid>
                    {
                        [...Array(5)].map((_, i) => (  
                            [...Array(5)].map((_, j) => this.renderSquare(i, j))
                        ))
                    }
                </PolyominoGrid>
            </Polyomino>
        )
    }
}
