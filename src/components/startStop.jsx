import React, {Component} from 'react'
import { Glyphicon, Button } from 'react-bootstrap';

var StartStopButton = React.createClass({

    /*    startVirt() {
     this.state.start = !this.state.start
     //TodoListActions.removeTask(this.props.task.get('id'));
     }*/

    render() {
        var running = this.props.data;
        var status = running ? 'Running':'Stopped'
        return (


            <div>

                {status}

            </div>
        )
    }
});
module.exports = StartStopButton;

//<span><Glyphicon glyph="play"/></span>
/*{running ? <span><Glyphicon glyph="glyphicon-play"/></span> :
 <span><Glyphicon glyph="glyphicon-stop"/></span>}*/