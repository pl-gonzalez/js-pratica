/**
 * object = a collection of properties and methods, that represnet objects (real world objects e.g.)
 * object = {
 *      key: "value",
 *      function()
 *  }
 */

const person1 = {
  firstName: "SpongeBob",
  lastName: "SqaurePants",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log(`Hi, Im ${this.firstName}`); // this reference to the object where this is used
    },
  eat: () => console.log("Im eating a krabby Patty")
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 27,
  isEmployed: false,
  sayHello: function () {
    console.log(`Hi, Im ${this.firstName}`);
  },
  eat: () => console.log("Im eating a Pizza with sushi"),
};

person1.sayHello()
person2.sayHello()

person1.eat();
person2.eat();
