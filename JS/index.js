var isStudent = true;
console.log(isStudent);
isStudent = "Rohit";
isStudent =10;
console.log(isStudent);


// const fName = "Rohit";
// fName="skjfhgf";
// console.log(fName); //It will give error

let fName = "Rohit";
fName="skjfhgf";
console.log(fName);


let user1="abc";
let user2="abcd";
let user3="abc3";
console.log(user1);

let users = ["rohit","Harkirat","sumit","Anam"];
console.log(users);

users.forEach((user=>console.log(user)));

// Using For
for(let user of users){
    console.log(user);
    
}