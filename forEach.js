/**
 * forEach() - used to iterate over the elements of an array and apply 
 * a callback function to each element
 * 
 *              array.forEach(callback) - element and index are provided
 * 
 *      " For each element in the array, do this"
 * 
 *      - forEach iterate over the original array
 */


// let numbers = [1, 2, 3, 4, 5]

// numbers.forEach(square)

// numbers.forEach(display);


// function double(element, index, array) {
//     array[index] = element * 2;
// }
// function triple(element, index, array) {
//     array[index] = element * 3;
// }
// function square(element, index, array) {
//     array[index] = Math.pow(element, 2);
// }

// function display(element) {
//     console.log(element)
// }


let fruits = ["apple", "ORAANGE", "BANANA", "coco"];

fruits.forEach(capitalize);
fruits.forEach(display);


function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}
function lowerCase(element, index, array) {
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function display(element) {
  console.log(element);
}