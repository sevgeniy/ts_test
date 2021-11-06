let person: { name: string } = { name: "Joe" };

console.log(typeof person);

class SomeClass<T extends { name: string }> {
  foo(p: T): string {
    return p.name;
  }
}

let s = new SomeClass();

console.log(s.foo(person));
