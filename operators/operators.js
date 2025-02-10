/*
Arithmetic Operators:-
1)Addition Operator: Add two number
2)Subtraction Operator: Subtract two number
3)Multiplication Operator: Multiply two number
4)Division Operator: Divide two number
5)Modulus Operator:Return the remender of the division of two numer
6)Exponentiation Operator:Raises the first number to the poer of secode number

*/

let num1 = 5,
  num2 = 3;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

/*
Assignment Operators:-
1)Simple Operator: Assign the value on the right sideand variable on the left side
2)ADD and Assign: Add the value on the right side and assign the left side variable
3)Subtract and Assign: Subtract the value on the right and assign the left side variable
4)Multiply and assign: Multiply the right side the assign the left side variable
5)Divide and assign: Divide the right side and assign the left side variable
6)Modulus and Assign: Find the Modulus of the two number and then assign the left side variabe
7)Exponentation and assign: Raises the variable on the left to the power of the value on the right and assigns the result

*/

let x = 10;
console.log(x);
x += 3;
console.log(x);
x -= 3;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);
x %= 19;
console.log(x);
x **= 10;
console.log(x);

/*
Comparison Operator:-
1)Equal to: Compare the two values
2)Strict Equal to: Checks if two values are same and its types are also same.
3)Not Equal to: Checks if two values are not same
4)Strict Not Equal to (!==): Checks if two values are not same and its types are not also same.
5) Greater Than (>) : check the value of left side is greater than the right side
6)Greater Than or Equal to (>=):Checks if the value on the left is greater than or equal to the value on the right.
7)Less Than (<): Checks if the value on the left is less than the value on the right.
8)Less Than or Equal to (<=): Checks if the value on the left is less than or equal to the value on the right.

*/

let a = 10,
  b = "10",
  c = 5;

// Loose equality
console.log(a == b); // true

// Strict equality
console.log(a === b); // false

// Not equal
console.log(a != c); // true

// Strict not equal
console.log(a !== b); // true

// Greater than
console.log(a > c); // true

// Less than
console.log(c < a); // true

// Greater than or equal
console.log(a >= 10); // true

// Less than or equal
console.log(c <= 5); // true

/*
Logical Operator:-
1)AND Operator: Return true if both operands are true otherwise, it return false.
2)OR Operator: Return true if only or both one opreands is true. Otherwise, it is false. 
3)NOT Operator: Inverts the value of a boolean. if operand is true , it return the true.

*/

let a1 = true,
  b1 = false;
console.log(a1 && b1);
console.log(a1 || b1);
console.log(!a1);

/*Ternary Operator:-
    it work like a if-else statement
Syntax:
condition ? condition True :condition False

*/

let age = 19;
let drive =
  age >= 18
    ? "You can drive"
    : "You cannot be drive because your age is less than 18";
console.log(drive);