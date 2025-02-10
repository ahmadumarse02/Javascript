//Array indexOf() search an array for an element value and return its values.

const fruits = ["Apple" , "Orange" , "Apple" , "Mango"]
console.log(fruits.indexOf("Apple"))
console.log(fruits.indexOf("Apple" , 1))
//lastIndexOf()

console.log(fruits.lastIndexOf("Apple"))

//includes() method used to check if an element present in the array.

console.log(fruits.includes("Apple"));

//find()
const users = [
    {id: 1 , name : "jhon"},
    {id: 2 , name : "Ali"},
    {id: 3 , name : "usama"}
];

const user = users.find((u) => u.id===2)
console.log(user)

//findIndex()

const numbers = [5, 10, 15];

const index = numbers.findIndex(num => num > 20);

console.log(index); // Output: -1 (no element > 20)

const index1 = numbers.findIndex(num => num < 20);
console.log(index1); // Output: 1 (no element < 20)

//findLast() 

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);

console.log(high)
