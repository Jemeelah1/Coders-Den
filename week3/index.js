// EXERCISE: LEVEL 1

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Chika";
let lastName = "Musa";
let country = "Germany";
let city = "Helsinki";
let isMarried = true;
let age = 25;
let year = 2022;

console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(city), typeof(isMarried), typeof(age), typeof(year));

// Check if type of '10' is equal to 10
console.log(parseInt('10') === 10);

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

// Find the length of python and jargon and make a falsy comparison statement.
console.log(!("python").length === ("dragon").length);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

// There is no 'on' in both dragon and python
console.log(!(('python' && 'dragon').includes('on')));

// Use the Date object to do the following activities
let todayYear = new Date();

// What is the year today?
console.log(todayYear.getFullYear());

// What is the month today as a number?
console.log(todayYear.getMonth());

// What is the date today?
console.log(todayYear.getDate());

// What is the day today as a number?
console.log(todayYear.getDay());

// What is the hours now?
console.log(todayYear.getHours());

// What is the minutes now?
console.log(todayYear.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(todayYear.getSeconds());


// EXERCISE: LEVEL 2

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = promp("Enter a number");
let height = promp("Enter a number");
console.log("The area of the triangle is " + 0.5*base*height);

// Enter base: 20
// Enter height: 10

// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt("Enter side a: ");
let b = prompt("Enter side b: ");
let c = prompt("Enter side c: ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
let perimeter = a + b + c;
console.log(`The perimeter of the Triangle is ${perimeter}`);

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter length");
let width = prompt("Enter width");
let area = length * width;
let sum = Num(length) + Num(width);

console.log(area);
console.log(sum * 2);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let circleArea = 3.14 * radius**2;
let circumference = 2 * 3.14* radius;

console.log(circleArea);
console.log(circumference);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
let slope = 2;

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 =10;
let m = (y2 - y1) / (x2 - x1);

console.log(m);

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = 4;
let y = x**2 + 6 * x + 9;

console.log(y);

// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt("Enter hours: ");
let ratePerHour = prompt("Enter rate per hour: ");
let pay = ratePerHour + hours;

console.log(`Your weekly earning is ${pay}`);

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = "";
name > 7 ?console.log('your name is long'):console.log('your name is short');

// Compare your first name length and your family name length and you should get this output.
let firstNam = "Jbaby"
let surname = "Ibro"
// Your first name, Asabeneh is longer than your family name, Yetayeh
firstNam > surname ?console.log(`my first name, ${firstNam} is longer than my family name, ${surname}`):console.log('my first name is not longer than my family name');

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
console.log(` I am ${myAge - yourAge} years older than you`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let dateOfBirth = prompt("Enter birth year: ");
dateOfBirth = Num(dateOfBirth);

let ages = new Date().getFullYear - dateOfBirth;
let drivingAge = 18;
let ageGap = drivingAge - ages;

ages >= 18 ?console.log(`You are ${ages}. Your are old enough to drive`):console.log(`You are ${ages}. wait till ${ageGap} more years`);

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm


// EXERCISE: LEVEL 3

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
