import { BUTTON, HEADER, PRODUCT } from '../../common/constant.js';
import * as elem from '../../common/element.js';

function createProductAddHeader() {
  return elem.createHeader('h3', HEADER.PRODUCT_ADD);
}

function createProductNameInput() {
  const [id, placeholder] = ['product-name-input', PRODUCT.NAME];
  const productNameInput = elem.createNumberInput(id, placeholder);
  productNameInput.setAttribute('type', 'text');

  return productNameInput;
}

function createProductAddInputs() {
  const productNameInput = createProductNameInput();
  const productAddInputs = [productNameInput];
  const inputAttrs = [
    ['product-price-input', PRODUCT.PRICE],
    ['product-quantity-input', PRODUCT.QUANTITY],
  ];
  inputAttrs.forEach((attr) => {
    const input = elem.createNumberInput(attr[0], attr[1]);
    productAddInputs.push(input);
  });

  return productAddInputs;
}

function createProductAddButton() {
  return elem.createButton('product-add-button', BUTTON.ADD);
}

function createProductAddForm() {
  const productAddForm = elem.createForm();
  const productAddInputs = createProductAddInputs();
  productAddInputs.forEach((input) => productAddForm.append(input));
  const productAddButon = createProductAddButton();
  productAddForm.append(productAddButon);

  return productAddForm;
}

export default function createProductAdd() {
  const productAdd = elem.createDiv();
  const productAddHeader = createProductAddHeader();
  const productAddForm = createProductAddForm();
  productAdd.append(productAddHeader, productAddForm);

  return productAdd;
}
