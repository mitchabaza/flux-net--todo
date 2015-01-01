/**
 * Created by mitch.abaza on 12/1/2014.
 */
// Define main Controller View

var React = require("react")
var Moment = require("moment")
var Actions = require("../actions/actions.js")
var ToDoItem = React.createClass({


    handleRemove:function(e){
        Actions.remove({Id:this.props.todoitem.Id})
    },
    handleToggle:function () {

        var _status;
        var checkbox=this.refs.complete.getDOMNode();
         if (checkbox.checked!=null){
             _status= checkbox.checked?1:0;
        }
        else{
             _status=0;
         }
        var payload = {completed:(_status),Id:this.props.todoitem.Id}
        Actions.setCompleted(payload)
},
    render: function () {
        var complete = !this.props.todoitem.completed?false:true;
        var clazz = !complete?"":"completed"
		var dateNow=Moment.utc(this.props.todoitem.date).toDate();
		var datestring = Moment(dateNow).fromNow();
        return (<li key={this.props.todoitem.Id} className={clazz}>
            <div className="view"><input className="toggle" onChange={this.handleToggle} ref="complete"  type="checkbox" checked={complete}/>
                 <label>{this.props.todoitem.text}<span className="when">Created {datestring}</span></label> 
                <button onClick={this.handleRemove} className="destroy"></button>
            </div>
        </li>)


    }

})

module.exports = ToDoItem;