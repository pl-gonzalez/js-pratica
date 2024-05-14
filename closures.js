/**
 * closure -> Funcstions inside another functions
 *          the inner functions has access to the variables and scope oh the outer func
 *          Allow for private variables and state maintenance
 */

// function outer() {

//     let msg = 'Hello'

//     function inner() {
//         console.log(msg)
//     }

//     // inner needs to be call in outer to be able to output the msg
//     inner()
// }

// outer()


//   ================================================================



// function createCounter() {
//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`Count: ${count}`)
//     }

//     function getCount() {
//         return count;
//     }

//     return {increment, getCount}
// }

// const counter = createCounter();

// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()

// console.log(counter.count)
// console.log(counter.getCount())