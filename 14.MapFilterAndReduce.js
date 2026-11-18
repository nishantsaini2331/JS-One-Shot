const students = [
  {
    name: "nishant",
    marks: 50,
  },
  {
    name: "alex",
    marks: 80,
  },
  {
    name: "john",
    marks: 30,
  },
  {
    name: "cena",
    marks: 29,
  },
];

const output = students.map(({ name, marks }) => {
  if (marks < 30) {
    return { name, marks, result: "fail" };
  }
  return { name, marks, result: "pass" };
});

// console.log(output);

const failedStudents = students.filter((student) => {
  const { name, marks } = student;

  if (marks < 30) {
    return student;
  }
});

// console.log(failedStudents);

const totalMarks = students.reduce((acc, curVal) => {
    // acc = acc + curVal.marks
    // return acc

    return acc + curVal.marks
}, 0);

// console.log(totalMarks);

let cart = [
    {
        name : "earphone",
        quantity : 3,
        price: 400
    },
    {
        name : "mouse",
        quantity : 2,
        price: 794,
    }
]

const cartTotal = cart.reduce((acc , {quantity ,price}) => {
    return acc + quantity * price
} , 0)

// console.log(cartTotal);

let arr = [1, 2 , 3, 4]

let res = arr.reduce((acc , cur) => {
    return acc + cur
},0)

console.log(res);