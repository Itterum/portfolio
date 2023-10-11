export function createButton(text: string, clickHandler: () => void) {
  const element = document.createElement('button');
  element.type = 'submit';
  element.textContent = text;
  element.addEventListener('click', clickHandler);
  return element;
}