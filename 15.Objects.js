let user = {
  name: "Hardik",
  isAdult: true,
  aadharNumber: 5423523452354325,
  address: {
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
  },
  favColors: ["red", "blue", "yellow", "pink"],
  pinCode: 432535,
  printName: function () {
    console.log(this.name, this.address.country);
  },
};

// console.log(user.name); // dot notation
// console.log(user["name"]); // bracket notation

// console.log(user.password); // undefined

// user.printName()

// const keys  = Object.keys(user)
// console.log(keys);

// const values  = Object.values(user)
// console.log(values);

// const entries = Object.entries(user);
// console.log(entries);

// for (key in user) {
//   let value = user[key];
//   console.log(`${key} = ${value}`);
// }

// for ([key, value] of Object.entries(user)){
//   console.log(`${key} = ${value}`);
// }

// let arr = [1, 4, 2, 5, 25, 67];

// for( value of arr){
//     console.log(value);
// }

// let product = {
//     name : "Iphone",
//     price : 43532,
// }

// product.brand = "apple" // adding
// // product["brand"] = "apple"

// product.price = 5436344 // updating

// delete product.name; // deleting

// console.log(product);

let mobile = {
  name: "iphone",
  brand: "apple",
  price: 534532,
};

// let name = mobile.name
// let brand = mobile.brand
// let price  = mobile.price

// let { name: mobileName, brand, price } = mobile;
let { name: mobileName, ...rest } = mobile;

// console.log(mobileName, rest);

let mobile2 = { ...mobile, name: "Samsung" };
// console.log(mobile2);

let color = ["red", "blue"];

let color2 = [...color];
// color.push("pink")
// console.log(color);
// console.log(color2);
// let red = color[0]
// let blue = color[1]

let [red, blue] = color;

// console.log(red, blue);

// console.log(...color);

function sumOfN(...all) {
    let sum = 0;
    all.forEach((val) => sum += val)
    console.log(sum);
}

sumOfN(3, 5, 6, 6, 7, 7, 3, 33 ,3456, 346);
