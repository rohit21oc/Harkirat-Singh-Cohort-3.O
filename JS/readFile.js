// const fs = require("fs");

// try {
//   const contents = fs.readFileSync("data.txt", "utf-8");
//   console.log(contents);
// } catch (err) {
//   console.error("Error reading the file", err);
// }


const fs = require("fs");

fs.readFile("data.txt","utf-8",(err,data)=>{
  if(err){
    console.log("Something Error...");
    return;
  }
  console.log(data);
  
})

function print(err,data){
  console.log(data);
  
}
fs.readFile("data.txt","utf-8",print);

fs.readFile("hello.txt","utf-8",print);

console.log("Done!");

