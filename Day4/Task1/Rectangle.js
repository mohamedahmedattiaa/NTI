import { Shape } from "./Shape.js";

export class Rectangle extends Shape{
    constructor(width,height){
      super("Rectangle")
      this.width =width;
      this.height =height;
    }

 area(){
    return this.width * this.height;
 }
 perimeter(){
    return 2 * (this.width+this.height);
 }
}