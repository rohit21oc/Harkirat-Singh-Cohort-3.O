function setTimeoutPromisified(ms){
    const d = new Promise(resolve =>(resolve,ms));
    return d;
}

function callback(){
    console.log("3 second has been passed!");    
} 

setTimeoutPromisified(3000).then(callback);


function afterDone(){
    console.log("Done!");
    
}
function afterDone2(){
    console.log("its Done!");
    
}
console.log("Hello");
setTimeoutPromisified(3000).then(afterDone);


function waitFor2Sec(resolve){
    setTimeout(resolve,2000);
};
function main(){
    console.log("Main called!");
}
waitFor2Sec(main);

setTimeout(afterDone2,1000);


function random(){
console.log("Hey there");

}

let p = new Promise(random)
console.log(p);
let d = new Date()
console.log(d);
