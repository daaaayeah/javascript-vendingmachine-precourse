import { $ } from '../../common/element.js';
import { getLocalStorage } from '../../common/localStorage.js';

export default function updateTabs() {
  const tabs = [
    'product-manage-tab',
    'change-charge-tab',
    'product-purchase-tab',
  ];
  tabs.forEach((tab) => {
    const display = getLocalStorage(tab);
    $(tab).style.display = display;
  });
}
