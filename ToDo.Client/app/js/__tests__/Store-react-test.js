jest.dontMock("../stores/ToDoStore.js");
// jest.dontMock("./Test-DataCreator.js");
jest.dontMock("../constants/ToDoConstants.js");

describe('Store', function () {
    
    
    var AppDispatcher;
    var Store;
    var storeCallback;
    var Constants = require("../constants/ToDoConstants.js");

    beforeEach(function () {
        Store = require('../stores/ToDoStore.js');
        AppDispatcher = require('../dispatcher/AppDispatcher.js');
        storeCallback = AppDispatcher.register.mock.calls[0][0];
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

    it('filters items using correct criteria', function () {

        var test= require("./Test-Helper-Data.js");
        var payload = {
           
            action: {
                actionType: Constants.RECEIVE_DATA,
                data: {items: test.createTasks(5)}
            }
        };
        storeCallback(payload);
        var tasks = Store.getAll();
        expect(tasks).toBeDefined();
        expect(tasks.items.length).toEqual(5);

    });
    
   
    
 
});