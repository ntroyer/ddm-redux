import React, { Component } from 'react';
import styled from 'styled-components';

const PreviewSquare = styled.td`
    width: ${props => (props.squareWidth)}px;
    height: ${props => (props.squareHeight)}px;
    background: ${props => (props.isAssigned ? props.currentPlayerColor : "white")};
    text-align: center;
    border: 2px solid black;

    &.is-center {
        outline-color: red;
        outline-style: dashed;
        outline-width: 5px;
    }
`;


export default class PolyominoPreviewSquare extends Component {

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
        return (
            <PreviewSquare 
                squareWidth={process.env.REACT_APP_PREVIEW_SQUARE_WIDTH}
                squareHeight={process.env.REACT_APP_PREVIEW_SQUARE_HEIGHT}
                className={this.props.isCenter ? "is-center" : ""}
                currentPlayerColor={this.getPlayerColor(this.props.currentPlayer)}
                isAssigned={this.props.isAssigned} />
        )
    }
}