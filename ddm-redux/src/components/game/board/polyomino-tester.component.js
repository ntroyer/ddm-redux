import React, { Component } from 'react';

export default class PolyominoTester extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button>Create Random Hexomino</button>
                <button>Rotate Current Hexomino</button>
            </div>
        )
    }
}