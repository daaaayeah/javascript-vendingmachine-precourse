import { $ } from '../common/element.js';
import style from '../common/style.js';
import createChangeCharge from './ChangeCharge/ChangeCharge.js';
import createMain from './Main/Main.js';
import createProductManage from './ProductManage/ProductManage.js';
import createProductPurchase from './ProductPurchase/ProductPurchase.js';

export default function createView() {
  document.head.innerHTML += style;
  const main = createMain();
  const productManage = createProductManage();
  const changeCharge = createChangeCharge();
  const productPurchase = createProductPurchase();
  $('app').append(main, productManage, changeCharge, productPurchase);
}
