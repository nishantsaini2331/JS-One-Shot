// callback function
// function fun1(callback){
//     console.log("fun1 function");
//     callback();
// }

// function cb(){
//     console.log("callback function.");
// }

// fun1(cb);

function searchFood(cb1) {
  console.log("searching...");
  setTimeout(function fun1() {
    cb1("pizza");
    // return "pizza"
  }, 2000);
}

function orderFood(food, cb2) {
  console.log("ordering...");
  setTimeout(function fun2() {
    let amount = 535;
    cb2(amount);
    // cb2(amount);
  }, 1000);
}

function payment(food, amount, cb3) {
  console.log("payment started...");
  setTimeout(function fun3() {
    console.log("Payment successfull");
    cb3();
  }, 3000);
}

searchFood(function cb1(food) {
  console.log(`${food} selected...`);
  orderFood(food, function cb2(amount) {
    console.log(`You have to pay ${amount} Rupees for ${food}`);
    payment(food, amount, function cb3() {
      console.log("Bas aata hee hoga", food);
    });
  });
});
