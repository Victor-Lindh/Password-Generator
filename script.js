const inputNumber = document.getElementById("inputNumber");
const inputRange = document.getElementById("inputRange");

inputNumber.addEventListener("input", syncNumber);
inputRange.addEventListener("input", syncNumber);

// Sync range and password length inputs
function syncNumber(e){
    let uniValue = e.target.value;
    inputNumber.value = uniValue;
    inputRange.value = uniValue;
}

const uppercase_char_codes = arrayFromLowToHigh(65, 90);
const lowercase_char_codes = arrayFromLowToHigh(97, 122);
const symbols_char_codes = arrayFromLowToHigh(33,47);
const numbers_char_codes = arrayFromLowToHigh(48, 57);

console.log(String.fromCharCode(numbers_char_codes));
console.log(String.fromCharCode(symbols_char_codes));

const generatePasswordBtn = document.getElementById("generatePasswordBtn");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    let includeLower = document.getElementById("includeLower").checked;
    let includeUpper = document.getElementById("includeUpper").checked;
    let includeSymbols = document.getElementById("includeSymbols").checked;
    let includeNumbers = document.getElementById("includeNumbers").checked;
    const password = generatePassword(includeLower, includeUpper, includeSymbols, includeNumbers)
})

function generatePassword(includeLower, includeUpper, includeSymbols, includeNumbers){
        console.log(uppercase_char_codes);
}

function arrayFromLowToHigh(low, high){
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}