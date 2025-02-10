// Loops in JS:- Loops are used to excute the code again and again.

// 1)For loop

for (let i = 0; i <= 5; i++) {
  console.log("Ahmad", i);
}

let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = `, n * i);
}

// 2) While loop

let j = 0;
while (j < 500) {
  // if (j == 300) {
  //   continue;
  // }
  console.log(j)
  j++;
}

{
  let text = "";
  let a = 0;
  do {
    text += "The number is " + a;
    a++;
  } while (a < 10);
  console.log(text);
}
