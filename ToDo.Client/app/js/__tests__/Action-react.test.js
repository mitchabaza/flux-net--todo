jest.dontMock("../actions/NewToDoActionCreator.js");

describe('Action', function () {
    
    
    var AppDispatcher;
    var Callback;
    
    beforeEach(function () {
        AppDispatcher = require('../dispatcher/AppDispatcher.js');
     });
    
    it('calls dispatcher when fired', function () {
        expect(AppDispatcher.handleAction.mock.calls.length).toBe(0);
        var action = require("../actions/NewToDoActionCreator.js");
        action.fire("take a dump");
        expect(AppDispatcher.handleAction.mock.calls.length).toBe(1);

    });
    it('creates new todo item with correct states', function () {

        
        var text = "fire dan";
        expect(AppDispatcher.handleAction.mock.calls.length).toBe(0);
        var action = require("../actions/NewToDoActionCreator.js");
        action.fire(text);
        var callArguments = AppDispatcher.handleAction.mock.calls[0][0];
        expect(callArguments.data.text).toBe(text);
        expect(callArguments.data.completed).toBe(false);
        expect(callArguments.data.Id).toBeDefined();
       
    });
    
    
 
});