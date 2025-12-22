class shape{
    constructor(){

    }
}

class circle extends shape {
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return 3.14 * this.radius * this.radius
    }
}

const c1 = new circle (10);
console.log("area of the circle "+ c1.area())
