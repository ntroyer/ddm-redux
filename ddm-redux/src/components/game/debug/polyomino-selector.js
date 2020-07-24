import React, { Component } from 'react';
import styled from 'styled-components';
import SelectablePolyomino from './selectable-polyomino';

const SelectorDiv = styled.div`
    display: flex;
    height: 100px;
    width: 300px;
    outline: 2px solid black;
    overflow-x: scroll;
`;

export default class PolyominoSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            polyominos: [
                [
                    [-1, 1],
                    [0, 1],
                    [0, -1],
                    [1, 0],
                    [2, 0]
                ],
                [
                    [-1, -1],
                    [-1, 0],
                    [-1, 1],
                    [1, 0]
                    [2, 0]
                ],
                [
                    [-1, -1],
                    [0, -1],
                    [1, 0],
                    [1, 1],
                    [2, 1]
                ],
                [
                    [-1, -1],
                    [-1, 0],
                    [1, 0],
                    [2, 0],
                    [2, 1]
                ],
                [],
                [],
                [],
                []
            ]
        }
    }

    render() {
        return (
                <SelectorDiv>
                {
                    this.state.polyominos.map((polyo) => (
                        <SelectablePolyomino 
                            polyomino={polyo}
                        />
                    ))
                }
                </SelectorDiv>
        );
    }
}
