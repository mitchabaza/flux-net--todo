var Actions = require('../actions/Actions');
var Local = require('./LocalStorage');
var Remote = require('./RemoteStorage');

var local = Local();
function GetStorage() {

    return Remote;
}
module.exports = {

    addTask: function (task) {
        GetStorage().addTask(task);
    },
    updateItem: function(task) {
        GetStorage().updateItem(task);
    },
    updateAll: function(all) {
        GetStorage().updateAll(all);
    },
    delete: function(item) {

        GetStorage().delete(item);
    },
    getAll: function() {
        GetStorage().getAll();
    }

};