import React, {Component} from 'react'
import request from 'superagent'
import jsonp from 'superagent-jsonp'
import Griddle from 'griddle-react';
import StartStopButton from './startStop.jsx'
import LinkComponent from './LinkComponent.jsx'
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
                "order": 7,
                "locked": false,
                "visible": true,
                "displayName": "ID"
            },
            {
                "columnName": "title",
                "order": 2,
                "locked": false,
                "visible": true,
                "displayName": "Virt Name"
            },
            {
                "columnName": "userId",
                "order": 3,
                "locked": false,
                "visible": true,
                "displayName": "User",
                "sortable": false
            },
            {
                "columnName": "running",
                "order":  1,
                "locked": false,
                "visible": true,
                "displayName": "Status",
                "sortable": false,
                "customComponent": StartStopButton
            },
            {
                "columnName": "port",
                "order":  5,
                "locked": false,
                "visible": true,
                "displayName": "Port",
                "sortable": true
            },
            {
                "columnName": "url",
                "order":  6,
                "locked": false,
                "visible": true,
                "displayName": "URL",
                "sortable": false,
                "customComponent": LinkComponent
            }

    ];

       var  fakeData =   [
            {
                "deploymentID": 1,
                "title": "REST virt",
                "userId": "Calvin",
                "running": false,
                "url": "http://vserver:8090",
                "port": 8090
            },
           {
               "deploymentID": 2,
               "title": "WSDL virt",
               "userId": "Shadid",
               "running": true,
               "url": "http://168.2.10.21:8092",
               "port": 8092
           },
           {
               "deploymentID": 3,
               "title": "REST virt 2",
               "userId": "Sofiia",
               "running": false,
               "url": "http://vserver:8090",
               "port": 8090
           },
           {
               "deploymentID": 4,
               "title": "FB virt",
               "userId": "Gustav",
               "running": false,
               "url": "http://168.2.10.21:8092",
               "port": 8092
           },
           {
               "deploymentID": 5,
               "title": "REST virt",
               "userId": "Mark",
               "running": true,
               "url": "http://vserver:8090",
               "port": 8090
           },
           {
               "deploymentID": 6,
               "title": "WSDL virt",
               "userId": "Dinuskha",
               "running": true,
               "url": "http://168.2.10.21:8092",
               "port": 8092
           },
           {
               "deploymentID": 7,
               "title": "REST virt",
               "userId": "Kapowsin",
               "running": true,
               "url": "http://vserver:8090",
               "port": 8090
           },
           {
               "deploymentID": 8,
               "title": "WSDL virt",
               "userId": "Shadid",
               "running": true,
               "url": "http://168.2.10.21:8092",
               "port": 8094
           },
           {
               "deploymentID": 9,
               "title": "Maps",
               "userId": "Calvin",
               "running": true,
               "url": "http://vserver:8090",
               "port": 8096
           },
           {
               "deploymentID": 10,
               "title": "TRE",
               "userId": "Calvin",
               "running": true,
               "url": "http://168.2.10.21:8092",
               "port": 8095
           },
           {
               "deploymentID": 11,
               "title": "REST virt4",
               "userId": "Kapowsin",
               "running": false,
               "url": "http://vserver:8090",
               "port": 9091
           },
           {
               "deploymentID": 12,
               "title": "Account System",
               "userId": "Calvin",
               "running": true,
               "url": "http://168.2.10.21:8092",
               "port": 9093
           },
           {
               "deploymentID": 13,
               "title": "REST virt",
               "userId": "Kapowsin",
               "running": true,
               "url": "http://vserver:8090",
               "port": 9090
           },
           {
               "deploymentID": 14,
               "title": "WSDL virt",
               "userId": "Mark",
               "running": true,
               "url": "http://168.2.10.21:8092",
               "port": 8099
           }
        ];
        return (
            <div>
                <Griddle results={fakeData} tableClassName="table" showFilter={true} columnMetadata={columnMeta}
                         showSettings={true} columns={["running", "userId", "title",  "url"]}/>
            </div>
        );
    }
})


module.exports = Container;