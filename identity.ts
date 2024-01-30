// function identity(value: number): number {
//   return value;
// }

// function identityString(value: any): any {
//     return value;
//   }

export namespace IdentityFunctions {
  export function identity<T extends number | string>(value: T): T {
    return value;
  }

  export function sum() {}
}

console.log(identity<number>(40));
console.log(identity<string>("30"));
