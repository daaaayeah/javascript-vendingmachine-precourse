import { createTab } from '../../common/element.js';
import { createCoinCharge } from './CoinCharge.js';
import { createCoinList } from './CoinList.js';

function createChangeChargeTab() {
  return createTab('change-charge-tab');
}

export default function createChangeCharge() {
  const changeChargeTab = createChangeChargeTab();
  const coinCharge = createCoinCharge();
  const coinList = createCoinList();
  changeChargeTab.append(coinCharge, coinList);

  return changeChargeTab;
}
