// function CreateUser(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // CreateUser.call({}, "nishant", 24);

// const user1 = new CreateUser("nishant", 24);
// const user2 = new CreateUser("ram", 22);
// console.log(user1,user2);

// class Product {
//   #tax = 34; // private property
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   printProductName() {
//     console.log(this.name);
//   }

//   static calculatePrice() {
//     console.log("secret method");
//   }
// }

// const p1 = new Product("Iphone", 423434);
// const p2 = new Product("Sumsung", 523432);

// console.log(p1, p2);

// p1.printProductName();
// p1.calculatePrice();

// console.log(p1 instanceof Product);

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log("login -> user class");
  }
}

class Customer extends User {
  constructor(name, email, cart) {
    super(name, email);
    this.cart = cart;
  }

  login() {
    console.log("login -> customer class");
  }
}

let c1 = new Customer("nishant", "nishant@gmail.com", []);

c1.login();

console.log(c1);
