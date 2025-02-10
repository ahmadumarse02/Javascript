/*
Variables are used to stote data that can be used or modified later in the program.
Declaration in Javascript:-
var
let
const
Each type of variable has specific rules for scope , re-declaration and reassignment.

var:-
Early intoduced javscript varsions.
Function Scoped.
Allow in the same scope means re-declaration.
Hoisting to the top of its scope but initialized as undefined.
Outdated , avoid using in modren javascript.

let:-
ES6(2015).
Blocked-scoped.
Hoisting but not initialized.
Use when the variable's need to change.

const:-
ES6(2015).
Blocked-scoped.
Hoisting but not initialized.
re-declaration is no allowed.
Use to fixed he values or constants.

*/

function A() {
  var x = 9;
  if (x < 10) {
    console.log(x);
    var x = 12;
  }
}
A();

function B() {
  let x = 19;
  //   x = 20; allowed
  if (x > 10) {
    console.log(x);
    //    var x = 12; not allowed
  }
}
B();

function C() {
  const x = 19;
  // x = 20;not allowed
  if (x > 10) {
    console.log(x);
    //   var x = 12; not allowed
  }
}
C();