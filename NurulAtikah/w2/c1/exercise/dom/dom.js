
//************WEEK 2 DAY 1************/
//************DOM************/

let heading = document.querySelector("h1")
heading.innerHTML = "Something Else";
heading.innerHTML = "Something Else!!!";

//create a variable called subheading
//through the DOM and find h2
let subHeading = document.querySelector("h2")
subHeading.innerHTML = "Yabedu";

//create a variable called "paragraph" by searching through p
let paragraph = document.querySelector("p")

console.log(heading,subHeading,paragraph);

let list = document.querySelector("ul")

//let anchor = document.querySelector(".container a")

let allList = document.querySelectorAll("li")

let allPar = document.querySelectorAll("p")


//************EXERCISE************/
//************Visit General Assembly's website in Google Chrome************/
// The title of the page
let title = document.querySelector("title")

// The logo in the nav
let logo = document.querySelector(".navi_banner_logo")

// // The "Find Your Course" button in the nav
let findYourCourse = document.querySelector(".navi_menu .highlight a");

// //The heading that says "Learning Today, Leading Tomorrow"
let learn = document.querySelector("h1")

// // All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
let domNodeList = document.querySelectorAll(".navi_menu_dropdown_nested-dropdown");

// // The amount of campuses around the world
let amountCamp = document.querySelector(".facts_list_item_quantity")
amountCamp.innerHTML;
// //The number of instructors
let instructor = document.querySelectorAll(".facts_list_item_quantity")[2]
instructor.innerHTML

// //The logos of GA's featured clients and hiring partners
let partners = document.querySelector(".Employers__list___1cuG_")

// //GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
let fb = document.querySelector(".navi_footer-social-icons_facebook")
let twitter = document.querySelector(".navi_footer-social-icons_twitter")
let linkedIn = document.querySelector(".navi_footer-social-icons_linkedin")
let inst = document.querySelector(".navi_footer-social-icons_instagram")
let yt = document.querySelector(".navi_footer-social-icons_youtube")

// //The input where you add your email to sign up for the newsletter (in the footer)
let email = document.querySelector(".navi_footer-signup-input")

// document.querySelector('h1').textContent = 'My Website'

//innerHTML vs innerText
let subheading = document.querySelector("h2")
console.log(subheading.innerHTML)
console.log(subheading.innerText)

// innerHTML -- innerText returns all text contained by an element and all its child elements.
// innerText -- innerHtml returns all text, including html tags, that is contained by an element.

subheading.innerHTML = "Changed by JS"

subheading.innerHTML = "<u> Changed </u> by JS"
subheading.innerHTML = "BEFORE " + subheading.innerHTML;

const image = document.querySelector("img");
console.log(image)

const srcText = image.getAttribute("src");
console.log(srcText)

const altText = image.getAttribute("alt");
console.log(altText)

const aTag = document.querySelector("a");
console.log(aTag)

const href = aTag.getAttribute("href");
console.log(href)

const id = aTag.getAttribute("id");
console.log(id)


let anchor = document.querySelector(".container a")
let currH = anchor.getAttribute("href")

//how to get id
let ids = anchor.getAttribute("id")

anchor.setAttribute("href", "https://google.com")
anchor.setAttribute("id", "google")

// //change text "this link" to Google
anchor.innerText = "Google"

let input = document.querySelector("input")
let currentVal = input.value

let heading = document.querySelector("h1");
// Getting Styles
let headingStyles = getComputedStyle(heading);
console.log(headingStyles)

// Setting Styles
heading.style.width = "100px";
heading.style.color = "red"
//underline
heading.style.textDecoration = "underline"
//italic
heading.style.fontStyle = "italic"
//uppercase
heading.style.textTransform = "uppercase"













