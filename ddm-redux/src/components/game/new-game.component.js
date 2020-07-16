import React, { Component } from 'react';
import Board from "./board/board.component";

export default class NewGame extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Board />
        )
    }
}