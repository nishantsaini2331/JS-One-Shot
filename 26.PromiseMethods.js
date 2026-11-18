// const resolve = Promise.resolve("hii")
// console.log(resolve);

// const reject = Promise.reject("rejected")
// console.log(reject);

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("1");
  }, 3000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("2");
  }, 6000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("3");
  }, 2000);
});


// let res = Promise.all([p1 , p2 , p3]).then((val) => console.log(val))
// let res = Promise.allSettled([p1 , p2 , p3]).then((val) => console.log(val))
// let res = Promise.any([p1 , p2 , p3]).then((val) => console.log(val))
let res = Promise.race([p1 , p2 , p3]).then((val) => console.log(val))
// console.log(res);