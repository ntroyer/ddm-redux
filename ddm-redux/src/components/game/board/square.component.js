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
        border-color: ${props => (props.currentPlayerColor ? props.currentPlayerColor : "red")};
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

        console.log('check out my props', props);
    }

    componentWillMount() {
        console.log('generating new square...');
    }

    componentDidMount() {
        console.log('generated new square!');
    }

    setPlayer(player) {
        this.setState(state => ({
            controlledBy: player
        }));
    }

    render() {
        return(
            <BoardSquare currentPlayerColor={this.props.currentPlayerColor}>
                {this.props.row}, {this.props.col}
            </BoardSquare>
        )
    }
}