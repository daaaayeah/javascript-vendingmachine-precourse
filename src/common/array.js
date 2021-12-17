import { COIN } from './constant.js';

export function createCoins() {
  return [COIN.COIN_500, COIN.COIN_100, COIN.COIN_50, COIN.COIN_10];
}

export function createCoinCounts() {
  return [
    COIN.COUNT_DEFAULT,
    COIN.COUNT_DEFAULT,
    COIN.COUNT_DEFAULT,
    COIN.COUNT_DEFAULT,
  ];
}

export function getTabIDs() {
  return ['product-manage-tab', 'change-charge-tab', 'product-purchase-tab'];
}
