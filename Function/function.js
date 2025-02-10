/*

Function is a block of code designed to perform a particular task.
it is excuted when it is invoked or called.
syntax:

function function-Name(){
//do something}
function-Name() //function calling

*/

function add(a, b) {
  console.log(a + b);
}
add(3, 4);

// return function

function add1(a, b) {
  return a + b;
}

console.log(add1(2, 3)); // it reurn the undefined

//ignored the code

function example() {
  return "Hello";
  // console.log("This line is never executed") never executed
}

console.log(example());

function greeting(g) {
  return function (name) {
    return `${g} , ${name}`;
  };
}

const greetInEnglish = greeting("hello");
const greetInUrdu = greeting("Assalam-o-Alaikum");

console.log(greetInEnglish("Alice"));
console.log(greetInUrdu("Ali"));

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(12);
const triple = multiplier(13);

console.log(double(5));
console.log(triple(5));

//counter

function creatCounter() {
  let count = 10;
  return function () {
    count++;
    return count;
  };
}
const counter = creatCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//Closures in javaScript

function bankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      if (amount > balance) {
        return "Insufficient funds!";
      } else {
        balance -= amount;
        return balance;
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account = bankAccount(10000);
console.log("Get Balance : ", account.getBalance());
console.log("Deposit : ", account.deposit(3000));
console.log("Withdraw : ", account.withdraw(12000));
console.log("Get Balance : ", account.getBalance());

//Arrow Function

const add2 = (a, b) => a + b;
console.log(add2(3, 3));

const sum = (a, b) => {
  const result = a + b;
  return result;
};
console.log(sum(3, 4));

const person = {
  name: "AHmad Umar",
  greet: function () {
    setTimeout(() => {
      console.log(`hello , ${this.name}`);
    }, 1000);
  },
};

person.greet();

//High order function is a function that take a function as an argument.

function getUserFromDB(id, callback) {
  //This function is high order function
  setTimeout(() => {
    console.log(`Feching user id : ${id}`);
    callback({ id, name: "umar" });
  }, 2000);
}

getUserFromDB(1, (user) => {
  console.log(`user Found : ${user.name}`);
});

// Callback in Array methids

const number = [1, 2, 3, 4, 5, 6];

number.forEach((num) => {
  console.log(num * 2);
});
