import { $ } from '../../common/element.js';
import displayTab from '../../view/Main/Tab.js';

function onMenuClick(event) {
  const menus = [
    'product-purchase-menu',
    'vending-machine-manage-menu',
    'product-add-menu',
  ];
  const idx = menus.indexOf(event.target.getAttribute('id'));
  displayTab(idx);
}

export default function tabMenu() {
  const menus = [
    'product-purchase-menu',
    'vending-machine-manage-menu',
    'product-add-menu',
  ];
  menus.forEach((menu) => {
    $(menu).addEventListener('click', onMenuClick);
  });
}
