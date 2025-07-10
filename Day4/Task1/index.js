import { Triangle } from "./Triangle.js";
import { Rectangle } from "./Rectangle.js";
import { Square } from "./Square.js";
import { Circle } from "./Circle.js";
import { Shape } from "./Shape.js";

const Shapes = [
  new Triangle(3,5,4),
  new Rectangle(4,5),
  new Square(5),
  new Circle(5),
  new Shape("lol"),
];

Shapes.forEach(shape => {
  console.log(shape.toString());
});
