jest.dontMock("../stores/ToDoStore.js");
jest.dontMock("underscore");
jest.dontMock("events");
describe('Store', function () {
    
    
    var AppDispatcher;
    var Store;
    var Callback;
    
    beforeEach(function () {
        AppDispatcher = require('../dispatcher/AppDispatcher.js');
        Callback = AppDispatcher.register.mock.calls[0];
        Store = require('../stores/ToDoStore.js');
    });

    it('initializes store data into correct state', function ()
         {
        
            var tasks = Store.getAll();
            expect(tasks).toBeDefined();
            expect(tasks).toEqual({items: [], filter: "none"});

        });
    
    it('registers a callback with the dispatcher', function () {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });
   
   
    
 
});