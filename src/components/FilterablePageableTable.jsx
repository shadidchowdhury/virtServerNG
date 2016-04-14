import React, {Component} from 'react'
window.jQuery = require("jquery");
//import $  from 'jquery';
import bootstrap from '../../bower_components/bootstrap/dist/js/bootstrap'
import Backbone from 'backbone';
require('backbone.paginator');
import  _  from 'lodash';

/*
 Options:
 initialCollection : a backbone pageable collection
 maximumPages : the number of pages to display before using an ellipsis, defaults to 10
 */

module.exports = React.createClass({displayName: 'exports',
    getInitialState: function() {
        return {initialCollection: this.props.initialCollection}
    },

    /**
     * Search handler for collections
     * @param {collection} newCollection The updated collection upon search
     */
    search: function(newCollection) {
        this.setState({collection: newCollection})
    },
    render: function () {
        var self = this;
        var maximumPages = this.props.maximumPages  ? this.props.maximumPages : 10;
        return(
            <div>
                <FilterSearch initialCollection={this.state.initialCollection} onSearch={this.search} />
                <PageableTable striped={this.props.striped} bordered={this.props.bordered} condensed={this.props.condensed} hover={this.props.hover} initialCollection={this.state.initialCollection} maximumPages={5} />
            </div>)
    }
});