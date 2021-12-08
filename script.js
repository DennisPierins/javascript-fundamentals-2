// Activates strict mode (forbids us to do certain things and creates visible errors in the developer console)
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

const interface = 'Audio';
const private = 123;
*/

/*
// No parametres defined
function logger() {
  console.log("My name is Dennis");
}

// Calling, running or invoking the function
// No arguments
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples & ${oranges} oranges`;
  return juice;
}

// Saving the result of the function by saving it in a variable
const appleJuice = fruitProcessor(4, 0); // 4 and 6 are arguments
console.log(appleJuice);

// Not saving the result of the function by logging it
// console.log(fruitProcessor(4, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declaration (can be called before they are defined)
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

// Same function as above
function calcAge11(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1989);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);
*/

/*
// Arrow function is a function expression in a different form
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1989, "Dennis"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple & ${orangePieces} pieces of orange`;
  return juice;
}

const niceJuice = fruitProcessor(2, 3);
console.log(niceJuice);
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1989, "Dennis"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// Arrays are not primitive values, so they can be mutTated when declared with 'const'
friends[2] = "Dennis";
console.log(friends);

const firstName = "Dennis";
const dennis = [firstName, "Pierins", 2037 - 1989, "JahBless", friends];
console.log(dennis);

// Exercise - Apply calcAge function to the array of years
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/*
const friends = ["Michael", "Steven", "Peter"];

// Adding elements
friends.push("Freddy"); // Adds an element to the end of the array
console.log(friends);

friends.unshift("Charles"); // Adds an element to the beginning of the array
console.log(friends);

// Removing elements
friends.pop(); // Removes the last element of the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Removes the first element of the array
console.log(friends);

// Other operations
console.log(friends.indexOf("Steven")); // Finds the position of a certain element within the array
console.log(friends.indexOf("Bobby")); // Unfound elements return '-1'

console.log(friends.includes("Steven")); // Finds if an element is in an array
console.log(friends.includes("Bobby"));
*/

/*
// Object dennis has 5 properties
const dennis = {
  firstName: "Dennis",
  lastName: "Pierins",
  age: 32,
  job: "JahBless",
  friends: ["Johnny", "Freddy", "Sarah"],
};
console.log(dennis);

// Same outcome
console.log(dennis.lastName);
console.log(dennis["lastName"]);

const nameKey = "Name";
console.log(dennis["first" + nameKey]);
console.log(dennis["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Dennis? Choose between firstName, lastName, age, job and friends"
);

if (dennis[interestedIn]) {
  console.log(dennis[interestedIn]);
} else {
  console.log(
    "Wrong request! What do you want to know about Dennis? Choose between firstName, lastName, age, job and friends"
  );
}

dennis.location = "Bruges";
dennis["twitter"] = "@lostsignal12";
console.log(dennis);

// Challenge
// "Dennis has 3 friends, and his best friend is Sarah"

console.log(
  `${dennis.firstName} has ${dennis.friends.length} friends, and his best friend is called ${dennis.friends[2]}`
);
*/

/*
const dennis = {
  firstName: "Dennis",
  lastName: "Pierins",
  birthYear: 1989,
  job: "JahBless",
  friends: ["Johnny", "Freddy", "Sarah"],
  hasDriversLicense: false,

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(dennis.calcAge());
// console.log(dennis.calcAge(dennis.birthYear));
// console.log(dennis["calcAge"](dennis.birthYear));
console.log(dennis.age);

//Challenge
// 'Dennis is a 48 year old JahBless and he has a / no driver's license'
console.log(dennis.getSummary());
*/

// console.log("Lifting weights repetition 1 🏋️");
// console.log("Lifting weights repetition 2 🏋️");
// console.log("Lifting weights repetition 3 🏋️");
// console.log("Lifting weights repetition 4 🏋️");
// console.log("Lifting weights repetition 5 🏋️");
// console.log("Lifting weights repetition 6 🏋️");
// console.log("Lifting weights repetition 7 🏋️");
// console.log("Lifting weights repetition 8 🏋️");
// console.log("Lifting weights repetition 9 🏋️");
// console.log("Lifting weights repetition 10 🏋️");

/*
// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/

/*
const dennisArray = [
  "Dennis",
  "Pierins",
  2037 - 1989,
  "JahBless",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < dennisArray.length; i++) {
  // Reading from dennisArray array
  console.log(dennisArray[i], typeof dennisArray[i]);

  // Filling types array
  // types[i] = typeof dennisArray[i]
  types.push(typeof dennisArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < dennisArray.length; i++) {
  if (typeof dennisArray[i] !== "string") continue;
  console.log(dennisArray[i], typeof dennisArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < dennisArray.length; i++) {
  if (typeof dennisArray[i] === "number") break;
  console.log(dennisArray[i], typeof dennisArray[i]);
}
*/

/*
const dennisArray = [
  "Dennis",
  "Pierins",
  2037 - 1989,
  "JahBless",
  ["Michael", "Peter", "Steven"],
];

// reverse loop
for (let i = dennisArray.length - 1; i >= 0; i--) {
  console.log(i, dennisArray[i]);
}

// loop in a loop
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--- Starting exercise ${exercise} ---`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repitition ${rep}`);
  }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end...`);
  }
}
