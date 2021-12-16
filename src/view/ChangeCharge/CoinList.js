import { COIN, HEADER } from '../../common/constant.js';
import * as elem from '../../common/element.js';
import {
  getLocalStorage,
  getLocalStorageArray,
} from '../../common/localStorage.js';

function createCoinListHeader() {
  return elem.createHeader('h3', HEADER.COIN_LIST);
}

// eslint-disable-next-line max-lines-per-function
function createTable(count500, count100, count50, count10, countUnit) {
  return `
    <table>
      <thead>
        <tr>
          <th>${COIN.COIN}</th>
          <th>${COIN.COUNT}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${COIN.WON_500}</td>
          <td id="vending-machine-coin-500-quantity">
            ${count500}${countUnit}
          </td>
        </tr>
        <tr>
          <td>${COIN.WON_100}</td>
          <td id="vending-machine-coin-100-quantity">
            ${count100}${countUnit}
          </td>
        </tr>
        <tr>
          <td>${COIN.WON_50}</td>
          <td id="vending-machine-coin-50-quantity">
            ${count50}${countUnit}
          </td>
        </tr>
        <tr>
          <td>${COIN.WON_10}</td>
          <td id="vending-machine-coin-10-quantity">
            ${count10}${countUnit}
          </td>
        </tr>
      </tbody>
    </table>
  `;
}

function createCoinListTable() {
  if (!getLocalStorage('machineCoins')) {
    return createTable('', '', '', '', '');
  }

  const machineCoins = getLocalStorageArray('machineCoins');
  const [count500, count100, count50, count10] = machineCoins;

  return createTable(count500, count100, count50, count10, COIN.COUNT_UNIT);
}

export function createCoinList() {
  const coinList = elem.createDiv();
  const coinListHeader = createCoinListHeader();
  coinList.append(coinListHeader);
  const coinListTable = createCoinListTable();
  coinList.innerHTML += coinListTable;

  return coinList;
}

export function updateMachineCoins() {
  const machineCoins = getLocalStorageArray('machineCoins');
  const coins = [
    'vending-machine-coin-500-quantity',
    'vending-machine-coin-100-quantity',
    'vending-machine-coin-50-quantity',
    'vending-machine-coin-10-quantity',
  ];

  for (let i = 0; i < 4; i += 1) {
    elem.$(coins[i]).textContent = machineCoins[i] + COIN.COUNT_UNIT;
  }
}
