/** @jsx React.DOM */

var React = require("react")
var ToDoItem = require("./Item.jsx")
var ListFooter = require("./Footer.jsx")
var _ = require("underscore") 

var ToDoList = React.createClass({

  propTypes:{
	 filter: React.PropTypes.any.isRequired,
	 items: React.PropTypes.array,

 },

  componentDidMount: function() {
   
  },
   

    render: function() {
        var self = this;
	 

        return (<div>
                <ul id="todo-list">
				 
                {
				self.props.items.map(function(item,index){
				
	
                    return (
						
							<ToDoItem key={self.props.items[index].Id}  todoitem={self.props.items[index]}/>
                       	
						)
                })}
			 
			    </ul>

            <ListFooter {...this.props} />
           </div>);
    }

})

module.exports = ToDoList;