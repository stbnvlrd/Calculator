const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const percentage = document.getElementById("percentage");
const division = document.getElementById("division");
const multiplicacion = document.getElementById("multiplication");
const subtraction = document.getElementById("subtraction");
const addittion = document.getElementById("addition");
const equal = document.getElementById("point");
const point = document.getElementById("equal");
const screentext = document.getElementById("newnumber");
const oldscreentext = document.getElementById("oldnumber");


const newNum = function(){
    screentext.innerHTML =  screentext.innerHTML + this.innerHTML;
}

var numbers = document.querySelectorAll('div.numberClass');
console.log(numbers);
numbers.forEach((item) => { item.addEventListener('click', newNum)});




