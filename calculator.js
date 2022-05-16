const number0 = document.getElementById("num0");
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const number3 = document.getElementById("num3");
const number4 = document.getElementById("num4");
const number5 = document.getElementById("num5");
const number6 = document.getElementById("num6");
const number7 = document.getElementById("num7");
const number8 = document.getElementById("num8");
const number9 = document.getElementById("num9");

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

const newNum0 = function(){
    screentext.innerHTML =  screentext.innerHTML + "0";
}
const newNum1 = function(){
    screentext.innerHTML =  screentext.innerHTML + "1";
}
const newNum2 = function(){
    screentext.innerHTML =  screentext.innerHTML + "2";
}
const newNum3 = function(){
    screentext.innerHTML =  screentext.innerHTML + "3";
}
const newNum4 = function(){
    screentext.innerHTML =  screentext.innerHTML + "4";
}
const newNum5 = function(){
    screentext.innerHTML =  screentext.innerHTML + "5";
}
const newNum6 = function(){
    screentext.innerHTML =  screentext.innerHTML + "6";
}
const newNum7 = function(){
    screentext.innerHTML =  screentext.innerHTML + "7";
}
const newNum8 = function(){
    screentext.innerHTML =  screentext.innerHTML + "8";
}
const newNum9 = function(){
    screentext.innerHTML =  screentext.innerHTML + "9";
}

number0.addEventListener('click', newNum0);
number1.addEventListener('click', newNum1);
number2.addEventListener('click', newNum2);
number3.addEventListener('click', newNum3);
number4.addEventListener('click', newNum4);
number5.addEventListener('click', newNum5);
number6.addEventListener('click', newNum6);
number7.addEventListener('click', newNum7);
number8.addEventListener('click', newNum8);
number9.addEventListener('click', newNum9);



