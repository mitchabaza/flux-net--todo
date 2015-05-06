jest.dontMock("../stores/ToDoStore.js");
// jest.dontMock("./Test-DataCreator.js");
jest.dontMock("../constants/ToDoConstants.js");

describe('Store', function () {
    
    
    var AppDispatcher;
    var Store;
    var storeCallback;
    var Constants;
    var lodash;
    beforeEach(function () {
        
        Constants = require("../constants/ToDoConstants.js");
        Store = require('../stores/ToDoStore.js');
        lodash = require("lodash");
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

        var testHelper= require("./Test-Helper-Data.js");
        
        //arrange
        var testData = test.createTasks(5);
        testData.first
        var payload = {
           
            action: {
                actionType: Constants.RECEIVE_DATA,
                data: {items: testData}
            }
        };

        storeCallback(payload);
        var tasks = Store.getAll();
        expect(tasks).toBeDefined();
        expect(tasks.items.length).toEqual(5);

    });
    
   
    
 
});