// MANIPULATING HTML WITH BUTTON FUNCTION

// document.getElementById("button").onclick = function() {    When the button is clicked, run the following method
//     document.getElementById("intro").innerHTML = "You clicked the button, and now it is gone!";   InnerHTML is what changes the html after selecting by ID
//     document.getElementById("button").style.display="none";
// };


// using a switch statement for simple math
// Problem is they're all global scoped, make variables inside of functions to make non-global variables

// var x = prompt("Enter a number:");
// var z = prompt("Enter a math sign (+, -, *, /):");
// var y = prompt("Enter another number: ");
// var x1 = parseInt(x);
// var y1 = parseInt(y);
// switch (z) {
//   case '+':
//     var ans = x1 + y1;
//     break;
//   case '-':
//     var ans = x1 - y1;
//     break;
//   case '*':
//     var ans = x1 * y1;
//     break;
//   case '/':
//     var ans = x1 / y1;
// }
// console.log(x1 + " " + z + " " + " " + y1 + " = " + ans);

// if you change newAge, it WILL NOT change the value of age, newAge was a copy of age.
// var age = 50;
// var newAge = age;

// (function() {
// IIFE -- Immediately Invoked Function Expression
// if you don't use var keyword here, it will look up scopes until it finds a var with that name, if it doesn't it will create the variable globally
// })();  // Need the () at the end, this tells it to execute

// basics of an object, you can have functions in objects -- INSIDE OF AN OBJECT USE THE THIS KEYWORD TO REFER TO THE OBJECT YOURE TALKING ABOUT 
// let object = {
//   name: "Mike Boisvert",
//   age: 30,
//   FavGame: "Diablo",
//   isCool: false,
//   nums: [13, 18, 39, 100],
//   fun: function() { // messing with function with an if statement
//     if (this.isCool) {
//       console.log("Hey there Mr.Cool guy.");
//     } else
//       console.log("Stop right there you nerd!");
//   },
//   fun2: function() { // messing with an iterartive function
//     for (let i = 0; i < this.nums.length; i++) {
//       console.log(this.nums[i]);
//     }
//   }
// }
//object.fun();
//object.fun2();

// var name = "Mike Boisvert";
// var newName = name.toUpperCase(); // need to assign it to a new variable since a string is a primitive data type
// console.log(newName);

// console.log(Number.MAX_SAFE_INTEGER); // Anything higher than this number is unstable

// var input = prompt("Put in a NON DECIMAL number: "); // Converts the given base to decimal -- ex: input = 101, binary is 5, octal is 65
// console.log(input + " in binary is: " + Number.parseInt(input, 2));
// console.log("Octal equivalent is: " + Number.parseInt(input, 8));

// var input = Number(prompt("Put in a DECIMAL number: ")); // need to wrap the prompt in Number since prompt by itself is a string, can't take bases of strings
// console.log(input + " in binary is: " + input.toString(2));
// console.log(input + " in octal is: " + input.toString(8));

// Number.        <-- blue boxes are numbers and purple boxes are methods

// this:
// let myName = "Mike Boisvert";
// console.log("My name is " + myName + "!");
// is equivalent to:
// let myName2 = "Mike Boisvert";
// console.log(`My name is still ${myName}!`); Another way of inputting variables into string format(`)

//without wordwrap, you can use \ to make new lines like so:
// let long = "this is a very long sentence,\
// It doesn't really ever need to be this lo\
// ng\
//  but I wanted it to be this long to prove a \
// point.";  // prints out exactly the same as if you didn't have '\'s 
// console.log(`wow, that was a long sentence, it is ${long.length} characters long!`);

// let msg = "this is a cool sentence yo!";
// let search1 = "s";
// console.log(msg.lastIndexOf(search1)); // finds the last instance of 's' in the string, indexOf will find the first instance

// let msg2 = "This is another really cool string!";
// console.log(msg2.substring(13, 18)); // starts printing string from first argument index to (not including) last argument index
// console.log(msg2.substr(10, 4)); // starts printing from the first argument index, and prints the number of chars that is arg 2

// let msg3 = "        \t\n this is a weirdly layered sentence.    \t     \n  ";
// console.log(msg3.trim()); // gets rid of all white space before and after the string

// let dis = "this is getting weird ";
// console.log(dis.repeat(30)); // repeats the string the argument number of times

// ---------- IMPORTANT ----------------------------------------------------------------------------------
// let message = "this is gonna get split up by all of the spaces !";
// console.log(message.split(" ")); // breaks up the string by the argument (the delimiter) into an array
// -------------------------------------------------------------------------------------------------------

// let position = { // Making an object
//     x: 10,
//     y: 20,
//     print: function() {
//         console.log(`X: ${this.x}, Y: ${this.y}, inside an object.`); // Syntax of a function inside of an object
//     },
//     innerPosition: { // Nested object
//         xx: 1000,
//         yy: 2000
//     }
// }

// function print() {
//     console.log(`X: ${this.x}, Y: ${this.y}, outside of an object`); // Syntax of a function outside of an object
// }

// let myPosition = position;

// console.log(position);
// console.log(myPosition);

// myPosition.x = 200;

// console.log(position);
// console.log(myPosition); // The point here being that both of these objects are pointing to the same object, not a copy of the object.

// position.print();
// print();
// console.log(position.innerPosition.xx); // retreiving values of a nested object


// NOTE: prompt() won't work unless it is in a browser, ctrl alt n  will not work with prompt
// More on switch statements:
// {
//     let name = prompt("What is your name?");
//     switch (name) {
//         case "Lindsey":
//         case "Mike":        // 2 cases that have the same result can be combined like this
//             console.log("Hello Mike or Lindsey.");
//             break;
//         default:
//             console.log("This aint for you, get out.");
//             break;
//     }
// }

// single line if statement   NOTE: using the variable "name" is used on window scale, so it will be deprecated if you use it in global definitions
// let name2 = "Mike";
// if (name2 == "Mike") console.log("Welcome Mike!"); // can put the whole logic of if on one line

// Ternary operator example
// let guess = prompt("what is my name?");
// let points = guess === "Mike" ? 10 : 0; // assigns points accordingly if they guess my name right or not (could be a string that results, or anything else)

// can also put methods inside of the ternary operator:
// guess === "Mike" ? console.log("10 points!") : console.log("0 points...");
// console.log(points);

// for (let i = 1; i < 11; i++) { // using a for statement with if statements in it.
//     if (i == 1) console.log(`This is the ${i}st iteration.`);
//     else if (i == 2) console.log(`This is the ${i}nd iteration.`);
//     else if (i == 3) console.log(`This is the ${i}rd iteration.`);
//     else console.log(`This is the ${i}th iteration.`);
// }

// practical example of a do while loop -- will always execute at least once!
// let password = "i dont know";
// do {
//     guess = prompt("What is the password?");
// } while (guess !== password);

// ----------Something to look up would be difference between continue and break--------------

// review for how nested loops iterate -> will do j loop 5 times, then increment i and do j 5 more times, does the innermost for loop first
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         for (let k = 0; k < 5; k++) {
//             console.log(`i: ${i}, j: ${j}, k: ${k}`);
//         }
//     }
// }

// using a nested for loop with html elements:
// let d = document.getElementById("destination");
// for (let i = 0; i < 5; i++) {
//     for (let j = i; j >= 0; j--) {
//         d.append(j + " ");
//     }
//     var br = document.createElement('br'); // makes the break every time i increments
//     d.appendChild(br);
// }

// let ages = [24, 27, 30];
// console.log(ages); // if you reset the length, it will fill the gaps in with undefineds
// ages[5] = 45; // if you set an element outside of the arrays length, all elements leading to that that were empty will be undefined
// for (let i = 0; i < ages.length; i++) {
//     console.log(ages[i]);
// }

// Multi dimensional arrays
// let grades = [
//     [13, 14, 15],
//     [100, 10, 45],
//     [0, 0, 0],
//     [50, 50, 50],
//     [5, 5, 5],
//     [15, 15, 15],
//     [0, 0, 0],
//     [100, 100, 100]
// ]
// console.log(grades[1]) // grabs a sub array inside the original array  OUTPUTS [100, 10, 45]
// console.log(grades[1][2]) // individual element from sub array         OUTPUTS 45

// let array = [3, "poppins", function() { console.log("Hello") }]; // syntax for making a function inside of an array
// array[2](); // Correct syntax for using a function inside of an array

// more fun with arrays
// let array = [1, 5, 3, 7, 6, 0, 56, 78, 2, 98, 9, 10];
// array.length = 3;
// console.log(array); // cuts off rest of the elements beyond the newly declared length   OUTPUTS  [1, 5, 3]

// let array = [5, 46, 3, 9, 37, 69, 30, 5, 1, 50]; // total 255 

// finding min and max value of an array
// -----------------------------------------------------------------------
// let max = Number.NEGATIVE_INFINITY;
// let min = Number.POSITIVE_INFINITY;
// let minIndex;
// let maxIndex;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//         maxIndex = i;
//     } else if (array[i] < min) {
//         min = array[i];
//         minIndex = i;
//     }
// }

// console.log(`max element: ${max} found at index: ${maxIndex}`);
// console.log(`min element: ${min} found at index: ${minIndex}`);
// -----------------------------------------------------------------------

// finding the average of the array
// let total = 0;
// for (let i = 0; i < array.length; i++) {
//     total += array[i]; // generates total of the whole array
// }
// let avg = (total / array.length);
// console.log(`avg of the array is ${avg}`);

// fill an array with user input
// let grades = [];
// while (true) {
//     let input = prompt("Add a grade, press cancel or type q to stop.");
//     if (input === "q" || input === null) {  // null indicates that cancel was clicked in the web browser.  
//                                             // input that stops infinite loop is known as a SENTINAL VALUE
//         console.log(grades);
//         break;
//     }
//     grades.push(Number(input)); // PUSHING INTO ARRAYS CHANGES THE ORIGINAL ARRAY, IT DOESN'T MAKE A COPY
//     console.log(grades);
// }

// METHODS: you can put multiple values into PUSH and UNSHIFT
/* PUSH()    adds an element to the END of an array, returns new array length
   UNSHIFT() adds an element to the BEGINNING of an array, returns new array length
   POP()     removes an element from the end of an array, returns the removed value
   SHIFT()   removes an element from the BEGINNING of an array, returns the removed value 
   SPLICE()  add and remove elements from the array 
     - splice arguments - (index where to start, # of elements to delete, elements you want to add AFTER the start index (can be multiple))*/

// let array = [1, 2, 6, 7, 8, 9];
// array.splice(2, 0, 3, 4, 5); // for splice if your starting value is passed max length, elements just get added to the end. 
// console.log(array);

// let array = [5, 3, 8, 13, 17, 21, 25, 30, 400, 65, 2, 76, 34, 44];
// console.log(array.sort()); // sorts all of the numbers that start with 1, then 2, etc
// console.log(array.sort(function(a, b) { return a - b })); // callback function that sorts the array numerically
// console.log(array.reverse()); // NOTE: all do these change the original array
// console.log(array);

// let grades = [40, 37, 65];
// let otherGrades = [100, 97, 56];
// console.log(grades.concat(otherGrades)); // concat DOES NOT ALTER THE ORIGINAL ARRAY! just returns the new array - assign the concat to another variable if you need the new array
// console.log(grades);
// let fullGrades = grades.concat(otherGrades);
// console.log(fullGrades);

// let grades = [45, 2, 7, 19, 60, 35, 56, 34, 100, 577, 1000000];
// console.log(grades.includes(546)); // just returns true or false, if you need the index of a searched element, use the indexOf method
// console.log(grades.indexOf(61)); // returns index if its in the array, returns -1 if not in the array
// let other = grades.join(" and then "); // join converts an array to a string, the argument for join sets different delimeters
// console.log((other));
// console.log(grades.slice(4, 8)); // doesn't change the original array, grabs a part of an array

// let grades = [1, 4, 7, 9, 10, 15];
// grades.forEach(function(item) { // only going to work with elements that are defined, can have 3 args: first is elements, 2nd is index, third is the array
//     console.log(`${item + 10}`);
// });

// forEach with multidimensional arrays
// let grades = [
//     [1, 2, 34, 4, 5],
//     [45, 67, 89, 23, 20],
//     [100, 100, 100, 100, 100],
//     [50, 50, 50, 50, 50]
// ]

// review: using for loop for iterating 2D array
// for (let i = 0; i < grades.length; i++) { // returns the rows of the 2D array
//     for (let j = 0; j < grades[i].length; j++) { // returns the elements of the 2D array (grades[i].length is best approach because it covers arrays with different lengths)
//         console.log(grades[i][j]);
//     }
//     console.log("------------------");
// }

//using forEach in 2D array:  THIS IS MUCH BETTER PRACTICE
// grades.forEach(function(row) {
//     row.forEach(function(col) {
//         console.log(col);
//     })
//     console.log("-------------");
// });