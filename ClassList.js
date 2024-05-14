/**
 * ClassList - > element property in JS used t ointeract with an element 
 *          lists of classes (CSS classes)
 *          ALlows you to  make reusable classes for manu elements acrros the page
 */

/**
 * add()
 * remove()
 * toggle(remove if present, add if not)
 * replace(oldClass, newClass)
 * contains()
 */

// const myBtn = document.getElementById("myBtn")
// const myH1 = document.getElementById("myH1")


// myBtn.classList.add("enabled");
// myH1.classList.add("enabled");

// myBtn.addEventListener('click', event => {
//     if (event.target.classList.contains('disable')) {
//         event.target.textContent += "🤮";
//     }
//     else {
//         event.target.classList.replace("enable", "disable")
//     }
// })
// myH1.addEventListener('click', event => {
//     if (event.target.classList.contains('disable')) {
//         event.target.textContent += "🤮";
//     }
//     else {
//         event.target.classList.replace("enable", "disable")
//     }
// })

let buttons = document.querySelectorAll(".myButtons")

buttons.forEach(button => {
    button.classList.add("enabled")
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover")
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover")
    })
})

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if (event.target.classList.contains("disabled")) {
            event.target.classList.replace("disabled", "enabled");
            
        } else {

            event.target.classList.replace("enabled", "disabled")
        }
    })
})


/** HTML for this JS: 
 * 
 * <button class="myButtons">Button1</button>
    <button class="myButtons">Button2</button>
    <button class="myButtons">Button3</button>
    <button class="myButtons">Button4</button>
    <button class="myButtons">Button5</button>
 */