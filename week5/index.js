import {countries} from './country.js'
import {webTechs} from './web_techs.js'
/********************* Week 5 *************************/

//Exercise: Level 1

//Declare an empty array;
const arr = [];
console.log(arr);

//Declare an array with more than 5 number of elements
const favFruits = ['coconut', 'banana', 'cucumber', 'grapes', 'pineapple', 'tiger-nut', 'mango'];
console.log(favFruits);
//Find the length of your array
console.log(favFruits.length);

//Get the first item, the middle item and the last item of the array
console.log(favFruits[0]);
//console.log()
console.log(favFruits.length - 1);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['Ruby', 32, 'Ghana', 'Phoenix', true, 45,'Israel'];
console.log(mixedDataTypes);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [' Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon'];
//Print the array using console.log()
console.log(itCompanies);
//Print the number of companies in the array
console.log(itCompanies.length);
//Print the first company, middle and last company
console.log(itCompanies[0]); //first company
let lastIdx = console.log(itCompanies.length - 1); //last company
let midIdx = (itCompanies.length)/2;
let middle = Math.ceil(midIdx);//middle company
console.log(itCompanies.at(middle));
//Print out each company
console.log(itCompanies);
//Change each company name to uppercase one by one and print them out
console.log(itCompanies.map(item => item.toUpperCase()));

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let faangs = itCompanies.slice(0, (itCompanies.length - 1));
console.log(`${faangs} and Amazon are big IT companies`);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
let companyName = 'Amazon'
let index = itCompanies.indexOf(companyName); // 0
index === -1? console.log('a company not found'):console.log(companyName);

//Filter out companies which have more than one 'o' without the filter method
let filterItCompanies = itCompanies.map(item => item)
console.log(filterItCompanies);

//Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

//Reverse the array using reverse() method
console.log(itCompanies.reverse());

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 4));


//Slice out the last 3 companies from the array
console.log(itCompanies.slice(-4));

//Slice out the middle IT company or companies from the array
let newIt = itCompanies.slice(Math.ceil(itCompanies.length / 2));
console.log(newIt);

//Remove the first IT company from the array
console.log(itCompanies.shift());
//Remove the middle IT company or companies from the array
let midIt = (itCompanies.length / 2);
let modIt = itCompanies.splice(midIt, 1)
console.log(itCompanies);

//Remove the last IT company from the array
console.log(itCompanies.pop());
//Remove all IT companies
console.log(itCompanies.splice());
console.log(itCompanies);

//Exercise: Level 2

//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//First remove all the punctuations and change the string to array and count the number of words in the array

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let words = text.(/^\w\s\'/g, "");
// console.log(words);

console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]


//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added
let add = shoppingCart.unshift('Meat');
console.log(shoppingCart);
//add Sugar at the end of you shopping cart if it has not been already added
let append = shoppingCart.push('Sugar');
console.log(shoppingCart);

//remove 'Honey' if you are allergic to honey
let popArr = shoppingCart.pop();
console.log(shoppingCart);
//modify Tea to 'Green Tea'
let mod = shoppingCart.splice(3, 1, 'Green Tea');
console.log(shoppingCart);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let idx = countries.indexOf('Ethiopia');
let modCountry = countries.splice(idx, 1, 'ETHIOPIA');
console.log(countries);

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let check = webTechs.indexOf('Sass');
check !== -1 ? console.log("Sass is a CSS preprocess"):webTechs.push('Sass');
console.log(webTechs);

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
//["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

//Exercise: Level 3

//The following is an array of 10 students ages:
//Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let uniqueChars = [];
ages.forEach((age) => {
  if (!uniqueChars.includes(age)) {
    uniqueChars.push(age);
  }
});

console.log(uniqueChars.sort());

let minAge = uniqueChars[0];
let maxAge = uniqueChars[uniqueChars.length - 1];
console.log(minAge);
console.log(maxAge);

//Find the median age(one middle item or two middle items divided by two)


//Find the average age(all items divided by number of items)
let sum = 0
for(const num of uniqueChars){
  sum += num;
}
let avrAge = sum / (uniqueChars.length - 1);

//Find the range of the ages(max minus min)
let range = maxAge - minAge;

//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array


//Find the middle country(ies) in the countries array

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

//🎉 CONGRATULATIONS ! 🎉*/
