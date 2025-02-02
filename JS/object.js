let user = {
    name: "Rohit",
    age:21,
    greet: function(){
        console.log("Hello, My name is "+ this.name);
        
    }
}
console.log("Age: "+user.age);
user.greet();


function greet(){
    // console.log("Hi "+ person.name +","+" Your age is  "+ person.age);
    console.log("hii");
    console.log(person.name);
    console.log("your age is ");
    console.log(person.age);
    
    
    
}
let person ={
    name: 'John',
    age:25,
    city:"Chennai"
}
greet();