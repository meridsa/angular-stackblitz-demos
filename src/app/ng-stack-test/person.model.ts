import { Address } from "./address.model";


export class Person {
  constructor(
    public name: string,
    public dob: Date,
    public address: Address
  ) {}
}