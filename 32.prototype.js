let user = {
  name: "nishant",
  age: 24,
  toString : function(){
    console.log("user toSting Method");
  }
};

user.toString()
// console.log(user);

// function fun1(){

// }
// console.log(fun1);
// fun1.toString()

let arr = [1, 2, 3, 4];

// console.log(arr.__proto__);

Object.prototype.printHello = function () {
  console.log("hello");
};

// arr.printHello()

Array.prototype.printArray = function () {
  this.forEach(val => console.log(val))
};

// "sdsfsdf".printHello();

[1, 2, 4, 5].printArray();
// String
// Number
// Function
