var Actions = require('../actions/Actions');
var $ = require('jquery');
var _url = "/reactjs/task/";

function buildUrl(action) {

    return _url + action;
}

module.exports = {
    addTask: function(task) {
        var self = this;
        $.ajax({
            type: 'POST',
            url: buildUrl("Create"),
            contentType: "application/json",
            data: JSON.stringify(task),
            dataType: 'json',
            success: function(data) {},
            error: function(errMsg) {
                alert("bad shit happened yo");
                self.getProductData();
            }
        });

    },
    updateItem: function(data) {
        var self = this;
        $.ajax({
            type: 'POST',
            url: buildUrl("Update"),
            contentType: "application/json",
            data: JSON.stringify(data),

            dataType: 'json',

            error: function(errMsg) {
                alert("bad shit happened yo");
                self.getProductData();
            }
        });
    },
    updateAll: function(items) {
        var self = this;
        $.ajax({
            type: 'POST',
            url: buildUrl("UpdateAll"),
            contentType: "application/json",
            data: JSON.stringify(items),
            dataType: 'json',
            error: function(errMsg) {
                alert("bad shit happened yo");
                self.getProductData();
            }
        });
    },
    delete: function(data) {
        var self = this;

        $.ajax({
            type: 'POST',
            url: buildUrl("Delete"),
            contentType: "application/json",
            data: JSON.stringify(data),

            dataType: 'json',

            error: function(errMsg) {
                alert("bad shit happened yo");
                self.getProductData();
            }
        });

    },
    getTasks: function() {

        $.ajax({
            type: 'POST',
            url: buildUrl("List"),
            contentType: "application/json",
            dataType: 'json',
            success: function(data) { Actions.receiveTasks(data); }

        });

    }

};