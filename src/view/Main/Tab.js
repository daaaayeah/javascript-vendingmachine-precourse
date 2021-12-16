import { $ } from '../../common/element.js';

export default function displayTab(idx) {
  const tabs = ['product-manage-tab'];
  tabs.forEach((tab) => {
    $(tab).style.display = 'none';
  });
  $(tabs[idx]).style.display = 'block';
}
