import React, { Component } from 'react';
import styled from 'styled-components';

const RenderedSquare = styled.div`
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
`;

const BoardRow = styled.div`
    &:after {
        clear: both;
        content: "";
        display: table;
    }
`;

function Square(props) {
    return (
        <RenderedSquare>
            X
        </RenderedSquare>
    );
}

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.boardX = 19; // todo - define default global variables somewhere...
        this.boardY = 19; // todo - define default global variables
    }

    renderSquare(i) {
        return (
            <Square 
                value={i}
            />
        );
    }

    render() {
        return (
            <div>
                {
                    [...Array(this.boardY)].map((_, i) => (
                        <BoardRow key={i}>
                            {
                                [...Array(this.boardX)].map((_, j) => this.renderSquare(3 * i + j))
                            }
                        </BoardRow>
                    ))
                }
            </div>
        )
    }
}