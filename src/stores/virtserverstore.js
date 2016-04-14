var Reflux = require('reflux')
var VirtServerActions = require('../actions/virtserveractions.js')

var _deployments = [];

var DeploymentStore = Reflux.createStore({
    init: function () {
        //listenables: [VirtServerActions]
        this.listenTo(VirtServerActions.getDeployments, this.onGetVirts);
        // Here we listen to actions and register callbacks
        //this.listenTo(NoteActions.createNote, this.onCreate);
        //this.listenTo(NoteActions.editNote, this.onEdit);
        //TODO Ajax call to get all deployments
    },
    onGetVirts: function () {
        console.error('OnGetDeployment')
        console.log('onGetDeployments')
        //_deployments = deployments
    }
})

module.exports = DeploymentStore;