/**
 * this - > reference to the object where this is used (the object depends on the imediate context)
 * person.name = this.name
 *      Dont work with arrow functions
 * 
 *  this keyword alone refers to the window object
 */

const person1 = { 
    name: "SpongeBob",
    favFood: "hamburger",
    sayHello: function () { console.log(`Hello, im ${this.name}`) },
    eat: function() { console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = { 
    name: "Patrick",
    favFood: "sushi",
    sayHello: function () { console.log(`Hello, im ${this.name}`) },
    eat: function() { console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat()
person1.sayHello()
