var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.toString = function () {
        return this.name + " is " + this.age + " years old.";
    };
    return Person;
}());
var person = new Person("Joe", 26);
console.log(person.toString());
