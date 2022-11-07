//***********The even/odd reporter************/

for (let i = 1; i <= 20; i++) {
    if (i === 0) {
        console.log(i + " is even");
    }
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
  }

//***********Multiplication Tables************/

for (let multiplier=0; multiplier<=10; multiplier++){
    for (let j=0; j<=10; j++){
        let output = multiplier*j;
        console.log(multiplier+ '*' +j + '=' + output);
    }
}

//***********The Grade Assigner************/

function assGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 60) {
        return 'D';
    } else {
        return 'F';
    }
}
for (let x = 60; x <= 100; x++) {
  console.log('For ' + x + ', you got a ' + assGrade(x));
}

//***********Golf************/
// Using the Golf condition you made before in the 
//conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole
// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5
// Bonus: Generate a random par for each iteration

const MIN = 3;
const MAX = 5;

let diff = MAX - MIN;

for (let k = 1; k <= 8; k++) {
    let par = 5
    if (k == 1) console.log("Hole in one")
    else if ((k - par) <= -2) console.log("Eagle")
    else if ((k - par) == -1) console.log("Birdie")
    else if (k == par) console.log("Par")
    else if ((k - par) == 1) console.log("Bogey")
    else if ((k - par) == 2) console.log("Double Bogey")
    else console.log("Not sure")
}



//***********99 Bottles of Beer***********/

function beerSong() {  
    var bottles;
    var bottlesLeft;
    for (i = 99; i >= 1; i--) {
      if (i === 1) {
        bottles = "bottle";
        bottlesLeft = "no more bottles of beer on the wall."  + "\n" + " " + "\n" + "No more bottles of beer on the wall, no more bottles of beer." + "\n" + "Go to the store and buy some more, 99 bottles of beer on the wall.";
      } else {
        bottles = "bottles";
        bottlesLeft = i - 1 + " bottles of beer on the wall.";
      }
      console.log("\n" + i+ " " + bottles + " of beer on the wall," + i+ " " + "bottles of beer.");
      console.log("Take one down and pass it around," + "" + bottlesLeft );
    }  
}
  console.log(beerSong());
