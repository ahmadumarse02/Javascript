//Sorting an Array
//sort() method sorts an array alphabetically.it create a new array.

const fruits = [11, 22, 33, 4, 5, 6, 7];
let a = fruits.sort();
console.log(a);

// reverse() methods reverse the elements in an array.

let b = fruits.reverse();
console.log(b);

//toSorted() it work like a sort() methods but differnce is change the original array.

let c = fruits.toSorted();
console.log(c);

// Sorting an array in random Order

const points = [40, 100, 1, 5, 25, 10];

let p = points.sort(function () {
  return( 0.5 - Math.random());
});
console.log(p)

