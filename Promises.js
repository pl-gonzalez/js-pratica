/**
 * Promises - Object that manages asynchonous operations
 *             Wrap a Promise Object around {asynchronous code}
 *             "I promisse to return a value"
 *             PENDING -> RESOLVE or REJECTED
 *              new Promise((resolve, reject) => { asynchronous code })
 */

// DO THESE CHORES IN ORDER

/**
 * 1. WALK THE DOG 
 * 2. CLEAN THE KITCHEN
 * 3. TAKE OUT THE TRASH
 */

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkDog = true;

            if (walkDog) {
                resolve("You walked the dog");
                
            } else {
                reject("You DIDN't walk the dog")
            }
        }, 1500);
    })

}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const cleanKitchen = false;

            if (cleanKitchen) {
              resolve("You cleaned the kitchen");
            } else {
              reject("You DIDN't cleaned the kitchen");
            }
        }, 2500)

    })

}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const takeTrash = true;

            if (takeTrash) {
              resolve("You take out the trash");
            } else {
              reject("You DIDN't take out the trash");
            }
        }, 800)
    })

}

walkDog()
  .then((value) => {
    // Value is given by resolve, declared on Promise creation
    console.log(value);
    return cleanKitchen();
  })
//   .catch((error) => {
//     // Error value is given b reject, declared on the Promise creation
//     console.error(error);
//   })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .catch((error) => {
    // Error value is given b reject, declared on the Promise creation
    console.error(error);
  })
  .then((value) => {
    console.log(value);
    console.log("You did all chores");
  })
  .catch((error) => {
    // Error value is given b reject, declared on the Promise creation
    console.error(error);
  });
 
        



