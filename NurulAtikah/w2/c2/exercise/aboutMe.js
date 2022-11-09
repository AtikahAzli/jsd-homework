//************WEEK 2 DAY 2************/
//************EXERCISE************/
//************About Me************/
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "list-item". 
//Add a style tag that sets a rule for "list-item" to make the color "red".
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').textContent = 'Nurul Atikah Azli';
document.getElementById('favorites').textContent = 'Cooking';
document.getElementById('hometown').textContent = 'Selangor';
var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    items[i].className = 'list-item'; 
    items[i].style="color:red";   
}
var pic = document.createElement('img');
pic.src = 'https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg';
pic.style.width = "350px"
document.body.appendChild(pic);

















