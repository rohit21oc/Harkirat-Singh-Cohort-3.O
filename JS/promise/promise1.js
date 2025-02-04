function deoAsyncOp(resolve){
    setTimeout(resolve, 3000);
}

const p = new Promise(deoAsyncOp);

function callback(){
    console.log("Callback called");
}

p.then(callback);