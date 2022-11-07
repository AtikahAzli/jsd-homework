//***********The Age Calculator************/

let currYear = prompt ("Key in current year: ");
let birthYear = prompt("Key in birth year: ");

let firstAge = currYear - birthYear;
let secondAge = firstAge - 1;
let output = "They are either  " + firstAge + ' or ' + secondAge ;
console.log(output);


//***********The Lifetime Supply Calculator************/

let age = prompt ("Key in current age: ");
let maxAge = prompt ("Key in maximum age: ");
let numPerDay = prompt ("Key in number you need coffee per day: ");
let total = (numPerDay * 365) * (maxAge - age);
let result = 'You will need ' + total + ' cups of coffee to last you until the ripe old age of ' + maxAge;
console.log(result);


//***********The Geometrizer************/

let radius = 3;
let circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
let area = Math.PI * radius*radius;
console.log("Area is " + area);


/***********The Temperature Converter************/

let cel = 120;
let celInF = (cel*9)/5 + 32;
console.log(cel + '°C is ' + celInF + '°F');
let f = 200;
let fInC = ((f - 32)*5)/9;
console.log(f + '°F is ' + fInC + '°C');