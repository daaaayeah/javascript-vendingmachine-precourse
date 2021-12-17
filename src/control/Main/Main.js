import { getTabIDs } from '../../common/array.js';
import { $ } from '../../common/element.js';
import { setLocalStorage } from '../../common/localStorage.js';
import updateTabs from '../../view/Main/Tab.js';

function getMenuIDs() {
  return [
    'product-add-menu',
    'vending-machine-manage-menu',
    'product-purchase-menu',
  ];
}

function setTabLocalStorage(idx) {
  const tabs = getTabIDs();
  tabs.forEach((tab) => {
    setLocalStorage(tab, 'none');
  });
  setLocalStorage(tabs[idx], 'block');
}

function onMenuClick(event) {
  const menus = getMenuIDs();
  const idx = menus.indexOf(event.target.getAttribute('id'));
  setTabLocalStorage(idx);
  updateTabs();
}

export default function tabMenu() {
  const menus = getMenuIDs();
  menus.forEach((menu) => {
    $(menu).addEventListener('click', onMenuClick);
  });
}
