function filterAdult(person){
    return person.filter(user=>user.age>18 && user.gender=="Male");
}

function filAd(person){
    let result =[];
    for(let i=0;i<person.length;i++){
        if(person[i].age>=18 && person[i].gender=="Male"){
            result.push(person[i]);
        }
    }
    return result;
}

const person = [
    {
        name:"Rohit",
        age:21,
        gender:"Male"
    },{
        name:"Deepak",
        age:15,
        gender:"Male"
    },{
        name:"Shivani",
        age:21,
        gender:"Female"
    },{
        name:"Prem",
        age:24,
        gender:"Male"
    },
];

console.log(filterAdult(person));
console.log(filAd(person));