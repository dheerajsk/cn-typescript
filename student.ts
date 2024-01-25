class Student {
  _name: string;
  _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  greet(): void {
    console.log(`Hello ${this._name}`);
  }
}

let student1 = new Student("Jon Doe", 25);
student1.greet()
