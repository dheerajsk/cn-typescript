"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericArray = void 0;
var GenericArray = /** @class */ (function () {
    function GenericArray() {
        this.items = [];
    }
    GenericArray.prototype.getItems = function () {
        return this.items;
    };
    GenericArray.prototype.addItem = function (value) {
        this.items.push(value);
    };
    return GenericArray;
}());
exports.GenericArray = GenericArray;
var arrayOfNumbers = new GenericArray();
arrayOfNumbers.addItem(30);
arrayOfNumbers.addItem(40);
var arrayOfStrings = new GenericArray();
arrayOfStrings.addItem("Jon");
arrayOfStrings.addItem("Doe");
