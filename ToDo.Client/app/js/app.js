var ToDoApp = require('./components/app.jsx');
var apiFactory = require("./utils/Factory");
var React = require('react');

React.render(<ToDoApp/> ,document.getElementById('todoapp'));

apiFactory.getTasks();
