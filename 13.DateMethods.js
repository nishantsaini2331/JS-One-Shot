
// console.log(Date.now());
const date1 = new Date(1792576566280);
const date2 = new Date();


console.log(date2.getDate()); // 21
console.log(date2.getDay()); // 3 (wed)
console.log(date2.getFullYear()); // 2026
console.log(date2.getMonth()); // 9 (oct)
console.log(date2.toLocaleDateString()); // 10/21/2026
console.log(date2.toDateString()); // Wed Oct 21 2026
console.log(date2.toISOString()); // 2026-10-21T10:03:18.015Z
console.log(date2.toLocaleTimeString()); // 3:33:33 PM