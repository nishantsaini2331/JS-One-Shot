// const a = 6;
// function fun1() {
//   //   const a = 4;
//   function fun2() {
//     console.log(a);
//   }
//   fun2()
// }

// fun1();


// function outter(){
//     let a = 53;

//     function inner(){
//         console.log(a);
//     }

//     a = 67;

//     return inner;
// }

// const response = outter();
// console.log(response);

// response();


function outer(){
    let count = 0 ;

    function counter(){
        count = count + 1;
        console.log(count);
    }

    return counter;
}

const counter1 = outer();
const counter2 = outer();

counter1()
counter1()
counter1()
counter2()
counter2()