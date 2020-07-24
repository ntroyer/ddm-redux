import React, { Component } from 'react';
import styled from 'styled-components';

const SelectablePolyominoBlock = styled.div`
    width: ${props => (props.squareWidth)}px;
    height: ${props => (props.squareHeight)}px;
    background: ${props => (props.isAssigned ? props.currentPlayerColor : "white")};
    text-align: center;
    outline: 2px solid black;
`;

const Polyomino = styled.div`
    flex: 0 0 100px;
`;

export default class SelectablePolyomino extends Component {
    render() {
        return (
            <Polyomino>This is my tiger suit.</Polyomino>
        )
    }
}
