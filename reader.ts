import { ArrayClasses } from "./GenericArray";
import { IdentityFunctions } from "./identity";


const array = new ArrayClasses.GenericArray<number>();
array.addItem(20);
array.getItems();

IdentityFunctions.sum();
