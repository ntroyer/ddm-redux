import React, { Component } from 'react';
import styled from 'styled-components';

export default class PlayerTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlayer: props.currentPlayer
        }
    }

    render() {
        return (
            <div>
                <div>
                    Current player: Player {this.props.currentPlayer}
                </div>
                <button onClick={() => this.props.onPlayerChange(1, "blue")}>Player 1</button>
                <button onClick={() => this.props.onPlayerChange(2, "orange")}>Player 2</button>
                <button onClick={() => this.props.onPlayerChange(3, "green")}>Player 3</button>
                <button onClick={() => this.props.onPlayerChange(4, "purple")}>Player 4</button>
            </div>
        )
    }
}