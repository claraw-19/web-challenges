console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";
import { Square } from "./components/Square/Square.js";

const root = document.getElementById("root");

const circleElement = Circle();
root.appendChild(circleElement);

const squareElement = Square();
root.appendChild(squareElement);

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});

root.append(circle, square, pentagon);
