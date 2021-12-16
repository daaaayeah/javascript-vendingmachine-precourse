import { $ } from '../common/element.js';
import style from '../common/style.js';
import createMain from './Main/Main.js';
import createProductManage from './ProductManage/ProductManage.js';

export default function createView() {
  document.head.innerHTML += style;
  const main = createMain();
  const productManage = createProductManage();
  $('app').append(main, productManage);
}
