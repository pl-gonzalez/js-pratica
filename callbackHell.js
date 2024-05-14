/**
 *  Callback Hell - Situation in JavaScript where callbacks 
 *              are nested within other callbacks to the 
 *              degree where the code is difficult to read .
 *          Old pattern to handle asynchronous functions.
 *          Use Promisses + async/await to avoid Callback Hell
 */

function task1(callback) {
    setTimeout(() => {
        console.log("taks 1 complete")
        callback();
    }, 2000)
}
function task2(callback) {
    setTimeout(() => {
        console.log("taks 2 complete")
        callback();
    }, 400)
}
function task3(callback) {
    setTimeout(() => {
        console.log("taks 3 complete")
        callback();
    }, 1000)
}
function task4(callback) {
    setTimeout(() => {
        console.log("taks 4 complete")
        callback();
    }, 100)
}


// Nesting callbacks inside another callbacks
// 4 levels of callback is near the limit

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks completed")
            })
        })
    })
})
