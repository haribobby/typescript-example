"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function (txt) {
        console.log("Greet from Person...  " + txt);
    };
    return Person;
}());
