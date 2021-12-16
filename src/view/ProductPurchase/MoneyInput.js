import { AMOUNT, BUTTON, HEADER } from '../../common/constant.js';
import * as elem from '../../common/element.js';
import { getLocalStorage } from '../../common/localStorage.js';

function createMoneyInputHeader() {
  return elem.createHeader('h3', HEADER.MONEY_INPUT);
}

function createMoneyInputInput() {
  return elem.createNumberInput('charge-input', AMOUNT.TO_INPUT);
}

function createMoneyInputButton() {
  return elem.createButton('charge-button', BUTTON.INPUT);
}

function createMoneyInputForm() {
  const moneyInputForm = elem.createForm();
  const moneyInputInput = createMoneyInputInput();
  const moneyInputButton = createMoneyInputButton();
  moneyInputForm.append(moneyInputInput, moneyInputButton);

  return moneyInputForm;
}

function createCustomerAmount() {
  let customerAmount = getLocalStorage('customerAmount');

  if (!customerAmount) customerAmount = '';

  return `
    <br>
    ${AMOUNT.INPUT}<span id="charge-amount">${customerAmount}</span>
  `;
}

export default function createMoneyInput() {
  const moneyInput = elem.createDiv();
  const moneyInputHeader = createMoneyInputHeader();
  const moneyInputForm = createMoneyInputForm();
  const customerAmount = createCustomerAmount();
  moneyInput.append(moneyInputHeader, moneyInputForm);
  moneyInput.innerHTML += customerAmount;

  return moneyInput;
}
