

var React = require("react")
var ToDoInput = require("./Input.jsx")
var ToDoList  = require("./List.jsx")
var ToDoStore  = require("../Stores/ToDoStore")
var _ = require('underscore');

var ToDoApp = React.createClass({

    getInitialState:function(){

        return {  filter:'none', items:  []}
          
    } 
	, 
    componentDidMount: function() {
        ToDoStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        ToDoStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
         <section id="main">
                <div id="header" >
                    <h1>todos</h1>
                </div>
                 <ToDoInput/>
                <ToDoList filter={this.state.filter} items={this.state.items} />
         </section>

        );
    }
    ,
    _onChange: function() {
        this.setState(ToDoStore.getTasks());
    }


})

module.exports = ToDoApp;