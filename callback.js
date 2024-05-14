// callback - used to handle asynchronous operations
// function passed to another function to run after the process on the called function is finished


// hello(leave)
// // goodbye()

// function hello(callback) {
//     console.log('hello')


//     callback(); // Evoke the callback function goodbye() - or any function passed when the function is called
// }
// function goodbye() {
//     console.log('goodbye')
// }

// function leave() {

//     console.log('leave')
// }

function sum(callback, x, y) {
    let result = x + y;
    callback(result)
}

function displayConsole(result) {
    console.log(result)
}

sum(displayConsole, 2, 5)