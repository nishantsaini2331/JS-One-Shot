let a = 54; // global scope

// console.log(a);

if (true) {
  let b = 23; // block scope
  // console.log(b);
  var c = 43; // global scope
  //   console.log(c);
}
// console.log(c);
// console.log(b);

// function random(){
//     console.log(a);
// }
// console.log(a);

function fun1(para1) {
  const b = 23; // function scope
  //   console.log(b);
  var c = 43; // function scope
  //   console.log(c);
}
// fun1();
// // console.log(b);
// console.log(c);

// function counter(){
//     let count = 0;
//     count = count + 1
//     console.log(count);
// }

// counter()
// counter()

let count = 0;

function counter() {
  count = count + 1;
  console.log(count);
}

counter();
counter();

