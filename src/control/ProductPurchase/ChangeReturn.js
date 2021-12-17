import { createCoinCounts, createCoins } from '../../common/array.js';
import { $ } from '../../common/element.js';
import {
  getLocalStorageArray,
  setLocalStorage,
} from '../../common/localStorage.js';
import { updateChangeList } from '../../view/ProductPurchase/ChangeList.js';
import { setMachine } from '../ChangeCharge/CoinCharge.js';
import { setCustomer } from './MoneyInput.js';

function getChanges() {
  let customerAmount = $('charge-amount').textContent * 1;
  const machineCoins = getLocalStorageArray('machineCoins');
  const changes = createCoinCounts();
  const coins = createCoins();

  for (let i = 0; i < machineCoins.length; i += 1) {
    const need = parseInt(customerAmount / coins[i], 10);
    changes[i] += machineCoins[i] >= need ? need : machineCoins[i];
    customerAmount -= changes[i] * coins[i];
  }

  return changes;
}

function setChangesLocalStorage(changes) {
  setLocalStorage('changes', JSON.stringify(changes));
}

function setChanges() {
  const changes = getChanges();
  setChangesLocalStorage(changes);
  updateChangeList();
}

function onChangeReturnClick(event) {
  event.preventDefault();
  setChanges();
  setCustomer(0);
  setMachine(0);
}

export default function changeReturn() {
  $('coin-return-button').addEventListener('click', onChangeReturnClick);
}
