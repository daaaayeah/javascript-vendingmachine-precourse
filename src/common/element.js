export function $(id) {
  return document.getElementById(id);
}

export function createDiv() {
  return document.createElement('div');
}

export function createTab(id) {
  const tab = createDiv();
  tab.setAttribute('id', id);

  return tab;
}

export function createHeader(level, textContent) {
  const header = document.createElement(level);
  header.textContent = textContent;

  return header;
}

export function createForm() {
  const form = document.createElement('form');
  form.style.display = 'flex';

  return form;
}

export function createNumberInput(id, placeholder) {
  const numberInput = document.createElement('input');
  numberInput.setAttribute('id', id);
  numberInput.setAttribute('type', 'number');
  numberInput.setAttribute('placeholder', placeholder);

  return numberInput;
}

export function createButton(id, textContent) {
  const button = document.createElement('button');
  button.setAttribute('id', id);
  button.textContent = textContent;

  return button;
}
