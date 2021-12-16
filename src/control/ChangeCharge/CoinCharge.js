import { AMOUNT, COIN } from '../../common/constant.js';
import { $ } from '../../common/element.js';
import {
  getLocalStorage,
  getLocalStorageArray,
  setLocalStorage,
} from '../../common/localStorage.js';
import { updateMachineAmount } from '../../view/ChangeCharge/CoinCharge.js';
import { updateMachineCoins } from '../../view/ChangeCharge/CoinList.js';

function setMachineAmountLocalStorage(amountInput) {
  let machineAmount = getLocalStorage('machineAmount') * 1;
  machineAmount += amountInput;
  setLocalStorage('machineAmount', machineAmount);
}

function initCoins() {
  return [
    COIN.COUNT_DEFAULT,
    COIN.COUNT_DEFAULT,
    COIN.COUNT_DEFAULT,
    COIN.COUNT_DEFAULT,
  ];
}

function getRandomCoin() {
  const coins = [COIN.COIN_500, COIN.COIN_100, COIN.COIN_50, COIN.COIN_10];
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
  let randomCoins = initCoins();

  while (amount >= AMOUNT.HAVE_MIN) {
    const randomCoin = getRandomCoin();

    if (amount >= randomCoin) {
      randomCoins = addRandomCoin(randomCoin, randomCoins);
      amount -= randomCoin;
    }
  }

  return randomCoins;
}

function setMachineCoinsLocalStorage(amountInput) {
  let machineCoins = initCoins();

  if (getLocalStorage('machineCoins')) {
    machineCoins = getLocalStorageArray('machineCoins');
  }

  const randomCoins = getRandomCoins(amountInput);

  for (let i = 0; i < 4; i += 1) {
    machineCoins[i] += randomCoins[i];
  }

  setLocalStorage('machineCoins', JSON.stringify(machineCoins));
}

function onCoinChargeClick(event) {
  event.preventDefault();
  const amountInput = $('vending-machine-charge-input').value * 1;
  setMachineAmountLocalStorage(amountInput);
  updateMachineAmount();
  setMachineCoinsLocalStorage(amountInput);
  updateMachineCoins();
}

export default function coinCharge() {
  $('vending-machine-charge-button').addEventListener(
    'click',
    // eslint-disable-next-line comma-dangle
    onCoinChargeClick
  );
}
