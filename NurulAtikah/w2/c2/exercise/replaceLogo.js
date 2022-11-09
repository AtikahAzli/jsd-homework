
//************WEEK 2 DAY 2************/
//************EXERCISE************/
// Replace the Logo
// Visit Google's website in Chrome, and open up the console.
// Find the Google logo and store it in a variable using DOM traversal
let logo = document.querySelector(".lnXdpd")

// Save the current src attribute into a variable
let srcImage = image[1].src
image[1].src = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'
image[1].srcset = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'

// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// You can use this url for the Yahoo Logo: https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg
// Hint: You may need to figure out how to remove the srcset attribute for this!
logo.srcset = "https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png";

// Find the Google search button and store it in a variable.
let btnMe = document.querySelectorAll('input.gNO89b')

search = document.querySelector(".FPdoLc.lJ9FBc .gNO89b")

// Modify the text of the button so that it says "Yahooo!" instead
btnMe[1].value = "Yahoo!"

search.value = "Yahoo!";




















