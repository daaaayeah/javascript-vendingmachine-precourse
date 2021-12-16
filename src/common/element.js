export function $(id) {
  return document.getElementById(id);
}

export function createDiv() {
  return document.createElement('div');
}

export function createHeader(level, textContent) {
  const header = document.createElement(level);
  header.textContent = textContent;

  return header;
}

export function createButton(id, textContent) {
  const button = document.createElement('button');
  button.setAttribute('id', id);
  button.textContent = textContent;

  return button;
}
