import { getTabIDs } from '../../common/array.js';
import { $ } from '../../common/element.js';
import { getLocalStorage } from '../../common/localStorage.js';

export default function updateTabs() {
  const tabs = getTabIDs();
  tabs.forEach((tab) => {
    const display = getLocalStorage(tab);
    $(tab).style.display = display;
  });
}
