import { createTab } from '../../common/element.js';
import { getLocalStorage, setLocalStorage } from '../../common/localStorage.js';
import createProductAdd from './ProductAdd.js';
import { createProductList } from './ProductList.js';

function createProductManageTab() {
  return createTab('product-manage-tab');
}

function initProductManageTab() {
  const productManageTab = createProductManageTab();

  if (!getLocalStorage(productManageTab.id)) {
    productManageTab.style.display = 'block';
    setLocalStorage(productManageTab.id, 'block');
  }

  return productManageTab;
}

export default function createProductManage() {
  const productManageTab = initProductManageTab();
  const productAdd = createProductAdd();
  const productList = createProductList();
  productManageTab.append(productAdd, productList);

  return productManageTab;
}
