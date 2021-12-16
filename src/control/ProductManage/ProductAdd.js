import { $ } from '../../common/element.js';
import {
  getLocalStorageArray,
  setLocalStorage,
} from '../../common/localStorage.js';
import { updateProductList } from '../../view/ProductManage/ProductList.js';

function getNewProduct() {
  const productNameInput = $('product-name-input').value;
  const productPriceInput = $('product-price-input').value;
  const productQuantityInput = $('product-quantity-input').value;
  const newProduct = {
    name: productNameInput,
    price: productPriceInput,
    quantity: productQuantityInput,
  };

  return newProduct;
}

function setProductLocalStorage() {
  const products = getLocalStorageArray('product');
  const newProduct = getNewProduct();
  products.push(newProduct);
  setLocalStorage('product', JSON.stringify(products));
}

function onProductAddClick(event) {
  event.preventDefault();
  setProductLocalStorage();
  updateProductList();
}

export default function productAdd() {
  $('product-add-button').addEventListener('click', onProductAddClick);
}
