console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";
import { Square } from "./components/Square/Square.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");

const circleElement = Circle();
root.appendChild(circleElement);

const squareElement = Square();
root.appendChild(squareElement);

const pentagonElement = Pentagon();
root.appendChild(pentagonElement);

root.append(circle, square, pentagon);
