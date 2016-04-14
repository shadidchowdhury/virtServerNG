import React, {Component} from 'react'
import { Glyphicon, Button } from 'react-bootstrap';

class StartStopButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {'start': true};
    }

    startVirt() {
        this.state.start = !this.state.start
        //TodoListActions.removeTask(this.props.task.get('id'));
    }

    render () {
        return (

        <button type="button" bsSize="medium" onClick={this.startVirt}>
            <span><Glyphicon glyph="glyphicon-play"></Glyphicon></span>
        </button>
        );
    }
};

export default StartStopButton;