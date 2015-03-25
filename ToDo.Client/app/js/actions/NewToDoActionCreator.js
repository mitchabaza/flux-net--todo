var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ToDoConstants');
var Service = require('../utils/RemoteStorage');
var uuid = require('node-uuid'); 
//private
function createTask(text) {
    
    var newItem = {
        Id: uuid.v1(),
        text: text,
        completed: false,
        date: new Date().toISOString()
    };
    return newItem;
}

var Action = {
    fire: function(text) {
        
        var task = createTask(text);
        AppDispatcher.handleAction({
            actionType: ActionTypes.TASK_ADD,
            data: task
        });
        Service.addTask(task);
    }
}

module.exports = Action