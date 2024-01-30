export namespace ArrayClasses {
  export class GenericArray<T extends string | number> {
    private items: T[] = [];

    getItems() {
      return this.items;
    }

    addItem(value: T) {
      this.items.push(value);
    }
  }

  const arrayOfNumbers = new GenericArray<number>();
  arrayOfNumbers.addItem(30);
  arrayOfNumbers.addItem(40);

  const arrayOfStrings = new GenericArray<string>();
  arrayOfStrings.addItem("Jon");
  arrayOfStrings.addItem("Doe");

  export class AnotherClass {}
}
