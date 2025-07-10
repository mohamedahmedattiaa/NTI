import { Shape } from "./Shape.js";

export class Circle extends Shape {
  static PI = 3.14;
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Circle.PI * this.radius * this.radius;
  }
  perimeter() {
    return 2 * Circle.PI * this.radius;
  }
}
