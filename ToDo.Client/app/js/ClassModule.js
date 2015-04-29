
// function constructor
function Class(args) {
    this.value1 = args;
   
}

// properties and methods
Class.prototype = {
    add: function (argument) {
        this.value1 += argument ;
    },
    total: function () {
        return this.value1;
    },
    subtract: function (argument) {
        this.value1 -= argument;
    }


};


module.exports = Class;