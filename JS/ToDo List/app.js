// const { log } = require("node:console");

function addTodo(){
    const inputElement = document.querySelector("input");
const value = inputElement.value;
console.log(value);
}

// let ctrl = 0;
// function callback(){
//     const el = document.querySelectorAll("p")[1];
//     el.innerHTML = ctrl;
//     ctrl = ctrl+1;   
// }
// setInterval(callback,1000);

// Delete element

function deletElement(index){
    const element = document.getElementById("todo-"+index);
    document.getElementById("todoParent").removeChild(element);
}