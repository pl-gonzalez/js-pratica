// /**
//  * function declaration -> reusable block of code that performance a specific task
//  *
//  *
// */

// function helloBase() {
//     console.log("Hello");
// }

// /**
//  * function expression -> define functions as values or variables
//  */

// const hello = function () {
//     console.log("Hello")
// }

// setTimeout(function () {    // function expression
//     console.log("Hello")
// }, 3000);

const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map(function (element) {
//     return Math.pow(element,2)
// });

// console.log(squares)

const evenNums = numbers.filter(function (element) {
    return element % 2 === 0
})

console.log(evenNums)