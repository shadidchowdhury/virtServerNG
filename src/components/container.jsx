import React, {Component} from 'react'
import request from 'superagent'
import jsonp from 'superagent-jsonp'
var Container = React.createClass({

    handleGetVirts: function() {
       console.log('button clicked')

            request.get('http://localhost:8081/api/v1.1/deployments').auth('defaultUser', 'svp4ever')
                .set('Content-Type', 'text/plain')
            .end(function(err, res){
                console.log(res.statusCode)
                console.log(err)
            });
    },

    render() {

        return (
            <div>
                <button onClick = {this.handleGetVirts} >getDeployments</button>
            </div>
        );
    }
})

module.exports = Container;