 
var uuid = require("node-uuid");
module.exports = {
    createTasks: function (count) {
        
        var items = [];
        for (var i = 0; i < count; i++) {
            var newItem = {
                Id: uuid.v1(),
                text: uuid.v1(),
                completed: false,
                date: new Date().toISOString()
            };
            items.push(newItem);
        }
        return items;
    }
     
}
