var ToDoApp = require('./components/app.jsx');
var apiFactory = require("./utils/RemoteStorage");
var React = require('react');

React.render(<ToDoApp/> ,document.getElementById('todoapp'));

apiFactory.getAll();
