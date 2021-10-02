
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
// console.log("Octal equivalent is: " +  Number.parseInt(input, 8));

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