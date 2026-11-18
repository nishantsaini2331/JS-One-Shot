// "use strict";

// console.log(this);
// console.log(globalThis === this);
// // console.log(global === globalThis);
// console.log(window);
// this.name = "nishant"

function fun1() {
  console.log(this);
}

// fun1()

const fun2 = () => {
  console.log(this);
};

// fun2()

function printName(city, country) {
  console.log(this.name , city , country);
}


let user1 = {
  name: "nishant",
  age: 53,
};

// user1.printName();

let user2 = {
  name: "ram",
  age: 34,
};


// printName.call(user2 , "delhi" , "india");
// printName.apply(user2 , ["delhi" , "india"]);

const newFunction = printName.bind(user2 , "delhi" , "india");

newFunction();

