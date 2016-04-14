import React, {Component} from 'react'
import request from 'superagent'
import jsonp from 'superagent-jsonp'
var Container = React.createClass({

    handleGetVirts: function() {
       console.log('button clicked')

        //request
        //    .post('/api/pet')
        //    .send({ name: 'Manny', species: 'cat' })
        //    .set('X-API-Key', 'foobar')
        //    .set('Accept', 'application/json')
        //    .end(function(err, res){
        //        if (err || !res.ok) {
        //            alert('Oh no! error');
        //        } else {
        //            alert('yay got ' + JSON.stringify(res.body));
        //        }
        //    });

        request
            .get('http://localhost:8084/login')
            //.set('Access-Control-Allow-Origin', '*')
            //.set('Access-Control-Allow-Headers', 'X-Requested-With')
            .end(function(err, res){
                console.log(res.statusCode)
            });

/*        $.ajax({
            crossOrigin: true,
            url: 'http://localhost:8084/login',
            success: function(data) {
                console.log(data);
            }
        });*/
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