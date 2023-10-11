import { createHeader } from "@components/header";
import { createButton } from "@components/button";

const header = document.querySelector('header');

const h1 = createHeader();
const myButton = createButton('Нажми меня!', () => {
  alert('Кнопка была нажата');
});

header?.appendChild(h1);
header?.appendChild(myButton);
