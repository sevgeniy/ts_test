class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  toString(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

let person = new Person("Joe", 26);

console.log(person.toString());
