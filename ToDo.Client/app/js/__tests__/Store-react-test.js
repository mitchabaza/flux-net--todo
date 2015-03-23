jest.dontMock("../stores/ToDoStore.js");
jest.dontMock("underscore");
jest.dontMock("events");

describe('Store', function () {
    
    
    it('initializes data correctly', function ()
         {
        var Store = require("../stores/ToDoStore.js");
        expect(Store).toBeDefined();
        var tasks = Store.getAll();
        expect(tasks).toBeDefined();
        expect(tasks).toEqual({items: [], filter: "none"});

    });
    
   
    
 
});