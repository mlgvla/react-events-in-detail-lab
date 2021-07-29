import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleClick = (event) => {
        let coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Log Coordinates</button>
            </div>
        );
    }
}

export default CoordinatesButton;

