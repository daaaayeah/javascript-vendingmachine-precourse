import { $ } from '../common/element.js';
import style from '../common/style.js';
import createChangeCharge from './ChangeCharge/ChangeCharge.js';
import createMain from './Main/Main.js';
import createProductManage from './ProductManage/ProductManage.js';

export default function createView() {
  document.head.innerHTML += style;
  const main = createMain();
  const productManage = createProductManage();
  const changeCharge = createChangeCharge();
  $('app').append(main, productManage, changeCharge);
}
