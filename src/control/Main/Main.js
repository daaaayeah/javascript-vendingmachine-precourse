import { $ } from '../../common/element.js';
import { setLocalStorage } from '../../common/localStorage.js';
import updateTabs from '../../view/Main/Tab.js';

function setTabLocalStorage(idx) {
  const tabs = [
    'product-manage-tab',
    'change-charge-tab',
    'product-purchase-tab',
  ];
  tabs.forEach((tab) => {
    setLocalStorage(tab, 'none');
  });
  setLocalStorage(tabs[idx], 'block');
}

function onMenuClick(event) {
  const menus = [
    'product-purchase-menu',
    'vending-machine-manage-menu',
    'product-add-menu',
  ];
  const idx = menus.indexOf(event.target.getAttribute('id'));
  setTabLocalStorage(idx);
  updateTabs();
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
