import React, { Component } from 'react';
import styled from 'styled-components';

export default class PlayerTest extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div>
                    Current player: Player X
                </div>
                <button>Player 1</button>
                <button>Player 2</button>
                <button>Player 3</button>
                <button>Player 4</button>
            </div>
        )
    }
}