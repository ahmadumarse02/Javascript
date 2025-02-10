//Object literal syntax

const person = {
  firstName: "Ahmad",
  lastName: "Umar",
  age: 20,
};

console.log(person);
/*
  const person = {};
  
  // Add Properties
  person.firstName = "John";
  person.lastName = "Doe";
  person.age = 50;
  person.eyeColor = "blue";
  */

//Constructor : Sometime we need to create many objects of the same type.To create an objects type we use an Object constructor function.

function Person(first, last, age, eye) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyeColor = eye;
}

//new Keyword

const info = new Person("Ahmad", "Umar", 20, "blue");
info.nationality = "English";
console.log(info);
console.log(info.firstname);
console.log(info.age);

//Accessing Object Properties

const student = {
  name: "jhon",
  id: 1,
  semester: 4,
};

console.log(student.name);
console.log(student["id"]);

//Object Properties

// AN object is an Unorder collection of properties. Properties are the most important part of javaScript object. Properties can be changed , deleted  , add and some are read only.

//Deleting Properties

delete student.semester;
console.log(student);

// Displaying Object Properties in a Loop

{
  const person = {
    name: "Jhon",
    age: 20,
    city: "New York",
  };
  // Build a Text
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  }
  console.log(text);
  console.log(typeof text); //string
  //it convert the object to the sring

  //Object.values() creates an array from the properties values.

  const myArray = Object.values(person);
  console.log(myArray);
}

//for-of : we can iterate over an objects keys , values and entries.

const myObj = {
  myName: "ahmad",
  age: 20,
  myCar: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

for (const keys of Object.keys(myObj)) {
  console.log(keys);
}

for (const values of Object.values(myObj)) {
  console.log(values);
}

const fruits = { Banana: 300, Orange: 400, Apple: 500 };
let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + " : " + amount + " , ";
}

console.log(text);
//Uing JSON.stringify()
console.log(JSON.stringify(text));