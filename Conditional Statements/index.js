//Conditional Statements

// 1) if-else statement

let age = 18;
if (age >= 18) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

let time = new Date().getHours;
if (time < 10) {
  console.log("Good morning");
} else if (time < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

//Switch case

const day = new Date().getDay();
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("LOOKING FORWARD TO THE WEEKEND");
}
