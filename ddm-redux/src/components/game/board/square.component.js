import React, { Component } from 'react';
import styled from 'styled-components';

const BoardSquare = styled.div`
    background: ${props => (props.assignedPlayerColor)};
    width: ${props => (props.squareWidth)}px;
    height: ${props => (props.squareHeight)}px;
    text-align: center;
    outline: 2px solid black;
    cursor: pointer;

    &.is-being-checked {
        border-color: ${props => (props.currentPlayerColor)};
        border-style: dashed;
        border-top-width: 5px;
        border-left-width: 5px;
        border-right-width: 5px;
        border-bottom-width: 5px;
    }
`;


export default class Square extends Component {
    // todo - really wish I could make this scalable for X players instead of just 4
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

    render() {
        return(
            <BoardSquare
                squareWidth={process.env.REACT_APP_BOARD_SQUARE_WIDTH}
                squareHeight={process.env.REACT_APP_BOARD_SQUARE_HEIGHT}
                currentPlayerColor={() => this.getPlayerColor(this.props.currentPlayer)}
                assignedPlayerColor={() => this.getPlayerColor(this.props.assignedPlayer)}
                className={this.props.isBeingChecked ? "is-being-checked" : ""}
                onMouseEnter={() => this.props.onSetCurrentCenter(this.props.row, this.props.col)}
                onClick={() => this.props.assignSquaresToPlayer(this.props.player, this.props.row, this.props.col)}
                >
                {this.props.row}, {this.props.col}        
            </BoardSquare>
        )
    }
}