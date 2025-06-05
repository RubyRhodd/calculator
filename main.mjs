import { resultButton, firstOperand, secondOperand, operation,} from './constants.mjs';
import { showResult,isValidOperands,isEmptyOperands } from './helpFunctions.mjs';

function calc () {
const firstOperandValue = Number(firstOperand.value);
const secondOperandValue = Number(secondOperand.value);
console.log(firstOperandValue);
console.log(secondOperandValue);
const operationValue = operation.value;

if (!isValidOperands(firstOperandValue,secondOperandValue)) {
    alert("Ошибка: введите числа");
    showResult("результат");
    return;
}

if (!isEmptyOperands(firstOperand.value, secondOperand.value)) {
  alert("Ошибка: вы не ввели одно из чисел / оба числа");
    showResult("результат");
    return;
}

switch(operationValue) {
  case 'add': 
  showResult(firstOperandValue + secondOperandValue);
  break;
  
  case 'multi': 
  showResult(firstOperandValue * secondOperandValue);
  break;

  case 'sub': 
  showResult(firstOperandValue - secondOperandValue);
  break;

  case 'div': 
  if (secondOperandValue === 0) {
    alert("Ошибка: деление на 0 невозможно");
    showResult("результат");
    break;
  }
  showResult(firstOperandValue / secondOperandValue);
  break;
}
}

resultButton.addEventListener('click', calc);