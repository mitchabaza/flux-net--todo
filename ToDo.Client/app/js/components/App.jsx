

var React = require("react")
var ToDoInput = require("./Input.jsx")
var ToDoList  = require("./List.jsx")
var ToDoStore  = require("../Stores/ToDoStore")
var Clock = require("./Clock.jsx");

var ToDoApp = React.createClass({


    getInitialState:function(){
		console.log("get")
		 
		return ToDoStore.getAll();
          
    } 
	, 
    componentDidMount: function() {
        ToDoStore.addChangeListener(this._onChange);
	 
    },
    componentWillUnmount: function() {
        ToDoStore.removeChangeListener(this._onChange);
    },
	componentDidUpdate:function(){

	},
    render: function() {
        
	 	 
		return (
         <section  id="main">
				<Clock/>
                <div id="header" >
                    <h1>todos</h1>
					
                </div>
				 <ToDoInput filter={this.state.filter} items={this.state.items}/>
                <ToDoList filter={this.state.filter} items={this.state.items} />
          </section>

        );
    }
    ,
    _onChange: function() {
        this.setState(ToDoStore.getAll());
    }


})

module.exports = ToDoApp;