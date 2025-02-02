function sum(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operation(a,b,op){
    let val= op(a,b);
    return val
}
let ans = operation(10,5,substract);
console.log(ans);
