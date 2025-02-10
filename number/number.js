//Number can be written with or without decimals.

let x = 0.2 + 0.1; // Floating point arithmetic is not always 100% accurate.
console.log(x);

//solve this problem

let y = (0.2 * 10 + 0.1 * 10) / 10;
console.log(y);

let a = 10;
let b = 20;
console.log("The result is : " + a + b); // the result is 1020. It is common mistake
console.log("The result is: ", a + b);
{
  let a = "10";
  let b = "20";
  console.log(a * b); // it work
  console.log(a - b); // it work
  console.log(a / b); // it work
  console.log(a + b); // it not work
}

//NaN is a javascript reversed keyword indicating that a number is not a legal number.typeof NaN return number.

console.log(a/"Apple")

//Infinity or -Infinity is the value javascrip will return if yoou calculate a number outside the largest possible number.

let myNumber = 2;
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber
    console.log(myNumber)
}

//Divisin by 0 also generate the Infinity.

let c = -2 / 0
console.log(c)

//typeof infinity return number.

