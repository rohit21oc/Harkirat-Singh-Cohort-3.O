const fs = require("fs");

console.log("Top of the file");

function readTheFile(resolve){
    console.log("read the file called!");
    
    // fs.readFile("file.txt","utf-8",function(err,data){
    //     resolve(data);
    // })

    setTimeout(() => {
        console.log("callback based setTiomeout completed");
        resolve()
    }, 3000);
}
// function readFile(fileName){
//     return new Promise(readTheFile);
// }
// const p = readFile();
function setTimeoutPromisified(filename){
    console.log("setTimeout promisified called");
    return new Promise(readTheFile);
    
}
const p = setTimeoutPromisified()
// function callback(contents){
//     console.log(contents);    
// }
function callback(){
    console.log("----timer is done----");    
}
p.then(callback);
