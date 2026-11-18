
function fun1(cb){
    console.log(cb);
    // cb()
}

function fun2(){
    console.log("fun2");
}

fun1(fun1)