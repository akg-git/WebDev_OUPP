var Welcome = /** @class */ (function () {
    function Welcome() {
    }
    // shouldn't use `function` keyword while creating function inside class
    Welcome.prototype.show = function () {
        console.log("This is example of a Sample function inside User defined Typescript Class");
    };
    return Welcome;
}());
var showref = new Welcome();
showref.show();
