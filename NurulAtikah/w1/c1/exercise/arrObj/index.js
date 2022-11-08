
//************Arrays************/
/*Starting with an empty array called rainbowColors:

Add "orange" to the end of the array
Add "red" to the start of the array
Add "yellow" to the end
Add "green", "blue", "indigo", and "violet" to the end of the array
Bonus: Do this using one method
Log out the length of the array
Log out the second item
Log out the last item (make this flexible/dynamic!)
Log out the index of the string "blue"*/

/* push - add to the end*/
/* pop - remove the end*/
/* unshift - add to start*/
/* shift - remove from start*/
const rainbowColors = [];
console.log(rainbowColors.push("orange"));
console.log(rainbowColors.unshift("red"));
console.log(rainbowColors.push("yellow"));
console.log(rainbowColors.push("green", "blue", "indigo", "violet"));
console.log(rainbowColors);

console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors.length - 1);
console.log(rainbowColors.indexOf("blue"));

/*Bonus: Find out the difference between .slice and .splice
Create an array called twoColors using one method - 
don't change the rainbowColors array! 
Essentially pull two colors out of the array (say, between the index of 1 and 3)

Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, 
remove the duplicates destructively using slice or splice (whichever one is appropriate)*/

const twoColors = [];
console.log(rainbowColors[1]);
console.log(rainbowColors[3]);

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
console.log(nums.slice());
console.log(nums.splice(0,9));



//************OBJECTS************/
const bookSeries = {
    name: "In Search of Lost Time",
    author: "Marcel Proust",
    rating: 5,
    books: [
        "Swann's Way",
        "In the Shadow of Young Girls in Flower",
        "The Guermantes Way",
        "Sodom and Gomorrah",
        "The Prisoner",
        "The Fugitive",
        "Time Regained"
    ]
   };
   //const rating = console.log(bookSeries.rating = "10");
   
   const name = console.log(bookSeries.name); 
   const author = console.log(bookSeries.author); 
   const rating = console.log(bookSeries.rating); 
   const firstBook = console.log(bookSeries.books[4]);

//logout the whole book series
   const booksArr = console.log(bookSeries.books);
//    //logout the 4th book
   const book4 = console.log(bookSeries.books[3]);


let course = {
    topic: "Javascript"
}
console.log(course.topic = "Javascript Development");
console.log(course.teacherName = "Avi")
console.log(course.teachingAssistant = ["Aiman","Iman"])
console.log(course.name);//undefined


const explorer = {
    firstName: "Jack",
    lastName: "Delta",
    birth: {
    day: 11,
    month: 6,
    year: 1910
    }
};


 //Jack
   const firstName = console.log(explorer.firstName);
   //Delta
   const lastName = console.log(explorer.lastName);
   //1910
   const birthYear = console.log(explorer.birth.year);
   //day
   const birthDay =console.log(explorer.birth.day);


const marxFamily = [
    { name: "Groucho", birthYear: 1890 },
    { name: "Harpo", birthYear: 1888 },
    { name: "Chico", birthYear: 1887 },
    { name: "Zeppo", birthYear: 1901 },
    { name: "Gummo", birthYear: 1893 }
   ];
   
console.log(marxFamily[0].name);
console.log(marxFamily[1].name);
console.log(marxFamily[2].name);
console.log(marxFamily[3].name);
console.log(marxFamily[4].name);

for (let i = 0; i < marxFamily.length; i++ ) {
    let brother = console.log(marxFamily[i]);
}



// Create an array of objects, where each object describes a book and has properties for the 
// title (a string), author (a string), and alreadyRead (a boolean indicating if you have read it yet).
// For each book, log the book title and book author like so: "'Sapiens', by Yuval Noah Harari".
// Now use an if/else statement to change the output depending on whether you read it yet or not.
// If you have read it, log a string like 'You have already read "Sapiens", by Yuval Noah Harari'
// If not, log a string like 'You still need to read "A Life on Our Planet", by David Attenborough.'"
const readingList = [
    {
        title: "Sapiens", 
        author: "Yuval Noah Harari",
        alreadyRead: false
    },
    {
        title: "A Life on Our Planet", 
        author: "David Attenborough",
        alreadyRead: true
    }
]

for (i=0; i < readingList.length; i++){
    let book = readingList[i].title;
    let author = readingList[i].author;

    if(readingList[i].alreadyRead){
        console.log("You have already read \"" + book + "\", by " + author)
    } else{
        console.log("You still need to read \"" + book + "\", by " + author)
    }
}

/*Create an object to hold information on your favorite recipe. 
It should have properties for a title (a string), a number of servings, and ingredients (an array of strings).
Ginger, Apple and Banana Smoothie

Serves: 2

Ingredients:

- 500ml Milk
- 2/3 cups of vanilla protein powder
- 2 tbs rolled oats
- Pinch of cinnamon
- 2 cups of baby spinach leaves
- 2 frozen bananas
- 2 roughly chopped apples
- 1/2 avocado
- 2 tsp fresh ginger
- 6 ice cubes
*/

let recipe = {
    title: "Ginger, Apple and Banana Smoothie",
    numberOfServes: 2,
    ingredients: [
        "- 500ml Milk",
        "- 2/3 cups of vanilla protein powder",
        "- 2 tbs rolled oats",
        "- Pinch of cinnamon",
        "- 2 cups of baby spinach leaves",
        "- 2 frozen bananas",
        "- 2 roughly chopped apples",
        "- 1/2 avocado",
        "- 2 tsp fresh ginger",
        "- 6 ice cubes"
    ]
}

console.log(`${recipe.title}\n\nServes: ${recipe.numberOfServes}\n\nIngredients:\n\n${recipe.ingredients.join('\n')}`)

// Create an object to store the following information about your favorite movie: 
// title (a string), duration (a number), director (a string) and stars (an array of strings).
// Print out the movie information like so: "'The Life Aquatic' lasts for 118 minutes, 
// and was directed by Wes Anderson. 
// Stars: Bill Murray, Cate Blanchett, Anjelica Huston, Jeff Goldblum and Willem Dafoe
const movie = {
    title : "The Life Aquatic",
    duration: 118 , 
    director: "by Wes Anderson",
    stars : [
        "Bill Murray", 
        "Cate Blanchett", 
        "Anjelica Huston", 
        "Jeff Goldblum",
        "Willem Dafoe"
    ]
}
console.log(movie);

//************FUNCTIONS************/
