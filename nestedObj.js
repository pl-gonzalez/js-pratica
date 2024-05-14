/**
 * nested objects -> obj inside obj
 *                    allows to represent more complex data structures
 */

class Address {
    constructor(street, city, country) {
        this.street = street
        this.city = city
        this.country = country
    }
}

class Person {
    constructor(name, age, ...address) {
        this.name = name
        this.age = age
        this.address = new Address(...address) // this makes the Address class a child of Person
        }
}


const person1 = new Person("Jhon Doe", 30, '124 st', "bikini bottom", "Int. water")

const person2 = new Person("Jhon Neighbor", 21, '125 st', "bikini bottom", "Int. water")

console.log(person1.name)
console.log(new Person('sad',12,'adfgsdfh'))

// Use the dot operator to acess a property of a child object
console.log(person1.address.city)