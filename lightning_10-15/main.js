// Make a basic index.html page with an h1 tag that says "My Favorite Snack" and an p tag that contains the string "Spicy Nacho Cheese Doritos and an icy cold Coca-Cola"

// Create a main.js file and add it to your HTML file with a script tag

// Create a styles.css file and include it in your HTML file with a link tag

// Add this to styles.css

// .urgent {
//   color: red;
// }
// Use JavaScript to:

// add a class of urgent to title

const titleChange = document.querySelector(".ech_wun");
titleChange.classList.add("urgent")

// if no specifics
// titleChange.setAttribute()

// Make a basic index.html page

// Create a styles.css file and include it in your HTML file with a link tag

// Add this to styles.css

// .article__section {
//   background-color: black;
//   color: white;
// }
// .highlight {
//   background-color: yellow;
//   color: black;
// }
// Use JavaScript to:

// add a class of highlight to the second article__section

const selectAllHeaders = document.querySelectorAll(".article__section");
for (i = 0; i < selectAllHeaders.length; i++) {
    if (i = 2) {
        selectAllHeaders[i].classList.add("highlight")
    }
}