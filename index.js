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

numbers.forEach(number => number.addEventListener('click', e => {
  display.textContent += number.textContent
  displayValue= display.textContent
}))
