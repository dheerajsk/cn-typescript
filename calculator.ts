class Calculator {
  add(num1: number, num2: number): number; // 2+2 = 4
  add(num1: string, num2: string): string; // Jon Doe = Jon Doe

  add(a: any, b: any): any {
    return a + b;
  }
}

let cal = new Calculator();
console.log(cal.add(2, 2));
console.log(cal.add("Jon", "Doe"));
