//************WEEK 2 DAY 1************/
//************EXERCISE IN CLASS************/
//************Driving Age************/
//   Write a function that receives a userAge called canDrive
// If the received age is less than 16, print "Sorry, you can't drive yet"
// If the received age is equal to or over 16, print "Drive away!"
// Bonus: If the user can't drive yet, tell them how 
// many years they will have to wait (e.g. "Sorry, you have 4 years to wait until you can drive")

function canDrive(userAge){
   let ageDrive = 16
   if (userAge < ageDrive){
      console.log("Sorry, you have " + (ageDrive - userAge) + " years to wait until you can drive")
   }else {
      console.log("Drive away!")
   }
}
canDrive(parseInt(prompt("userAge:"), 1));

//************The World Translator************/
const lang = [
   { language: "English", word: "Hello World" },
   { language: "Malay"  , word: "Hai dunia" },
   { language: "French" , word: "Bonjour le monde" }
];

let ivalue = prompt("Enter Language [english,malay,french]", "English");

lang.forEach(e => {
   if (e.language.toUpperCase()== ivalue.toUpperCase()){
       console.log("Language : "+e.language +", word : "+e.word);       
       return;
   }    
});

//************The Age Calculator************/
// Forgot how old you are? Calculate it!
// Write a function named calculateAge that:
// Takes 2 arguments: birthYear, and currentYear.
// Calculates the 2 possible ages based on those years.
// Outputs the result: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear) {
   const DATE = new Date();
   let currYear = DATE.getFullYear();
   let firstAge = currYear - birthYear;
   let secondAge = firstAge - 1;
   //console.log(`They are either ${age1} or ${age2}`);
   console.log("They are either  " + firstAge + ' or ' + secondAge) ;
}
calculateAge(parseInt(prompt("Your Birth Year?", "1993")));


//************REVIEW************/

//array - mutable
const data = ["String", 1, null, undefined, [], {} ];

console.log(data[0])
//replace string to STRING
console.log(data[0] = "STRING");


// const letter = ["b", "c"]
// letter.unshift["a"];
// letter.push["d"];
// letter.shift();
// letter.pop();
// console.log(letter)

//for loop
let tweets = [
   "My First Tweet",
   "My Second Tweet",
   "My Third Tweet",
   "My Forth Tweet",
]

//starting point: 0
//ending condition: 
//step: +=1

for (let i = 0; i < tweets.length; i++) {
   let curr = console.log(tweets[i]);
}

//objects - unordered
//array - ordered
let course = {
   name: "JavaScript Development",
   teacher: "Avi",
   assisstant: "Aiman",
   numOfHours: 60
}

console.log(course.name);
//add topic (array)
console.log(course.topics = ["JS","React", "API", "AJAX"])

let blog = [

   { title: "Blog Heading One", content: "Lorem ipsum", author: "Robi" },
 
   { title: "Blog Heading Two", content: "Lorem ipsum", author: "Chong" },
 
   { title: "Blog Heading Three", content: "Lorem ipsum", author: "Kogu" },
 
   { title: "Blog Heading Four", content: "Lorem ipsum", author: "Fakri" },
 
 ];

//function
function speak() {
   console.log("Speaking...")
}
//call-site
speak();

function greet(name) {
   console.log("Hello" + name + "!")
}
greet("Avi")

//divide 2 numbers
//you must return

function divide(num1, num2){
   return num1/num2;
}
console.log(divide(8,2));

function divide(x,y){
   let result = x/y
   return result
}

let divideByTwoPlusTen = divide(10,2) + 10;
console.log(divideByTwoPlusTen);



