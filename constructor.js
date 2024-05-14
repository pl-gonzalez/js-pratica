/**
 *  constructor -> special method for defining the properties and methods of objects
 *                  helps with code reusability
 */

// attention to capitalize in Car
function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
}

const car1 = new Car('Renault', 'Sandero', '2013', 'Silver')
const car2 = new Car('Chevrolet', 'Chevette', '1972', 'Dark Silver')
const car3 = new Car('Volkswagen', 'Gol', '1995', 'Wine')

console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)


console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)

console.log(car3.make)
console.log(car3.model)
console.log(car3.year)
console.log(car3.color)