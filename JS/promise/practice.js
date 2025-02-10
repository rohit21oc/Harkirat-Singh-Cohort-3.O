//First method
function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("First");
    await setTimeoutPromisified(3000);
    console.log("second");
    await setTimeoutPromisified(5000);
    console.log("third");
}
solve();
// function callback(){
//     console.log("1 Sec has passed ->> Hi");
// }
// function callback1(){
//     console.log("3 Sec has passed ->> Hello");
// }
// function callback2(){
//     console.log("5 Sec has passed ->> Hi there");
// }
// setTimeoutPromisified(1000).then(callback);
// setTimeoutPromisified(3000).then(callback1);
// setTimeoutPromisified(5000).then(callback2);

setTimeoutPromisified(1000).then(()=>{
    console.log("Hi");
    return setTimeoutPromisified(3000).then(()=>{
        console.log("Hello");
        return setTimeoutPromisified(5000).then(()=>{
            console.log("Hellloooo")
        })
    })
});

// Second method
function hii(){
    console.log("How are u?");
}
hii();
setTimeout(() => {
    console.log("Hi");
    setTimeout(() => {
        console.log("Hello");
        setTimeout(()=>{
            console.log("Hi there");
        },5000);
        
    }, 3000);
}, 1000);

console.log("I'm fine...");

const fs = require("fs");
function readFIleAsync(){
    return new Promise (function(resolve,reject){
        fs.readFile("data.txt","utf-8",function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}
// async function solved(){
//     let data = await readFIleAsync(5000);
//     console.log(data);
// }
// solved();
readFIleAsync().then((d)=>{
    console.log("Data has been read "+d);
}).catch((e)=>{
    console.log("Error"+e);
    
});