const inputNumber = document.getElementById("inputNumber");
const inputRange = document.getElementById("inputRange");
let finalPassword = document.getElementById("passw");
inputNumber.addEventListener("input", syncNumber);
inputRange.addEventListener("input", syncNumber);

// Sync range and password length inputs
function syncNumber(e){
    let uniValue = e.target.value;
    inputNumber.value = uniValue;
    inputRange.value = uniValue;
    return uniValue;
}

// Get charcode values from ASCII table, through arrayFromLowToHigh function
const uppercase_char_codes = arrayFromLowToHigh(65, 90);
const lowercase_char_codes = arrayFromLowToHigh(97, 122);
const numbers_char_codes = arrayFromLowToHigh(48, 57);
const symbols_char_codes = arrayFromLowToHigh(33,47)
                            .concat(arrayFromLowToHigh(58,64)
                            .concat(arrayFromLowToHigh(91,96)
                            .concat(arrayFromLowToHigh(168,175)
                            .concat(arrayFromLowToHigh(123,126)))))

const generatePasswordBtn = document.getElementById("generatePasswordBtn");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const characterAmount = inputNumber.value;
    const includeUpper = document.getElementById("includeUpper").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;

    // Assign values of generatePassword function to variable
    const password = generatePassword(characterAmount, includeUpper, includeSymbols, includeNumbers)
})

function generatePassword(characterAmount, includeUpper, includeSymbols, includeNumbers){
    characterAmount = inputNumber.value;
    let defaultCharCodes = lowercase_char_codes;
    if(includeUpper) defaultCharCodes = defaultCharCodes.concat(uppercase_char_codes)
    if(includeNumbers) defaultCharCodes = defaultCharCodes.concat(numbers_char_codes)
    if(includeSymbols) defaultCharCodes = defaultCharCodes.concat(symbols_char_codes)

    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
        const character = defaultCharCodes[Math.floor(Math.random() * defaultCharCodes.length)]
        passwordCharacters.push(String.fromCharCode(character))
    }
    let final = passwordCharacters.join('');
    finalPassword.innerText = final;

}

// Create function that loops through fields in ASCII table, based on a lowest number all the way to the high target number in the table.
// Push values to an array and return its values.
function arrayFromLowToHigh(low, high){
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}