import { createTab } from '../../common/element.js';
import createProductAdd from './ProductAdd.js';
import { createProductList } from './ProductList.js';

function createProductManageTab() {
  return createTab('product-manage-tab');
}

export default function createProductManage() {
  const productManageTab = createProductManageTab();
  const productAdd = createProductAdd();
  const productList = createProductList();
  productManageTab.append(productAdd, productList);

  return productManageTab;
}
