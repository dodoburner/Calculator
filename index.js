function add(array) {
  return array.reduce((a,b) => a+b)
}

function subtract(array) {
  return array.reduce((a,b) => a-b)
}


function multiply(array) {
  return array.reduce((a,b) => a*b)
}

function divide(array) {
  return array.reduce((a,b) => a/b)
}

function operate(operator, numbers) {
  if (operator == '+') {
    return add(numbers)
  } 
  else if (operator == '-') {
    return subtract(numbers)
  }
  else if (operator == '*') {
    return multiply(numbers)
  }
  else if (operator == '/') {
    return divide(numbers)
  }
}

let display= document.querySelector('#display');
let numbers= document.querySelectorAll('.number');
let displayValue;
let arrayOp= ['+','-','*','/'];
let displayArray;
let result;

numbers.forEach(number => number.addEventListener('click', e => {
  displayArray= Array.from(display.textContent);
  for (let i=0; i<arrayOp.length; i++) {
    if (displayArray[0] == arrayOp[i]) {
      display.textContent = '';
    } 
  }

  display.textContent += number.textContent
  if (values.length == 2 ) {
    values=[]
  }
  if (result != undefined ) {
    values.push(result)
  }
  displayValue= parseInt(display.textContent)
  
}))

let operators= document.querySelectorAll('.operator');
let values= [];
let opeRator;

operators.forEach(operator => operator.addEventListener('click', e => {
  values.push(displayValue)
  if (values.length == 3) {
    values.shift()
  }
  result= operate(opeRator, values)
  opeRator= operator.textContent
  if (result == undefined) {
    display.textContent = operator.textContent + displayValue
  } else {
    display.textContent = operator.textContent + Math.round(result * 100000) / 100000
  }
 
  if (displayValue == undefined) {
    display.textContent = operator.textContent
  }
    displayArray= Array.from(display.textContent);
   
}))

let equals= document.querySelector('#equals');
equals.addEventListener('click', e => {
  values.push(displayValue)
  if (values.length == 3) {
    values.shift()
  }
  result= operate(opeRator, values)
  display.textContent= Math.round(result * 100000) / 100000
  values=[];
  displayValue= result
  
  
})

let clear= document.querySelector('#clear');
clear.addEventListener('click', e => {
  display.textContent=''
  values= [];
  result = undefined;
  opeRator = undefined
  displayValue = undefined;
  
})

