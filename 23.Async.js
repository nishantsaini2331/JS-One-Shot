// console.log(1);

// console.log(2);

// for(let i = 0 ; i  < 10000000000 ; i++){

// }

// setTimeout(() => {
//     console.log(3);
// } , 5000)

// setTimeout(() => {
//     console.log(4);
// } , 2000)

// const id = setTimeout(() => {
//   console.log(6);
//   clearTimeout(id);
// }, 1000);

// console.log(id);

// console.log(5);

console.log(1);

let count = 0;
const id = setInterval(() => {
  count++;
  console.log("Hii");
  if (count >= 5) {
    clearInterval(id);
  }
}, 1000);


console.log(2);