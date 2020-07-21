import React, { Component } from 'react';
import styled from 'styled-components';
import { MdRotateLeft, MdRotateRight, MdFlip } from 'react-icons/md';
import ReactTooltip from "react-tooltip";

const FlipX = styled(MdFlip)`
    rotate: 90deg;
`;

export default class PlayerTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlayer: props.currentPlayer
        }

        this.rotateLeft = this.rotateLeft.bind(this);
        this.rotateRight = this.rotateRight.bind(this);
        this.flipX = this.flipX.bind(this);
        this.flipY = this.flipY.bind(this);
    }

    rotateLeft() {
        let newPolyo = this.props.currentPolyo.map((position) => {
            let newPosition = [];

            newPosition[0] = position[1] * -1;
            newPosition[1] = position[0];

            return newPosition;
        });
        this.props.onPolyoChange(newPolyo);
    }

    rotateRight() {
        let newPolyo = this.props.currentPolyo.map((position) => {
            let newPosition = [];

            newPosition[0] = position[1];
            newPosition[1] = position[0] * -1;

            return newPosition;
        });
        this.props.onPolyoChange(newPolyo);
    }

    flipX() {
        let newPolyo = this.props.currentPolyo.map((position) => {
            let newPosition = [];

            newPosition[0] = position[0] * -1;
            newPosition[1] = position[1];

            return newPosition;
        });
        this.props.onPolyoChange(newPolyo);
    }

    flipY() {
        let newPolyo = this.props.currentPolyo.map((position) => {
            let newPosition = [];

            newPosition[0] = position[0];
            newPosition[1] = position[1] * -1;

            return newPosition;
        });
        this.props.onPolyoChange(newPolyo);
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
                <div>
                    Polyominal Controls
                </div>
                <MdRotateLeft data-tip="Rotate Counterclockwise" onClick={this.rotateLeft} />
                <MdRotateRight data-tip="Rotate Clockwise" onClick={this.rotateRight} />
                <FlipX data-tip="Flip Horizontally" onClick={this.flipX} />
                <MdFlip data-tip="Flip Vertically" onClick={this.flipY} />
                <ReactTooltip />
            </div>
        )
    }
}