// EXECISE: Level 1

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = '30 Days Of JavaScript'

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.slice(0, 2));

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3));

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// Split the string into an array using split() method
console.log(challenge.split(""));

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const techCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(techCompanies.split(","));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const str = 'You cannot end a sentence with because because because is a conjunction';
console.log(str.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(str.lastIndexOf('because'));

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(str.search('because'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const newstr = ' 30 Days Of JavaScript '
console.log(newstr.trim());

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith(3));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('t'));

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const str1 = '30 Days of'
console.log(str1.concat('JavaScript'));

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));


// EXECISE: Level 2

// Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
// Using console.log() print out the following quote by Mother Teresa:
console.log('There is no exercise better for the heart than reaching down and lifting people up.');

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const num = '10'
console.log(Math.ceil('9.8') === 10);

// Check if 'on' is found in both python and jargon
const strCheck = 'python and jargon'
console.log(strCheck.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let testCase = "I hope this course is not full of jargon."
console.log(testCase.includes('jargon'));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 100));

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * (100 - 50)) + 50);

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 255));

// Access the 'JavaScript' string characters using a random number.
let strChar = 'JavaScript'
console.log(Math.floor(Math.random(strChar)));

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log("1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125");

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let pharse = 'You cannot end a sentence with because because because is a conjunction'

console.log(pharse.slice(pharse.indexOf('because'), pharse.lastIndexOf('because')));

// EXECISE: Level 3

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(sentence.match(/love/gi).length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string = 'You cannot end a sentence with because because because is a conjunction'

console.log(string.match(/because/gi).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
   const msg = 'I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher? This 30DaysOfJavaScript is also the result of love of teaching'

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary = 5000
let annualBonus = 10000
let onlineCourse = 15000

console.log(`${((salary+onlineCourse) * 12) + annualBonus}`);
