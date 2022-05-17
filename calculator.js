const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const percentage = document.getElementById("percentage");
const division = document.getElementById("division");
const multiplicacion = document.getElementById("multiplication");
const subtraction = document.getElementById("subtraction");
const addition = document.getElementById("addition");
const point = document.getElementById("point");
const equal = document.getElementById("equal");
const screentext = document.getElementById("newnumber");
const oldscreentext = document.getElementById("oldnumber");

const newNum = function(){
    screentext.innerHTML =  screentext.innerHTML + this.innerHTML;
}

const erase = function(){
    screentext.innerHTML = screentext.innerHTML.slice(0,-1);
}

const clearScreen = function(){
    if(screentext.innerHTML === ""){
        oldscreentext.innerHTML = ""
    }else{
        screentext.innerHTML = ""
    };
}

var numbers = document.querySelectorAll('div.numberClass');

numbers.forEach((item) => { item.addEventListener('click', newNum)});

backspace.addEventListener('click', erase)
clear.addEventListener('click', clearScreen)

