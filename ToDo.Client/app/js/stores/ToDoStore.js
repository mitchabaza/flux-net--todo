var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/ToDoConstants');
var _ = require('underscore');
var api = require('../utils/RemoteStorage');

//private state
var _filter = 'none';
var _data = { items: [], filter: _filter };


function loadTasks(data) {
    _data = { items: data.items, filter: _filter };

}

// Extend ProductStore with EventEmitter to add eventing capabilities
var ToDoStore = _.extend({}, EventEmitter.prototype, {
    

   
    getAll: function() {
        return (_data);
    },


    
    emitChange: function() {
        this.emit('change');
    },

  
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});
 
function addTask(item) {

    
    _data.items.unshift(item);
  
}

function setComplete(data) {

    var itemSelected = _.find(_data.items, function(item) {
        return item.Id == data.Id;
    });
    itemSelected.completed = data.completed;

    api.updateItem(itemSelected);
}

function setAllComplete(data) {
    
    _.each(_data.items, function(item) {
        item.completed = data.completed;
    });

    api.updateAll(_data.items);
}



function setFilter(type) {

    _data.filter = type;

}
function clearCompleted() {

    var deleted = _.filter(_data.items, function(item) {
        return item.completed;
    });

    deleted.map(function(item) {

        remove(item );
    });
}

function remove(data) {
    var itemSelected = _.find(_data.items, function(item) {
        return item.Id == data.Id;
    });
    var index = _data.items.indexOf(itemSelected);
    _data.items.splice(index, 1);
    api.delete(itemSelected);
}

AppDispatcher.register(function(payload) {
    var action = payload.action;


    switch (action.actionType) {

        // Respond to RECEIVE_DATA action
    case Constants.RECEIVE_DATA:
        loadTasks(action.data);
        break;
    case Constants.TASK_ADD:
        addTask(action.data);
        break;
    case Constants.SET_ALL_COMPLETE:
        setAllComplete(action.data);
        break;
    case Constants.TASK_REMOVE:
        remove(action.data);
        break;
    case Constants.TASK_COMPLETE:
        setComplete(action.data);
        break;
    case Constants.FILTER:
        setFilter(action.data);
        break;
    case Constants.CLEAR_COMPLETED:
        clearCompleted();
        break;
    default:
        return true;
    }

    // If action was responded to, emit change event
    ToDoStore.emitChange();

    return true;

});

module.exports = ToDoStore;