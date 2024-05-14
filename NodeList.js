/** NodeList = Static collection of HTML elements by (id, class, element)
 *      can be created by using querySelectorAll()
 *      similiar to an array, but no (map, filter, reduce)
 *      NodeList won't update to automatically reflect changes
 * 
 */




const btn = document.querySelectorAll('button')


//                              ADD HTML/CSS

// btn.forEach((button) => {
//     button.style.backgroundColor = 'lightgreen'
//     button.textContent += '😊'
// })




//                           CLICK event listener

// btn.forEach(button => {
//     button.style.backgroundColor = "lightgreen";

//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = 'tomato'
//     })
// })

//                      MOUSEOVER + MOUSEOUT event listener


// btn.forEach((button => {
//     button.style.backgroundColor = "lightgreen";

//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = 'lightblue'
//     })
//     button.addEventListener("mouseout", (event) => {
//       event.target.style.backgroundColor = "lightgreen";
//     });
// }))

//                  ADD AN ELEMENT


// 1.
const newBtn = document.createElement("button")
// 2.
newBtn.textContent = "Button 5";
// 3.
newBtn.classList = "myBtn"           // Style in NodeList we use classList
// 4.
document.body.appendChild(newBtn)





/** HTML for this JS:
 * 
 * <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
 */