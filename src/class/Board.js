import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
    render() {
        return (
            <h1>
                <Square />
            </h1>
        );
    }
}