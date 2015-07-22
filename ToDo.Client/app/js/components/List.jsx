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

 getInitialState: function(){
	return {seconds: 0};
 },
  
 
 applyFilter:function (items,filter) {
    if (filter == 'none') {
        return items;
    }
    var filtered = null;
    if (filter == 'complete') {
        filtered= _.filter(items, function(item) {
            return item.completed;
        });
    }
    if (filter == 'incomplete') {
        filtered =_.filter(items, function(item) {
            
            return !item.completed;
        });
    }

    return filtered
},

    render: function() {
        var self = this;
		var filteredItems= self.applyFilter(self.props.items, self.props.filter)


        return (<div>
                <ul id="todo-list">
				 
                {
				filteredItems.map(function(item,index){
				
	
                    return (
						
							<ToDoItem key={filteredItems[index].Id}  todoitem={filteredItems[index]}/>
                       	
						)
                })}
			 
			    </ul>

            <ListFooter {...this.props} />
           </div>);
    }

})

module.exports = ToDoList;