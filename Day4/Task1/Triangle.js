import { Shape } from "./Shape.js";

export class Triangle extends Shape {
  constructor(base, height) {
    super("Triangle");
    this.base = base;
    this.height = height;
    this.hypotenuse = Math.sqrt(base ** 2 + height ** 2);
  }

  area() {
    return 0.5 * (this.base * this.height);
  }
  perimeter(){
    return this.base + this.height + this.hypotenuse;
  }
}
