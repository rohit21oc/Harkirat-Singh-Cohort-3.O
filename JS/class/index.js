class Rectangle{
    constructor(width,height,color){
        this.width = width,
        this.height = height,
        this.color = color
    }

    area(){
        const area = this.width * this.height;
        return area;
    }
    paint(){
        console.log(`Printing with color ${this.color}`);
    }
}

const rect = new Rectangle(5,10,"Blue");
const area = rect.area();
rect.paint();
console.log(`Area of rectangle is ${area}`);


