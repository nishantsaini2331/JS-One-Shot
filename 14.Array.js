let students = ["nishant", "alex", "john", "cena"];

// console.log(students); // ["nishant" , "alex" , "john" , "cena"]
// console.log(students[2]); // john
// console.log(students[7]); // undefined

// console.log(students.length); // 4

// let lastIndex = students.length - 1; // 3

// console.log(students[lastIndex]); // cena

// console.log(students[-2]); // undefined

// console.log(students[0]);
// console.log(students[1]);

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

let studentsWithRollNo = [
  ["nishant", 23],
  ["alex", 54],
  ["john", 65],
  ["cena", 25],
];

// for (let i = 0; i < studentsWithRollNo.length; i++) {
//   let rollNumber = studentsWithRollNo[i][1];
//   let name = studentsWithRollNo[i][0];
//   console.log(`${rollNumber} - ${name}`);
// }

let products = ["laptop", "mobile", "tablet", "charger"];
// products.push("earphones") // [ 'laptop', 'mobile', 'tab/let', 'charger', 'earphones' ]
// products.pop() // [ 'laptop', 'mobile', 'tablet' ]
// products.unshift("usb cable") // [ 'usb cable', 'laptop', 'mobile', 'tablet', 'charger' ]
// products.shift() // [ 'mobile', 'tablet', 'charger' ]

// console.log(products.slice(0 , 3)); // [ 'laptop', 'mobile', 'tablet' ]
// console.log(products); // [ 'laptop', 'mobile', 'tablet', 'charger' ]

// console.log(products.splice(0 ,2)); // [ 'laptop', 'mobile' ]
// console.log(products); // [ 'tablet', 'charger' ]

// console.log(products.includes("mouse")); // false
// console.log(products.includes("mobile")); // true

// console.log(products.indexOf("tablet")); // index -> 2
// console.log(products.indexOf("mouse")); // index -> -1 (not exist)

// const result = products.find(function cb(value) {
//   console.log(value);
// });

// const result = products.find(function (value) {
//   console.log(value);
// });

const result = products.find((value, index) => {
  if (value === "usb cable") {
    return value;
  }
});

// console.log(result);

const result2 = products.some((value, index) => {
  if (value === "tablet") {
    return value;
  }
});

// console.log(result2);

const numbers = [3, 5, 2, 6, 4, 1];

// console.log(
//   numbers.sort((a, b) => b - a),
// );


// console.log(numbers.reverse());


const colors = ["red" , "blue" , "green" , "orange" , "pink" , "white"]

colors.forEach((color , i) => {
    console.log(color , i);
})