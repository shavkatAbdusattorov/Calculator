let firstNumber;
let secondNumber;
let step = 0;
let operation;
let result = 0;

let display = document.getElementById("display");

let numArray = [];
let secondNumArray = [];

// let operation

function getNumber(num) {
  if (step === 0 || step === 1 ) {
    numArray.push(num);
    step = 1;
    firstNumber = Number(numArray.join(""));
    display.value = firstNumber;
  } else if (step === 2) {
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(""));
    display.value = secondNumber;
  }
}

function getOperator(op) {
  step = 2;
  operation = op;
}

function clearDisplay() {
  display.value = 0;
  firstNumber = null;
  secondNumber = null;
  step = 0;
  operation = null;
  result = 0;
  numArray = [];
  secondNumArray = [];
}

const calculateEquals = () => {
  if (operation === "+") {
    result = firstNumber + secondNumber;
    display.value = result;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
    display.value = result;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
    display.value = result;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
    display.value = result;
  }
};
