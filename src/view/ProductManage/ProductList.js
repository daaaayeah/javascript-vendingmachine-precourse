import { HEADER, PRODUCT } from '../../common/constant.js';
import * as elem from '../../common/element.js';
import { getLocalStorage } from '../../common/localStorage.js';

function createProductListHeader() {
  return elem.createHeader('h3', HEADER.PRODUCT_LIST);
}

function createProductListTable() {
  return `
    <table>
      <thead>
        <tr>
          <th>${PRODUCT.NAME}</th>
          <th>${PRODUCT.PRICE}</th>
          <th>${PRODUCT.QUANTITY}</th>
        </tr>
      </thead>
  `;
}

function createProductListTableData(name, price, quantity) {
  return `
    <tr class="product-manage-item">
      <td class="product-manage-name">${name}</td>
      <td class="product-manage-price">${price}</td>
      <td class="product-manage-quantity">${quantity}</td>
    </tr>
  `;
}

function createProductListTableBodyRows() {
  let productListTableBodyRows = '';
  const products = JSON.parse(getLocalStorage('product'));
  products.forEach((product) => {
    const { name, price, quantity } = product;
    const data = createProductListTableData(name, price, quantity);
    productListTableBodyRows += data;
  });

  return productListTableBodyRows;
}

function createProductListTableBody() {
  if (getLocalStorage('product')) {
    return createProductListTableBodyRows();
  }
  return '';
}

export function createProductList() {
  const productList = elem.createDiv();
  const productListHeader = createProductListHeader();
  productList.append(productListHeader);

  let productListTable = createProductListTable();
  const productListTableBody = createProductListTableBody();
  productListTable += productListTableBody;
  productList.innerHTML += productListTable;

  return productList;
}

export function updateProductList() {
  const oldProductList = elem.$('product-manage-tab').lastChild;
  oldProductList.remove();
  const newProductList = createProductList();
  elem.$('product-manage-tab').append(newProductList);
}
