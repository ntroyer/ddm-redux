import React, { Component } from 'react';
import styled from 'styled-components';
import SelectablePolyomino from './selectable-polyomino';

const SelectorDiv = styled.div`
    display: flex;
    height: 120px;
    width: 300px;
    outline: 2px solid black;
    overflow-x: scroll;
`;

export default class PolyominoSelector extends Component {
    constructor(props) {
        super();

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
                    [1, 0],
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
                ]
            ]
        }
    }

    setCurrentPolyomino(polyo) {
        console.log('setting current polyomino...', polyo);
        this.props.onPolyoChange(polyo);
    }

    render() {
        return (
            <SelectorDiv>
                {
                    this.state.polyominos.map((polyo) => (
                        <SelectablePolyomino 
                            setCurrentPolyomino={() => this.setCurrentPolyomino(polyo)}
                            currentPlayer={this.props.currentPlayer}
                            polyomino={polyo}
                        />
                    ))
                }
            </SelectorDiv>
        );
    }
}
