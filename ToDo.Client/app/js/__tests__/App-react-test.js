jest.dontMock("../components/App.jsx");
jest.mock("../Stores/ToDoStore");
jest.dontMock("underscore");
jest.dontMock("events");

 describe('Store', function () {
    
    //jest.dontMock("../stores/Store.js");
    //jest.dontMock("underscore");


     
     
    it('gets initial state from Store', function () {
          var App = require("../components/App.jsx");
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        //console.log("mock" + Store.getAll());

        var output= TestUtils.renderIntoDocument(<App/>);
        var comp = TestUtils.scryRenderedDOMComponentsWithTag(output,"section");
//        console.log("output" + comp.getDOMNode().innerHTML);
        console.log(comp.length);

    });
    
   
    
 
});