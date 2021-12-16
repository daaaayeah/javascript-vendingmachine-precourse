import { BUTTON, COIN, HEADER } from '../../common/constant.js';
import * as elem from '../../common/element.js';
import {
  getLocalStorage,
  getLocalStorageArray,
} from '../../common/localStorage.js';

function createChangeListHeader() {
  return elem.createHeader('h3', HEADER.CHANGE_LIST);
}

function createReturnButton() {
  return elem.createButton('coin-return-button', BUTTON.RETURN);
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
          <td id="coin-500-quantity">
            ${count500}${countUnit}
          </td>
        </tr>
        <tr>
          <td>${COIN.WON_100}</td>
          <td id="coin-100-quantity">
            ${count100}${countUnit}
          </td>
        </tr>
        <tr>
          <td>${COIN.WON_50}</td>
          <td id="coin-50-quantity">
            ${count50}${countUnit}
          </td>
        </tr>
        <tr>
          <td>${COIN.WON_10}</td>
          <td id="coin-10-quantity">
            ${count10}${countUnit}
          </td>
        </tr>
      </tbody>
    </table>
  `;
}

function createChangeListTable() {
  if (!getLocalStorage('changes')) {
    return createTable('', '', '', '', '');
  }

  const changes = getLocalStorageArray('changes');
  const [count500, count100, count50, count10] = changes;

  return createTable(count500, count100, count50, count10, COIN.COUNT_UNIT);
}

export default function createChangeList() {
  const changeList = elem.createDiv();
  const changeListHeader = createChangeListHeader();
  const returnButton = createReturnButton();
  changeList.append(changeListHeader, returnButton);
  const changeListTable = createChangeListTable();
  changeList.innerHTML += changeListTable;

  return changeList;
}
