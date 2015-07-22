var ToDoApp = require('./components/app.jsx');
var apiFactory = require("./utils/RemoteStorage");
var React = require('react');
apiFactory.getAll();
React.render(<ToDoApp/> ,document.getElementById('todoapp'));


