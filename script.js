const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = (massMark / heightMark) * 2;
const BMIJohn = (massJohn / heightJohn) * 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

if (markHigherBMI == true) {
  console.log(
    `Mark's BMI is larger. Mark's BMI ${BMIMark} is higher than john's ${BMIJohn}`
  );
} else {
  console.log(
    `John's BMI is larger. John's BMI ${BMIJohn} is higher than mark's ${BMIMark}`
  );
}

asdfasdfasdfasdfasdf;
