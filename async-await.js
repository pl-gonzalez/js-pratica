/**
 * Async/Await - Async = make a function return a promise
 *               Await = make an async function await for a promise
 * 
 * 
 *  Allos you to write asynchronous code in a synchronous manner
 *  Async doesnt have resolve or reject parameters
 *  Everything after await is put in an event queue
 */


function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkDog = true;

      if (walkDog) {
        resolve("You walked the dog");
      } else {
        reject("You DIDN't walk the dog");
      }
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanKitchen = true;

      if (cleanKitchen) {
        resolve("You cleaned the kitchen");
      } else {
        reject("You DIDN't cleaned the kitchen");
      }
    }, 2500);
  });
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
    }, 800);
  });
}

async function doChores() {
   try { // walkDog returns a promise, so we wait for it
    const walkDogResult = await walkDog();
    console.log(walkDogResult)
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

        console.log("You finished all the chores")
    }
   catch (error) {
       console.log(error)
    }

}


doChores();

