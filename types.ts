let isActive = true;

let total = 100.9;
total = "Hundred";

let fullname: string = "John Doe";

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

sum("One", 2);

let unknown: any = 20;
unknown = "Twenty";

let array: any[] = [1, true, "Jon"];

let numbers: Array<number> = [1, 2, 3, 4, "5"];

let person: [string, boolean] = ["John", 35];

let taskStatus: TaskStatus;

enum TaskStatus {
  ToBeScheduled,
  New,
  Completed,
  InProgress,
}

taskStatus = TaskStatus.Completed;

// New, ToBeScheduled, Completed, InProgress.
