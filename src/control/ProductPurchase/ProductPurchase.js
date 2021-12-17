import { getPurchaseButtons } from '../../common/element.js';
import {
  getLocalStorage,
  getLocalStorageArray,
  setLocalStorage,
} from '../../common/localStorage.js';
import { updateProductList } from '../../view/ProductManage/ProductList.js';
import { updateCustomerAmount } from '../../view/ProductPurchase/MoneyInput.js';
// eslint-disable-next-line import/no-cycle
import { updatePurchasableList } from '../../view/ProductPurchase/PurchasableList.js';

function getProductIdx(name) {
  const products = getLocalStorageArray('product');
  const productIdx = products.findIndex((i) => i.name === name);

  return productIdx;
}

function setProductLocalStorage(productIdx) {
  const oldProducts = getLocalStorageArray('product');
  oldProducts[productIdx].quantity -= 1;
  const newProducts = oldProducts;
  setLocalStorage('product', JSON.stringify(newProducts));
}

function setCustomerAmount(productIdx) {
  const products = getLocalStorageArray('product');
  const customerAmount = getLocalStorage('customerAmount');
  const productPrice = products[productIdx].price;
  setLocalStorage('customerAmount', customerAmount - productPrice);
}

function onProductPurchaseClick(event) {
  const name = event.target.dataset.productButton;
  const productIdx = getProductIdx(name);
  setProductLocalStorage(productIdx);
  setCustomerAmount(productIdx);
  updateCustomerAmount();
  updateProductList();
  updatePurchasableList();
}

export default function productPurchase() {
  const purchaseButtons = [...getPurchaseButtons('purchase-button')];

  purchaseButtons.forEach((button) => {
    button.addEventListener('click', onProductPurchaseClick);
  });
}
