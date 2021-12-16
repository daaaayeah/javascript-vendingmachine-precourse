import { HEADER, MENU } from '../../common/constant.js';
import * as elem from '../../common/element.js';

function createMainHeader() {
  return elem.createHeader('h1', HEADER.MAIN);
}

function createTabMenu() {
  const tabMenuDiv = elem.createDiv();
  const menuAttrs = [
    ['product-purchase-menu', MENU.PRODUCT_MANAGE],
    ['vending-machine-manage-menu', MENU.CHANGE_CHARGE],
    ['product-add-menu', MENU.PRODUCT_PURCHASE],
  ];
  menuAttrs.forEach((attr) => {
    const menu = elem.createButton(attr[0], attr[1]);
    tabMenuDiv.append(menu);
  });

  return tabMenuDiv;
}

export default function createMain() {
  const main = elem.createDiv();
  const mainHeader = createMainHeader();
  const tabMenu = createTabMenu();
  main.append(mainHeader, tabMenu);

  return main;
}
