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

    it('initializes data correctly', function ()
         {
        
            var tasks = Store.getAll();
            expect(tasks).toBeDefined();
            expect(tasks).toEqual({items: [], filter: "none"});

        });
    
    it('registers a callback with the dispatcher', function () {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });
    //it('creates a to-do item', function () {
    //    var action = require('../actions/NewToDoActionCreator.js');
    //    // mock actions inside dispatch payloads
        
        
    //     expect(Store).toBeDefined();
    //    var all = Store.getAll();
    //    console.log(all);
    //    var keys = Object.keys(all.items);
    //    expect(keys.length).toBe(1);
    //    expect(all[keys[0]].text).toEqual('shit');
    //});
    
   
    
 
});