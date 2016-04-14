import React, {Component} from 'react'
import request from 'superagent'
import jsonp from 'superagent-jsonp'
import Griddle from 'griddle-react';
import StartStopButton from './startStop.jsx'
import { List } from 'immutable';


var Container = React.createClass({



    getInitialState: function() {
        let deployments = this.handleGetVirts()
        return { virts:  deployments};
},




    updateVirts: function(updateVirts){
        console.log(updateVirts)
        this.setState({
            virts: updateVirts
        });
    },

    componentDidMount: function()    {
        this.handleGetVirts
    },
    componentWillUnmount: function() { this.handleGetVirts.unlisten(this.updateVirts)},

    handleGetVirts: function() {
        var newVirts = []

            request.get('http://localhost:8081/api/v1.1/deployments').auth('defaultUser', 'svp4ever')
                .set('Content-Type', 'text/plain')
            .end(function(err, res){

                newVirts.push(res.body.deploymentSummaryList)

            });

        return newVirts;
    },

    handleUpdateVirts: function() {
        let deployments = this.handleGetVirts()

        this.updateVirts(deployments);
    },

    render: function() {

        var columnMeta = [
            {
                "columnName": "deploymentID",
                "order": 1,
                "locked": false,
                "visible": true,
                "displayName": "ID"
            },
            {
                "columnName": "virtItem.title",
                "order": 2,
                "locked": false,
                "visible": true
            },
            {
                "columnName": "userId",
                "order": 3,
                "locked": false,
                "visible": true,
                "sortable": false,
                "displayName": "name"
            },
            {
                "columnName": "virtItem.running",
                "order":  4,
                "locked": false,
                "visible": true,
                "displayName": "Favorite Number",
                "sortable": false,
                "customComponent": StartStopButton
            },
            {
                "columnName": "virtItem.PropertiesMap.port",
                "order":  5,
                "locked": false,
                "visible": true,
                "displayName": "Port",
                "sortable": true,
            }

    ];

       var  fakeData =   [
            {
                "deploymentID": 1,
                "virtItem.title": "REST virt",
                "userId": "Kapowsin",
                "virtItem.running": true,
                "virtItem.PropertiesMap.port": 8090
            },
           {
               "deploymentID": 2,
               "virtItem.title": "WSDL virt",
               "userId": "Shadid",
               "virtItem.running": true,
               "virtItem.PropertiesMap.port": 8091
           },
        ];
        return (
            <div>
                <button onClick = {this.handleUpdateVirts} >getDeployments</button>
                <Griddle results={fakeData} tableClassName="table" showFilter={true} columnMetadata={columnMeta}
                         showSettings={true} columns={["userId", "virtItem.title", "virtItem.running"]}/>
            </div>
        );
    }
})


module.exports = Container;