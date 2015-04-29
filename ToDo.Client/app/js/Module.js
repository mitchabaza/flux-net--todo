_myPrivateVariable = 7;
// function constructor
function ImportantModule(args) {
    this._myPrivateVariable = args;
}

ImportantModule.prototype.add= function (add) {
    if (isNaN(this._myPrivateVariable)) {
        this._myPrivateVariable = 6;
    }
    this._myPrivateVariable += add;
};
ImportantModule.prototype.subtract = function (sub) {
    this._myPrivateVariable-= sub;
};
ImportantModule.prototype.total= function () {
    return this._myPrivateVariable;
};


module.exports = ImportantModule;