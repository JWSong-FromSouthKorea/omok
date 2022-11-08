import React from 'react';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isClicks: false};
        this.onClickSquare = this.onClickSquare.bind(this);
    };

    onClickSquare(e) {
        this.setState(prev => {
            console.log(prev.isClicks)
            prev.isClicks =!(prev.isClicks);
            console.log(prev.isClicks)
            e.preventDefault();
        });
    };

    render() {
        return (
            <div onClick={this.onClickSquare}>
                X
            </div>
        );
    }
}