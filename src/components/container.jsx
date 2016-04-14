import React, {Component} from 'react'
var VirtServerActions = require('../actions/virtserveractions.js')

var Container = React.createClass({

    handleGetVirts: function() {
       console.log('button clicked')
       VirtServerActions.getDeployments()
    },

    render() {

        return (
            <div>
                <button onClick = {this.handleGetVirts} ></button>
            </div>
        );
    }
})

module.exports = Container;