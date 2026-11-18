// console.log(1);
// const p = new Promise((resolve, reject) => {
//   console.log(2);
//     resolve("nishant");
// //   reject("error aa gaya");
// });

// p.then((value) => {
//   console.log(value);
//   console.log("fulfilled");
// }).catch((value) => {
//   console.log(value);
//   console.log("rejected");
// }).finally(() => {
//     console.log("mai toh hamesha chalunga");
// })

// console.log(3);

function searchFood() {
  return new Promise((res, rej) => {
    console.log("searching...");
    setTimeout(function fun1() {
      // res("pizza");
      rej("searching failed");
      // return "pizza"
    }, 2000);
  });
}

function orderFood(food) {
  return new Promise((res, rej) => {
    console.log("ordering...");
    setTimeout(function fun2() {
      let amount = 535;
      res({ amount, food });
    }, 1000);
  });
}

function payment(amount, food) {
  return new Promise((res, rej) => {
    console.log("payment started...");
    setTimeout(function fun3() {
      console.log("Payment successfull");
    }, 3000);
  });
}

// let res = searchFood();

// res
//   .then((food) => {
//     console.log(`${food} selected...`);
//     return orderFood(food); // return a promise
//   })
//   .then(({ amount, food }) => {
//     console.log(`You have to pay ${amount} Rupees for ${food}`);
//     return payment();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function processOrder() {
  try {
    let food = await searchFood();
    console.log(`${food} selected...`);
    let { amount } = await orderFood();
    console.log(`You have to pay ${amount} Rupees for ${food}`);
    await payment();
  } catch (error) {
    console.log(error);
  } finally{
    console.log("always run");
  }
}

processOrder();

// console.log(1);

// setTimeout(function fun1()  {
//   console.log(4);
// }, 1000);

// const p = new Promise(function fun2(resolve, reject) {
//   console.log(2);
//   resolve("nishant");
//   //   reject("error aa gaya");
// });

// p.then(function fun3(value) {
//   console.log("fulfilled");
// }).catch((value) => {
//   console.log("rejected");
// });

// console.log(3);

// console.log(1);
// const p1 = new Promise((res, rej) => {
//   res("hii");
// });

// console.log(2);

// async function fun1() {
//   console.log(3);
//   let value = await p1;
//   console.log(4);
//   console.log(value);
// }
// console.log(5);
// fun1();
// console.log(6);
