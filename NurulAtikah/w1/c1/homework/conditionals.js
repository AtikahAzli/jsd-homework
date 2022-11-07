//***********The World Translator************/

let lang = prompt("Key in your language: ", "English");
if (lang == "English") { console.log("Hello World!"); }
else if (lang == "French") { console.log("Bonjour le monde!"); }
else if (lang == "Malay") { console.log("Hai Dunia!"); }
else { console.log("I'm sorry, I didn't understand."); }


//***********The Grade Assigner************/

let testScore = parseInt(prompt("Key in your test score: ", 100));
if (testScore >= 80 && testScore <= 100) { console.log("A"); }
else if (testScore >= 70 && testScore <= 79) { console.log("B"); }
else if (testScore >= 60 && testScore <= 69) { console.log("C"); }
else if (testScore >= 50 && testScore <= 59) { console.log("D"); }
else { console.log("F"); }


//***********Air Conditioning************/

let currTemp = parseInt(prompt("Key in your current temperature: ", 36));
let desTemp = parseInt(prompt("Key in your desired temperature: ", 24));
let condAir = confirm("Airconditioner is okay? ", true);
if (currTemp > desTemp && condAir) { console.log("Turn on the A/C Please"); }
else if (currTemp > desTemp && !condAir) { console.log("Fix the A/C now!  It's hot!"); }
else if (currTemp < desTemp && !condAir) { console.log("Fix the A/C whenever you have the chance...It's cool..."); }


/***********You and Your Government************/

let currAge = parseInt(prompt("Key in your current age: ", 39));
if (currAge >= 35) { console.log("You can vote AND hold any place in government!"); }
else if (currAge >= 25 && currAge < 35) { console.log("You can vote AND run for the Senate!"); }
else if (currAge >= 18 && currAge < 25)  { console.log("You can vote!"); }
else { console.log("You can't vote yet"); }

/***********Golf************/

let par = parseInt(prompt("Key in your par: ", 72));
let stroke = parseInt(prompt("Key in your stroke: ", 74));
if (stroke == 1) { console.log("Hole in one"); }
else if ((stroke - par) <= -2) {console.log("Eagle"); }
else if ((stroke - par) == -1) { console.log("Birdie"); }
else if (stroke == par) { console.log("Par"); }
else if ((stroke - par) == 1) { console.log("Bogey"); }
else if ((stroke - par) == 2) { console.log("Double Bogey"); }
else { console.log("Not sure"); }


/***********Serge Says************/

let msg = prompt("Key in your message:", "Atikah?");
if (msg.charAt(msg.length - 1) == "?") { console.log("Sure."); }
else if (msg.trim() != "" && msg == msg.toUpperCase().trim()) { console.log("Woah, chill out!"); }
else if (msg.trim() == "") { console.log("Fine. Be that way!"); }
else { console.log("Whatever."); }

/***********The Pluralizer************/

let word = prompt("Word", "Ability")
let result = word + "s";


let lastChar = word.charAt(word.length - 1);
let secLastChar = word.charAt(word.length - 2);
let allButLastChar = word.substring(0, word.length - 1);
let allButSecAndLastChar = word.substring(0, word.length - 1);


/***********The Rest************/

let game = parseInt(prompt("Key in how many games: ", 1))
let playerWinCount = 0;
let botWinCount = 0;
let draw = 0;
for (let i = 0; i < game; i++) {
  let player = parseInt(prompt("Rock - 0, Paper - 1, Scissors - 2", 0));
  let bot = Math.floor(Math.random() * 3);
  if(player == bot) draw++;

  if(player == 0 && bot == 1) botWinCount++;
  if(player == 0 && bot == 2) playerWinCount++;

  if(player == 1 && bot == 0) playerWinCount++;
  if(player == 1 && bot == 2) botWinCount++;

  if(player == 2 && bot == 0) botWinCount++;
  if(player == 2 && bot == 1) playerWinCount++; 
}
console.log("Player Win:" + playerWinCount + ", Bot Win: " + botWinCount + ", Draw:" + draw );