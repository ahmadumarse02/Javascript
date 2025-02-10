//Array is a data structure that store multiple values in a single variable.it can hold different data types, including string , number and even other Arrays.

const cars = ["saab", "volvo", "BMW"];

//other way to create array
{
  const cars1 = [];
  cars1[0] = "saab";
  cars1[1] = "volvo";
  cars1[2] = "BMW";
}
//using new keyword
{
  const cars = new Array("saab", "volvo", "BMW");
  let car = cars[1];
  //Accessing Array Elements
  //console.log(cars[0]);
  //changing an array element
  //console.log((cars[1] = "Opel"));
  //console.log(cars);
  //converting an array to string
  //console.log(cars.toString());
  //console.log(typeof cars); //object
  //length method
  //console.log(cars.length);
  //at() method
  //console.log(cars.at(2));
  //join() the all element of array into a string
  //console.log(cars.join(" + "));
  //popping and pushing
  //pop() method remove the last e,ememt from an array (at the end)
  //push() method add the array elememt from an array (at the end)
  //console.log(cars.pop());
  //console.log(cars);
  //console.log(cars.push("BMW"));
  //console.log(cars);

  //shift() method removes the first array element and "shift" all other element to a lower index.
  //unshift() method add a new elememt to a array

  //console.log(cars.shift())
  //console.log(cars);
  //console.log(cars.unshift("saab"))
  //console.log(cars);
}

//Merging Arrays: The concat() method does not change the existing arrays. It always returns a new array.

const Girls = ["Cecilie", "Lone"];
const Boys = ["Emil", "Tobias", "Linus"];

const Children = Girls.concat(Boys);
//console.log(Children);

// Array copyWithin() method copies array elememts to another position in an array.
//overwrite the exiting value.does not add items to the array.does not change the length
//console.log(Children.copyWithin(3, 0));

// flat() method create a new array with sub array element concated to a specified depth.

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
//console.log(newArr);

{
  // Splicing and Slicing Arrays
  // The splice() method adds new items to an array at a specified index
  // The slice() method slice out a piece of an array.

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(1, 0, "Lemon", "Kiwi");
  console.log(fruits);

  const remove = fruits.slice(-3)
  console.log(remove)
}
