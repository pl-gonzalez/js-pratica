/**
 * arrow functions -> concise way to write function expressions
 */

// const hello = () => {
//     console.log(`Hello`)
// }

// // hello("Leon", 25)

// setTimeout(() => {
//     console.log(`Hello`);
// }, 3000);


const nums = [1, 2, 3, 4, 5, 6]

const sqr = nums.map((element) => (
    Math.pow(element, 2)
))
const cube = nums.map((element) => (
    Math.pow(element, 3)
))
const evenNums = nums.filter((element) => (
    element % 2 === 0
))
const oddNums = nums.filter((element) => (
    element % 2 !== 0
))
const total = cube.reduce((accumalator, element) => {
  return accumalator + element;
});

console.log(sqr, cube, evenNums, total)