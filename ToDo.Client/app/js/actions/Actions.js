var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/ToDoConstants');

// Define action methods
var Actions = {

    // Receive initial product data
    receiveTasks: function(data) {
        AppDispatcher.handleAction({
            actionType: Constants.RECEIVE_DATA,
            data: data
        });
    },
    clearCompleted: function() {
        AppDispatcher.handleAction({
            actionType: Constants.CLEAR_COMPLETED,
            data: null
        });
    },
    setCompleted: function(data) {
        AppDispatcher.handleAction({
            actionType: Constants.TASK_COMPLETE,
            data: data
        });
    },
    remove: function(data) {
        AppDispatcher.handleAction({
            actionType: Constants.TASK_REMOVE,
            data: data
        });
    },
    setAllCompleted: function(data) {
        AppDispatcher.handleAction({
            actionType: Constants.SET_ALL_COMPLETE,
            data: data
        });
    },
    
    addToList: function(item) {
        AppDispatcher.handleAction({
            actionType: Constants.TASK_ADD,
            data: item
        });
    }
};
module.exports = Actions;