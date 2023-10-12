import { createHeader } from "@components/header";
import { createButton } from "@components/button";

const header = document.querySelector('header');

const h1 = createHeader();
const myButton = createButton('Нажми меня!!!', () => {
  alert('Кнопка была нажата');
});

header?.appendChild(h1);
header?.appendChild(myButton);

const parallax = document.querySelector(".parallax") as HTMLElement;
const circles = document.querySelectorAll(".circle") as NodeListOf<HTMLElement>;

parallax.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const centerX = parallax.offsetWidth / 2;
  const centerY = parallax.offsetHeight / 2;

  circles.forEach((circle, index) => {
    const depth = index + 1;
    const xOffset = (clientX - centerX) * depth * 0.02;
    const yOffset = (clientY - centerY) * depth * 0.02;
    circle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  });
});

parallax.addEventListener("mouseleave", () => {
  circles.forEach((circle) => {
    circle.style.transform = "translate(0, 0)";
  });
});
