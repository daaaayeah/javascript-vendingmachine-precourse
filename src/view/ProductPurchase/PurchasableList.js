import { BUTTON, HEADER, PRODUCT } from '../../common/constant.js';
import * as elem from '../../common/element.js';
import { getLocalStorage } from '../../common/localStorage.js';

function createPurchasableHeader() {
  return elem.createHeader('h3', HEADER.PURCHASABLE_LIST);
}

function createPurchasableListTable() {
  return `
    <table>
      <thead>
        <tr>
          <th>${PRODUCT.NAME}</th>
          <th>${PRODUCT.PRICE}</th>
          <th>${PRODUCT.QUANTITY}</th>
          <th>${PRODUCT.PURCHASE}</th>
        </tr>
      </thead>
  `;
}

function createPurchasableListTableData(name, price, quantity) {
  return `
    <tr class="product-purchase-item">
      <td class="product-purchase-name" data-product-name="${name}">${name}</td>
      <td class="product-purchase-price" data-product-price="${price}">${price}</td>
      <td class="product-purchase-quantity" data-product-quantity="${quantity}">${quantity}</td>
      <td>
        <button class="purchase-button">${BUTTON.PURCHASE}</button>
      </td>
    </tr>
  `;
}

function createPurchasableListTableBodyRows() {
  let purchasableListTableBodyRows = '';
  const purchasables = JSON.parse(getLocalStorage('product'));
  purchasables.forEach((purchasable) => {
    const { name, price, quantity } = purchasable;
    const data = createPurchasableListTableData(name, price, quantity);
    purchasableListTableBodyRows += data;
  });

  return purchasableListTableBodyRows;
}

function createPurchasableListTableBody() {
  if (getLocalStorage('product')) {
    return createPurchasableListTableBodyRows();
  }
  return '';
}

export default function createPurchasableList() {
  const purchasableList = elem.createDiv();
  const purchasableHeader = createPurchasableHeader();
  purchasableList.append(purchasableHeader);

  let purchasableListTable = createPurchasableListTable();
  const purchasableListTableBody = createPurchasableListTableBody();
  purchasableListTable += purchasableListTableBody;
  purchasableList.innerHTML += purchasableListTable;

  return purchasableList;
}
