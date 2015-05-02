var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ToDoConstants');


var Action = {
    fire: function(criteria) {
        
    
        AppDispatcher.handleAction({
            actionType: ActionTypes.FILTER,
            data: criteria
        });
    }
}

module.exports = Action