// Random password generator

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
    const numberChars = "012345789";
    const symbolsChars = "!@#$%&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";
    
    if (length <= 0) {
        return `Passoword length must be at least one`
    }
    if (allowedChars.length === 0) {
        return `(At least one set of characterse needs to be selected)`
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * length)
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 40;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(` Generated password: ${password}`);
