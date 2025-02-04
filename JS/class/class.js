const now = new Date();
console.log(now.getTime());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getUTCDate());


// const user = {
//     name:"Rohit",
//     age:21
// }
// const user1 = user.name;
// console.log(user1);


const map = new Map();
map.set("Name","Rohit");
map.set("Age","21");
console.log(map.get("Name"))
console.log(map.get("Age"))

const name = "rohit";
console.log(name.toLocaleUpperCase());
console.log(name.toLocaleLowerCase());