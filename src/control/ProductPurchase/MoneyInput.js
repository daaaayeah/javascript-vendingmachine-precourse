import { $ } from '../../common/element.js';
import { getLocalStorage, setLocalStorage } from '../../common/localStorage.js';
import { updateCustomerAmount } from '../../view/ProductPurchase/MoneyInput.js';
import { setMachine } from '../ChangeCharge/CoinCharge.js';

function setCustomerAmountLocalStorage(amountInput) {
  let customerAmount = getLocalStorage('customerAmount') * 1;
  customerAmount += amountInput;
  setLocalStorage('customerAmount', customerAmount);
}

function setCustomer(amountInput) {
  setCustomerAmountLocalStorage(amountInput);
  updateCustomerAmount();
}

function onMoneyInputClick(event) {
  event.preventDefault();
  const amountInput = $('charge-input').value * 1;
  setCustomer(amountInput);
  setMachine(amountInput);
}

export default function moneyInput() {
  $('charge-button').addEventListener('click', onMoneyInputClick);
}
