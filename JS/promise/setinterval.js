let ctrl = 0;
function callback(){
    console.log(ctrl);
    ctrl = ctrl +1;
}
setInterval(callback,1000);