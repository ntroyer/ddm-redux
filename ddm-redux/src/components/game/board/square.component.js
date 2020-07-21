import React, { Component } from 'react';
import styled from 'styled-components';

const BoardSquare = styled.div`
    background: #fff;
    font-weight: bold;
    width: 100px;
    height: 100px;
    padding: 0;
    text-align: center;
    outline: 2px solid black;

    &.is-being-checked {
        border-color: ${props => (props.currentPlayerColor ? props.currentPlayerColor : "red")};
        border-style: dotted;
        border-top-width: 5px;
        border-left-width: 5px;
        border-right-width: 7px;
        border-bottom-width: 7px;
    }
`;


export default class Square extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <BoardSquare
                currentPlayerColor={this.props.currentPlayerColor}
                isBeingChecked={this.props.isBeingChecked}
                className={this.props.isBeingChecked ? "is-being-checked" : ""}
                onMouseEnter={() => this.props.onSetCurrentCenter(this.props.row, this.props.col)}
                >
                {this.props.row}, {this.props.col}
            </BoardSquare>
        )
    }
}