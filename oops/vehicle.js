var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Object.defineProperty(Vehicle.prototype, "modelYear", {
        get: function () {
            return this._modelYear;
        },
        // getters and setters.
        set: function (value) {
            this._modelYear = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.getDetails = function () {
        console.log("Name is : ".concat(this.name, ". Model Year is : ").concat(this.modelYear));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.getDetails = function () {
        console.log("Name is : ".concat(this.name, ". Model Year is : ").concat(this.modelYear, " and NoOfSeats are: ").concat(this.noOfSeats));
    };
    return Car;
}(Vehicle));
var v = new Vehicle();
v.modelYear = 1995;
v.name = "Tata Bus";
v.getDetails();
var c = new Car();
c.name = "tata Harrier";
c.modelYear = 2010;
c.noOfSeats = 5;
c.getDetails();
