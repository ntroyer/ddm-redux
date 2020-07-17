import React, { Component } from 'react';
import styled from 'styled-components';

export default class BoardSquare extends Component {
    constructor(props) {
        super(props);

        this.state = {
            row = null,
            col = null,
            controlledBy = null
        }
    }

    componentWillMount() {
        console.log('generating new square...');
    }

    componentDidMount() {
        console.log('generated new square!');
    }
}