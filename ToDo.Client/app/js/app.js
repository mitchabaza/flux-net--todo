var ToDoApp = require('./components/app.jsx');
var api = require("./utils/API");
var React = require('react');

React.render(<ToDoApp/> ,document.getElementById('todoapp'));

api.getTasks();
