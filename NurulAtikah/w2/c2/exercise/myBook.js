
//************WEEK 2 DAY 2************/
//************EXERCISE************/
//************The Book List************/
// Keep track of which books you read and which books you want to read!
// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy this array of books (or create your own):
//Iterate through the array of books. 
// For each book, create a p element with the book title and author and append it to the page.
// If you have read it, make the text color green. If you haven't, make the text color red.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page
let books = [
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    alreadyRead: false,
    img: "https://m.media-amazon.com/images/I/41WVtoodZFL._AC_SY780_.jpg"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    alreadyRead: true,
    img: "https://kbimages1-a.akamaihd.net/21a94eb9-86fe-460c-88d4-55a13872e5e0/353/569/90/False/sapiens-3.jpg"
  },
  {
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    alreadyRead: true,
    img: "https://kbimages1-a.akamaihd.net/92328064-20cc-40f7-a6a2-1cb1f0859cba/353/569/90/False/a-short-history-of-nearly-everything-2.jpg"
  },
  {
    title: "A Life on our Planet",
    author: "David Attenborough",
    alreadyRead: true,
    img: "https://m.media-amazon.com/images/I/41ft8ICa81L._SX323_BO1,204,203,200_.jpg"
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    alreadyRead: false,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Cosmos_spacetime_odyssey_titlecard.jpg/375px-Cosmos_spacetime_odyssey_titlecard.jpg"
  }
];

// for (var i = 0; i < books.length; i++) {
//   var bookP = document.createElement('p');
//   var bookDesc = document.createTextNode(books[i].title + ' by ' + books[i].author);
//   bookP.appendChild(bookDesc);
//   document.body.appendChild(bookP);
// }

var bookList = document.createElement('ul');
for (var i = 0; i < books.length; i++) {
  var bookItem = document.createElement('li');
  var bookDesc = document.createTextNode(books[i].title + ' by ' + books[i].author);
  var bookImg = document.createElement('img');
  bookImg.src = books[i].img;
  bookImg.style.width = "20px";
  bookItem.appendChild(bookImg);
  bookItem.appendChild(bookDesc);
  if (books[i].alreadyRead) {
    bookItem.style.color = 'green';
  }
  else {
    bookItem.style.color = 'red';
  }
  bookList.appendChild(bookItem);
}
document.body.appendChild(bookList);

















