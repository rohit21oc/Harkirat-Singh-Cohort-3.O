
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
    
})