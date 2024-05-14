/**
 * destructuring -> extract the values from arrays and objects, then assign them to variables in a convienent way
 *  [] = for arrays
 *  {} = for objects
 */


//                                                  SWAP VALUES



// let a = 2;
// let b = 4;

// [a, b] = [b, a]

// console.log(a, b)





//                                              SWAP ELEMENT IN ARRAY

// const colors = ['red', 'blue', 'black', 'white', 'gray'];
// // // console.log(colors)


// // // for some reason, probably ES6 thing, need to put ; before using destructuring
// [colors[0], colors[3], colors[4]] = [colors[4], colors[0], colors[3]]
// //  log:    ['gray', 'blue', 'black', 'red', 'white']
 
// console.log(colors)




// //                                       ASSIGN ARRAY ELEMENT TO A VARIABLE


// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);



// EXTRACT VALUES FROM OBJECTS

function displayPerson({ firstName, lastName, age, job = 'unemployed' }) {
    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`);
}
const person1 = {
    firstName: "Spong",
    lastName: "Square",
    age: 30,
    job: "Fryer"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Doe",
    age: 22,
    
}

displayPerson(person2)
