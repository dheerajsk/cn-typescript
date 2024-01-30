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

  set name(value: string) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  constructor() {}

  getDetails() {
    console.log(`Name is : ${this.name}. Model Year is : ${this.modelYear}`);
  }
}

class Car extends Vehicle {
  noOfSeats: number;

  getDetails(): void {
    console.log(
      `Name is : ${this.name}. Model Year is : ${this.modelYear} and NoOfSeats are: ${this.noOfSeats}`
    );
  }
}

const v = new Vehicle();
v.modelYear = 1995;
v.name = "Tata Bus";
v.getDetails();

const c = new Car();
c.name = "tata Harrier";
c.modelYear = 2010;
c.noOfSeats = 5;
c.getDetails();
