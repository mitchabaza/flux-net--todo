
var React = require("react")
var _ = require('underscore');
var Actions = require("../Actions/Actions.js"); 

var ListFooter = React.createClass({


	handleClear:function(){
	   Actions.clearCompleted();
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
		
	 
		<button style={buttonStyle}  onClick={this.handleClear} id="clear-completed">clear completed ({complete.length})</button>
	 
		</footer>
		);
    }

})

module.exports = ListFooter;