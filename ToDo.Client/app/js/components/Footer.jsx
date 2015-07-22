
var React = require("react")
var _ = require('underscore');
var Actions = require("../Actions/Actions.js"); 
var FilterAction = require("../Actions/FilterItemsActionCreator.js"); 
var ListFooter = React.createClass({


	handleClear:function(){
	  alert("implement me!")
	},

	handleFilter: function(e){
	
		filter=e.target.getAttribute('href').replace('#/','');
		FilterAction.fire(filter)
	 
	},
    render: function() {
     
	    var incomplete =_.filter(this.props.items, function(item){return item.completed==false?true:false});
		var complete =_.filter(this.props.items, function(item){return item.completed!=false?true:false});


		var buttonStyle = {
			display: 'none'
		};

		if (complete.length>0){
			buttonStyle	= {
			display: 'block'
		};

		}
        return (
		<footer id="footer"><span id="todo-count"><strong>{incomplete.length}</strong> {incomplete.length==1?"item":"items"} left</span>
		<ul id="filters" ref="filters">
	 		<li><a href='#/none' className={this.props.filter=='none'?'selected':''} onClick={this.handleFilter}>All</a></li>
			<li><a href='#/incomplete' className={this.props.filter=='incomplete'?'selected':''}  onClick={this.handleFilter}>Active</a></li>
			<li><a href='#/complete' className={this.props.filter=='complete'?'selected':''}  onClick={this.handleFilter}>Completed</a></li>
		</ul>
	 
		<button style={buttonStyle}  onClick={this.handleClear} id="clear-completed">clear completed ({complete.length})</button>
	 
		</footer>
		);
    }

})

module.exports = ListFooter;