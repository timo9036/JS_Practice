"use strict";
// // function declaration
// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }
// //function expression
// const calcAge = Function (birthYear) {
//   return 2037 - birthYear;
// }
// //arrow function
// const calcAge = birthYear => 2037 - birthYear;
// --------------------------------------------
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win ${scoreDolphins} vs. ${scoreKoalas}`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win ${scoreKoalas} vs. ${scoreDolphins}`);
//   } else {
//     console.log(`no one wins...`);
//   }
// };
// checkWinner(scoreDolphins, scoreDolphins);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreDolphins);
// -------------------------------------------------
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.lenth - 1]);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.lenth - 1]),
// ];

// const friends = ["michael", "steven", "peter"];
// //add elements
// friends.push("jay"); //add last
// friends.unshift("john"); //add first
// //remove elements
// friends.pop; //remove last
// friends.shift(friends); //remove first
// console.log(friends.indexOf("steven")); //location of steven
// console.log(friends.includes("bob")); //include or not
// if (friends.ioncludes("peter")) {
//   console.log("you have a friend name peter");
// }
// --------------------------------------------------
// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

// const jonas = {
//   //object literal
//   firstName: "jonas",
//   lastName: "schemetaman",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["mitchell", "peter", "steven"],
// };
// console.log(jonas.lastName);
// console.log(jonas["lastName"]);
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);

// jonas.location = "portugal";
// jonas["twitter"] = "@jonasschedtman";
// //jonas has 3 friends, and his best friend is called Michael
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "jonas",
//   lastName: "schemetaman",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["mitchell", "peter", "steven"],
//   hasDriverLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // }
//   // calcAge: function (this) {
//   //   return 2037 - this.birthYear;
//   // }
//   calcAge: function (this) {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function(){
// return `${this.fistName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriverLicense ? `a` : `no`} driver's license. `
//   }
// };
// // console.log(jonas.calcAge());
// console.log(jonas.age)
// // console.log(jonas[`calcAge`](1991)); or
// console.log(jonas.getSummary)
// -----------------------------------------------------
// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall
// const mark = {
//   fullName : "mark miller"
//   mass:78,
//   height:1.69,
//   calcBMI = function(){
//     this.bmi = this.mass/ this.height **2;
//     return this.bmi;
//   }
// };
// const john = {
//   fullName : "john smith"
//   mass:92,
//   height:1.95
//   calcBMI = function(){
//     this.bmi = this.mass/this.height **2;
//     return this.bmi;
//   }
// }
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);
// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}`)
// }else if (mark.bmi < john.bmi) {
//   console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`)
// }
// ---------------------------------------------------------
//for look keeps running while conditions is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

const jonas = [
  "jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
];
for (let i = 0; i < jonas.length; i++) {
  //reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
//continue and break
console.log("-----only strings ----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}
console.log("-----break with number ----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
