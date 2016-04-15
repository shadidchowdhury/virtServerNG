import React, {Component} from 'react'

var LinkComponent = React.createClass({
    render: function(){
        var url = this.props.data;
        return <a href={url}>{this.props.data}</a>
    }
});

module.exports = LinkComponent;