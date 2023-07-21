let body = document.querySelector("body");
body.style.backgroundColor = "blue";
body.style.height = "100vh";
body.style.display = "grid";
body.style.placeItems = "center";
let container = document.createElement("div");

container.style.height = "300px";
container.style.backgroundColor = "white";
container.style.width = "300px";
container.style.display = "grid";
container.style.gridTemplateColumns = "60px 60px 60px 60px 60px";
container.style.gridTemplateRows = "60px 60px 60px 60px 60px";

body.appendChild(container);

for (let i = 0; i < 25; i++) {
  let innerBox = document.createElement("div");

  innerBox.style.backgroundColor = "blue";
  container.appendChild(innerBox);
  innerBox.style.display = "grid";
  innerBox.style.placeItems = "center";

  let circle = document.createElement("div");
  circle.style.height = "30px";
  circle.style.width = "30px";
  circle.style.borderRadius = "50%";
  circle.style.backgroundColor = "yellow";

  innerBox.appendChild(circle);

  innerBox.classList.add("box");
}

let box = document.getElementsByClassName("box");

for (let i = 0; i < box.length; i += 2) {
  let even = box[i];
  box[i].style.backgroundColor = "yellow";
}
