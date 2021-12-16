import { createTab } from '../../common/element.js';
import createChangeList from './ChangeList.js';
import createMoneyInput from './MoneyInput.js';
import createPurchasableList from './PurchasableList.js';

function createProductPurchaseTab() {
  return createTab('product-purchase-tab');
}

export default function createProductPurchase() {
  const productPurchaseTab = createProductPurchaseTab();
  const moneyInput = createMoneyInput();
  const purchasableList = createPurchasableList();
  const changeList = createChangeList();
  productPurchaseTab.append(moneyInput, purchasableList, changeList);

  return productPurchaseTab;
}
