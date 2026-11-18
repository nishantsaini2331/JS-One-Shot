function printTable(num, till = 10) {
  console.log(`--------- Table of ${num} ---------`);
  for (let i = 1; i <= till; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
// console.log(printTable(5 , 6));
// printTable(6 );
// printTable(87 , 13);
// printTable(23);

function dollarToInr(usd) {
  const rupee = 94.72 * usd;
  return rupee.toFixed(2);
}

function dollorToInrString(usd, inr) {
  const str = `$${usd} = ₹${inr}`;
  return str;
}

let usd = 56;
let rupees = dollarToInr(usd);
let string = dollorToInrString(usd, rupees);
console.log(string);

const printName = function (name) {
  console.log(name);
};

// printName("Nishant")

const greetMsg = (name) => {
  console.log("Hii,", name);
};

const secondWay = (name) => {
  console.log("Hii,", name);
};

// const thirdWay = name => console.log("Hii," , name)
const thirdWay = name => `Hii, ${name}`;


// greetMsg("Nishant");
// secondWay("Nishant");
console.log(thirdWay("Nishant"));
