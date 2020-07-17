import React, { Component } from 'react';
import styled from 'styled-components';

// todo - less janky way to handle outline going over border...
const BoardSquare = styled.div`
    background: #fff;
    font-weight: bold;
    width: 100px;
    height: 100px;
    padding: 0;
    text-align: center;
    outline: 2px solid black;

    &:hover {
        border-color: blue;
        border-style: solid;
        border-top-width: 5px;
        border-left-width: 5px;
        border-right-width: 7px;
        border-bottom-width: 7px;
    }
`;


export default class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            row: props.row,
            col: props.col
        }
    }

    componentWillMount() {
        console.log('generating new square...');
    }

    componentDidMount() {
        console.log('generated new square!');
    }

    render() {
        return(
            <BoardSquare>
                {this.state.row}, {this.state.col}
            </BoardSquare>
        )
    }
}