export class Shape {
    constructor(shape) {
        if(new.target == Shape){
          throw new Error("This is an Abstract class");
        }
        this.shape = shape;
    }


  area(){
    throw new Error("I can't be used bec i am an abstract function");
   }

 perimeter(){
    throw new Error("I can't be used bec i am an abstract function");
 }


toString() {
    return `${this.shape} : Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
  }

}


