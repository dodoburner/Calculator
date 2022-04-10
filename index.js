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
let arrayOp= ['+','-','*','/']

numbers.forEach(number => number.addEventListener('click', e => {
  for (let i=0; i<arrayOp.length; i++) {
    if (display.textContent.trim() == arrayOp[i]) {
      display.textContent = '';
    } break
  }

  display.textContent += number.textContent
  displayValue= display.textContent
}))

let operators= document.querySelectorAll('.operator');
let values= [];
let opeRator;

operators.forEach(operator => operator.addEventListener('click', e => {
  values.push(displayValue)
  display.textContent = operator.textContent
  opeRator = operator.textContent
}))

let equals= document.querySelector('#equals');
equals.addEventListener('click', e => {

})
