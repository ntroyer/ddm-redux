import React, { Component } from 'react';
import styled from 'styled-components';

const PreviewSquare = styled.div`
    background: ${props => (props.isAssigned ? props.currentPlayerColor : "white")};
    font-weight: bold;
    width: 100px;
    height: 100px;
    padding: 0;
    text-align: center;
    outline: 2px solid black;

    &.is-center {
        border-color: red;
        border-style: dashed;
        border-top-width: 5px;
        border-left-width: 5px;
        border-right-width: 5px;
        border-bottom-width: 5px;
    }
`;


export default class PolyominoPreviewSquare extends Component {
    constructor(props) {
        super(props);
    }

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
                className={this.props.isCenter ? "is-center" : ""}
                currentPlayerColor={this.getPlayerColor(this.props.currentPlayer)}
                isAssigned={this.props.isAssigned} />
        )
    }
}