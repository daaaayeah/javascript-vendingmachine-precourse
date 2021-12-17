import { createCoins } from '../../common/array.js';
import { AMOUNT, BUTTON, HEADER } from '../../common/constant.js';
import * as elem from '../../common/element.js';
import {
  getLocalStorage,
  getLocalStorageArray,
} from '../../common/localStorage.js';

function createCoinChargeHeader() {
  return elem.createHeader('h3', HEADER.COIN_CHARGE);
}

function createCoinChargeInput() {
  return elem.createNumberInput('vending-machine-charge-input', AMOUNT.TO_HAVE);
}

function createCoinChargeButton() {
  return elem.createButton('vending-machine-charge-button', BUTTON.CHARGE);
}

function createCoinChargeForm() {
  const coinChargeForm = elem.createForm();
  const coinChargeInput = createCoinChargeInput();
  const coinChargeButton = createCoinChargeButton();
  coinChargeForm.append(coinChargeInput, coinChargeButton);

  return coinChargeForm;
}

function createMachineCoinsSum() {
  const machineCoins = getLocalStorageArray('machineCoins');
  const coins = createCoins();
  let machineCoinsSum = 0;

  for (let i = 0; i < machineCoins.length; i += 1) {
    machineCoinsSum += coins[i] * machineCoins[i];
  }

  return machineCoinsSum;
}

function createMachineAmount() {
  let machineAmount = '';

  if (getLocalStorage('machineCoins')) {
    machineAmount = createMachineCoinsSum();
  }

  return `
    <br>
    ${AMOUNT.HAVE}<span id="vending-machine-charge-amount">${machineAmount}</span>
  `;
}

export function createCoinCharge() {
  const coinCharge = elem.createDiv();
  const coinChargeHeader = createCoinChargeHeader();
  const coinChargeForm = createCoinChargeForm();
  const machineAmount = createMachineAmount();
  coinCharge.append(coinChargeHeader, coinChargeForm);
  coinCharge.innerHTML += machineAmount;

  return coinCharge;
}

export function updateMachineAmount() {
  const machineAmount = createMachineCoinsSum();
  elem.$('vending-machine-charge-amount').textContent = machineAmount;
}
