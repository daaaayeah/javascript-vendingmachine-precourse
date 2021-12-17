import { coinCharge } from './ChangeCharge/CoinCharge.js';
import tabMenu from './Main/Main.js';
import productAdd from './ProductManage/ProductAdd.js';
import changeReturn from './ProductPurchase/ChangeReturn.js';
import { moneyInput } from './ProductPurchase/MoneyInput.js';
import productPurchase from './ProductPurchase/ProductPurchase.js';

export default function setControl() {
  tabMenu();
  productAdd();
  coinCharge();
  moneyInput();
  changeReturn();
  productPurchase();
}
