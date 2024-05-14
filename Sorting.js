/**
 * sort() = method used to sort elements of an array in place
 *          Sorts elements as strings in lexicographic order, not alphabetical
 *          lexicographic = (alphabet + numbers + symbols) as strings
 */

// let fruits = ["apple", "oragne", "banana", "coconut", "pineapple"];


// let numbers = [1, 10, 3, 2, 5, 7, 8, 9, 4];
// let numbers1 = [1, 10, 3, 2, 5, 7, 8, 9, 4];
// // .sort() for numbers = [1, 10, 2, 3, 4, 5, 7, 8, 9]


// numbers.sort((a, b) => b - a); // reverse order - descending order
// numbers1.sort((a, b) => a - b); // ascending order
// console.log(numbers)
// console.log(numbers1)

const people = [
  {
    name: "john",
    age: 30,
    gpa: 3.0,
  },
  {
    name: "marta",
    age: 23,
    gpa: 4.1,
  },
  {
    name: "tulio",
    age: 34,
    gpa: 3.7,
  },
  {
    name: "Inglesia",
    age: 27,
    gpa: 2.8,
  },
];

// people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => a.gpa - b.gpa);


// this will sort in alphabetical order when working with strings
people.sort((a, b) => a.name.localeCompare(b.name))

console.log(people);





