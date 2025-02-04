class Parallelogram{
    constructor(base,height,color){
        this.base = base,
        this.height = height,
        this.color = color
    }
    area(){
        const area = this.base * this.height;
        return area;
    }
    paint(){
        console.log(`Color of the Parallelogram is ${this.color}`);
    }
}

const para = new Parallelogram(50,40,"Green");
const area = para.area();
para.paint(); 
console.log(area);
