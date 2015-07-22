/** @jsx React.DOM */

var React = require("react")
var Moment = require("Moment")
 
var Clock= React.createClass({
  
 getInitialState: function(){
	return {seconds: 0};
 },
 componentDidMount: function() {
    this.setInterval(this.tick, 1000); // Call a method on the mixin
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  }, 
  render: function() {
        var self = this;
		
        return (<div id="clock">{Moment().format("h:mm:ss a")}</div>);
    }

})

module.exports = Clock;