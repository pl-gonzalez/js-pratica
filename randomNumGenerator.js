//randon number generator

// const min = 50;
// const max = 100;


// let randomNum = (Math.random() * (max-min)) + min; // random between 0-1

// console.log(Math.round(randomNum))
// console.log(randomNum)

const myBtn = document.querySelector('#myBtn')
const myLabel = document.querySelector('#myLabel')



const min = 1;
const max = 6;


let randomNum = (Math.random() * (max-min)) + min; // random between 0-1

myBtn.onclick = () => {
    randomNum = Math.floor((Math.random() * max)) + min
    myLabel.textContent = randomNum
}

/**
 * HTML para arquivo 
 * <button id="myBtn">Roll</button>
    <label for="" id="myLabel"></label>
 */