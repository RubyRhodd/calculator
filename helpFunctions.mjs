import { firstOperand, secondOperand, result } from './constants.mjs';

export function clearInputs() {
  firstOperand.value = "";
  secondOperand.value = "";
}

export function isValidOperands(first, second) {
  return (!isNaN(first) && !isNaN(second));
}

export function showResult(value) {
  result.textContent = value;
  clearInputs();
}

export function isEmptyOperands(first, second) {
  return (first.length > 0 && second.length);
}