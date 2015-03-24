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
    
    
 
});