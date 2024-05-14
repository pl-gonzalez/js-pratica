let fullName = ' leon gonzalez'

fullName = fullName.trim()

let firstName = fullName.slice(0, fullName.indexOf(' '))
let lastName = fullName.slice(fullName.indexOf(' ') + 1)



console.log(firstName, lastName)