import { createCoinCounts, createCoins } from '../../common/array.js';
import { AMOUNT, COIN } from '../../common/constant.js';
import { $ } from '../../common/element.js';
import {
  getLocalStorage,
  getLocalStorageArray,
  setLocalStorage,
} from '../../common/localStorage.js';
import { updateMachineAmount } from '../../view/ChangeCharge/CoinCharge.js';
import { updateMachineCoins } from '../../view/ChangeCharge/CoinList.js';

function getRandomCoin() {
  const coins = createCoins();
  const randomCoin = window.MissionUtils.Random.pickNumberInList(coins);

  return randomCoin;
}

function addRandomCoin(randomCoin, randomCoins) {
  const coins = randomCoins;

  if (randomCoin === COIN.COIN_500) {
    coins[0] += 1;
  } else if (randomCoin === COIN.COIN_100) {
    coins[1] += 1;
  } else if (randomCoin === COIN.COIN_50) {
    coins[2] += 1;
  } else {
    coins[3] += 1;
  }

  return coins;
}

function getRandomCoins(amountInput) {
  let amount = amountInput;
  let randomCoins = createCoinCounts();

  while (amount >= AMOUNT.HAVE_MIN) {
    const randomCoin = getRandomCoin();

    if (amount >= randomCoin) {
      randomCoins = addRandomCoin(randomCoin, randomCoins);
      amount -= randomCoin;
    }
  }

  return randomCoins;
}

function setAddMachineCoinsLocalStorage(amountInput) {
  let machineCoins = createCoinCounts();

  if (getLocalStorage('machineCoins')) {
    machineCoins = getLocalStorageArray('machineCoins');
  }

  const randomCoins = getRandomCoins(amountInput);

  for (let i = 0; i < 4; i += 1) {
    machineCoins[i] += randomCoins[i];
  }

  setLocalStorage('machineCoins', JSON.stringify(machineCoins));
}

function setSubtractMachineCoinsLocalStorage() {
  const machineCoins = getLocalStorageArray('machineCoins');
  const changes = getLocalStorageArray('changes');

  for (let i = 0; i < machineCoins.length; i += 1) {
    machineCoins[i] -= changes[i];
  }

  setLocalStorage('machineCoins', JSON.stringify(machineCoins));
}

function setMachineCoinsLocalStorage(amount) {
  if (amount > 0) {
    setAddMachineCoinsLocalStorage(amount);
  } else {
    setSubtractMachineCoinsLocalStorage();
  }
}

export function setMachine(amount) {
  setMachineCoinsLocalStorage(amount);
  updateMachineAmount();
  updateMachineCoins();
}

function onCoinChargeClick(event) {
  event.preventDefault();
  const amountInput = $('vending-machine-charge-input').value * 1;
  setMachine(amountInput);
}

export function coinCharge() {
  $('vending-machine-charge-button').addEventListener(
    'click',
    // eslint-disable-next-line comma-dangle
    onCoinChargeClick
  );
}
