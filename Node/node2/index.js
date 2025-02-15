const express = require("express");
const app = express();
// const port = 3000;

app.get("/",function(req,res){
    console.log(req);
    res.send("<b>Hello, How are u?</b>");
});

app.post("/asd",function(req,res){
    res.send("<b>Hello world from post req...</b>");
    
})

app.listen(3000,()=>{
    console.log("Port is listen on port 3000");
});