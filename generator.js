// DOM Elements
const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const upperCaseElement = document.getElementById('upperCase');
const lowerCaseElement = document.getElementById('lowerCase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

const randomFunction={
    lower:getRandomLowerCase,
    upper:getRandomUpperCase,
    number:getRandomNumber,
    symbol: getRandomSymbol,
};

// Generate event Listen 
generateElement.addEventListener('click',()=>{
    const length = +lengthElement.value ; 
    //+ is a unary operator which will convert the string value we get in length to a number
    const hasLower = lowerCaseElement.checked;
    const hasUpper = upperCaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    resultElement.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length);
});

// Copy password to clipboard
clipboardElement.addEventListener('click',()=>{
    const textarea = document.createElement('textarea');
    const password = resultElement.innerText;

    if(!password){
        return;
    }

    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Pasword Copied To Clipboard!');
});

// Generate Password Function
function generatePassword(lower,upper,number,symbol,length){
    /** 
     * Initialise password variable
     * filter out unchecked types
     * loop over length call generator function for each type
     * add final password to password variable
     * return var
     * */ 

    let generatedPassword='';
    const typesCount = lower+upper+number+symbol;

    const typesArr = [{lower},{upper},{number},{symbol}].filter
    (
        item=>Object.values(item)[0]
    );

    if(typesCount===0) return '';

    for( let i=0;i<length;i+=typesCount){
        typesArr.forEach(type=>{
            const funcName =Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]();
        });
    }

    // console.log(generatedPassword.slice(0,length));
    const finalPassword=generatedPassword.slice(0,length);

    return finalPassword;

}

// Generator Functions

function getRandomLowerCase(){
   // 97 to 122 ascii code for lower case alphabets
   let code = Math.floor(Math.random()*26) + 97;
   return String.fromCharCode(code) ;
}

function getRandomUpperCase(){
    // 97 to 122 ascii code for upper case alphabets
    let code = Math.floor(Math.random()*26) + 65;
    return String.fromCharCode(code) ;
}

function getRandomNumber(){
    // 48 to 58 ascii code for numbers
    let code = Math.floor(Math.random()*10) + 48;
    return String.fromCharCode(code) ;
}
function getRandomSymbol(){
    const symbols = '!@#$%^&*()[]{}=<>/,.';
    let code = symbols.length;
    return symbols[Math.floor(Math.random()*code)];
}

