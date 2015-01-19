var React = require("react")
var Actions = require("../actions/actions.js")


var ToDoInput = React.createClass({

    handleAdd: function(e){

        var code = (e.keyCode ? e.keyCode : e.which);
        if(code != 13) {
           return;
        }
        if (this.refs.taskText.getDOMNode().value.trim()==""){
            return
        }
       Actions.addToList(this.refs.taskText.getDOMNode().value);
       this.refs.taskText.getDOMNode().value = '';
       this.refs.toggleall.getDOMNode().checked = '';

    },
    handleToggle:function(){
        var _completed;
        var checkbox=this.refs.toggleall.getDOMNode();
        if (checkbox.checked!=null){
            _completed= checkbox.checked?true:false;
        }
        else{
            _completed=0;
        }
        var payload = {completed:(_completed)}
        Actions.setAllCompleted(payload)
    },
    render: function() {

         return (
        <div>

                <input type="checkbox" ref="toggleall"onChange={this.handleToggle} id="toggle-all"/>
                <input id="new-todo" type="Text" ref="taskText" onKeyPress ={this.handleAdd}  placeholder="What needs to be done?"/>

        </div>);
    }

})

module.exports = ToDoInput ;




