// Creating and storing elements to variables
const body = document.body;
const universal = document.querySelectorAll("*");
const soilArea = document.createElement("div");
const grassArea = document.createElement("div");
const wood = document.createElement("div");
const leafA = document.createElement("div");
const leafB = document.createElement("div");
const leafC = document.createElement("div");
const leafD = document.createElement("div");
const leafE = document.createElement("div");

// Appending all elements to the body
const arr = [soilArea, grassArea, wood, leafA, leafB, leafC, leafD, leafE];

arr.forEach(function (elm) {
    body.appendChild(elm);
});

// Basic reset
universal.forEach(function (element) {
    element.style.margin = "0";
    element.style.padding = "0";
    element.style.boxSizing = "border-box";
});

// Styling body
body.style.height = "100vh";
body.style.backgroundColor = "lightblue";

