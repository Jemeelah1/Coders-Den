/**************** Exercise Level 1 *******************/

//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let userAge = +prompt('Enter your age?')
let legalAge = 18
if (userAge >= 18) {
  console.log('You are old enough to drive')
} else {
  console.log(`Sorry you have to wait for ${legalAge - userAge} years to be able to drive`)
};


//Enter your age: 30
//You are old enough to drive.

//Enter your age:15
//You are left with 3 years to drive.
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let mAge = +prompt('I am', 'years old')
let yAge = +prompt('you are', 'years old')
if (mAge > yAge) {
  console.log(`I am ${mAge - yAge} years older than you are`)
} else if (mAge < yAge) {
  console.log(`you are ${yAge - mAge} years older than I am`)
} else(
  console.log('You are agemates')
)


//Enter your age: 30
//You are 5 years older than me.
//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//using if else
//ternary operator.
  let a = 4
  let b = 3
  a > b ? console.log(`${a} is greater than ${b}`):console.log(`${a} is less than ${b}`);
  
//4 is greater than 3
//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let n = evenNum
if (n % 2 == 0) {
  console.log(`${n} is an even number`)
} else if (n % 2 == 1) {
  console.log(`${n} is an odd number`)
} else {
  console.log(`${n} is not a number`);
};

/*Enter a number: 2
2 is an even number
Enter a number: 9
9 is is an odd number.
Exercises: Level 2
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let studentName = prompt('enter your name')
let score = +prompt('enter your score')
if (score >= 80 <= 100) {
  console.log(`Dear ${studentName}, you are on GRADE A`)
} else if (score >= 70 <= 89) {
  console.log(`Dear ${studentName}, you are on GRADE B`)
} else if (score >= 60 <= 69) {
  console.log(`Dear ${studentName}, you are on GRADE C`)
} else if (score >= 50 <= 59) {
  console.log(`Dear ${studentName}, you are on GRADE D`)
} else {
  console.log(`Dear ${studentName}, you FAILED`)
}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer
let month = "September";
month = month.toLowerCase();

switch (month) {
  case "september":
  case "october":
  case "november":
    console.log('the season is Autumn');
    break
  case "december":
  case "january":
  case "february":
    console.log('the season is Winter');
    break
  case "march":
  case "april":
    case "may":
    console.log('the season is Spring');
    break
  case "june":
  case "july":
  case "august":
    console.log('the season is Summer');
    break
  default:
    console.log('your have entered an incorrect month');
}

//Check if a day is weekend day or a working day. Your script will take day as an input.
let day = "Monday"
day = day.toLowerCase();

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "Friday":
    console.log(`What is the day today? ${day}, ${day} is a working day.`);
    break
  case "saturday":
  case "sunday":
    console.log(`What is the day today? ${day}, ${day} is a weekend.`); 
}

//What is the day  today? Saturday
    //Saturday is a weekend.


    //What is the day today? saturDaY
    //Saturday is a weekend.

    //What is the day today? Friday
    //Friday is a working day.

    //What is the day today? FrIDAy
    //Friday is a working day.
    
/*************** Exercises: Level 3 *****************/

//Write a program which tells the number of days in a month.
let months = "January";
month = months.toLowerCase();

switch(months) {
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${months} has 30 days.`);
    break
  case "january":
  case "March":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${months} has 31 days.`);
    break
  case "february":
    console.log(`${months} has 28 days in a year and 29 in each leap year .`);
    break
  default:
    console.log('Kindly enter a valid month');
  
}

/*
  Enter a month: January
  January has 31 days.
  Enter a month: JANUARY
  January has 31 day
  Enter a month: February
  February has 28 days.
  Enter a month: FEbruary
  February has 28 days.
Write a program which tells the number of days in a month, now consider leap year.
🎉 CONGRATULATIONS ! 🎉
*/
