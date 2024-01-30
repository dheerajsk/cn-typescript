class Vehicle {
  private _name: string;
  private _modelYear: number;

  // getters and setters.

  set modelYear(value: number) {
    this._modelYear = value;
  }

  get modelYear() {
    return this._modelYear;
  }

  constructor(_name, _modelYear) {
    this._name = _name;
    this._modelYear = _modelYear;
  }

  getDetails() {
    console.log(`Name is : ${this._name}. Model Year is : ${this._modelYear}`);
  }
}

class Car extends Vehicle {}

const v = new Vehicle("Tata Harrier", 2015);
const c = new Car("Mahindra XUV", 2020);
