//forEach

// var a = ["ahmad", "umar", "umair"];
// a.forEach(loop);
// function loop(value, index, array) {
//   console.log(value, index, array);
// }

//filter

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filter = myNum.filter((num) => {
  return num > 4;
});

console.log(filter);

const books = [
  { title: "PS", publish: 1981 },
  {
    title: "IS",
    publish: 2000,
  },
  {
    title: "English",
    publish: 2001,
  },
  {
    title: "science",
    publish: 1990,
  },
  {
    title: "urdu",
    publish: 2001,
  },
];

// const userBooks = books.filter((bk) => bk.publish === 2000 )
// const userBooks = books.filter((bk) => bk.publish <= 2000 )
const userBooks = books.filter((bk) => bk.publish >= 2000);
console.log(userBooks);

//map

const myNumber = myNum
  .map((num) => num * 10)
  .filter((num) => num > 20)
  .map((num) => num * 20);
console.log(myNumber);

// reduce
const reduce = myNum.reduce((acc, currVal) => {
  console.log(`acc: ${acc} and currVal: ${currVal}`);
  return acc + currVal;
}, 0);

console.log(reduce);
