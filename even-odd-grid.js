let numbers = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  105,
];
let even = [];
let odd = [];

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];

  if (num % 2 === 0) {
    even.push(num);
  } else {
    odd.push(num);
  }
}

console.log(even);
console.log(odd);

const oddBoxes = document.getElementsByClassName("box-odd");
const evenBoxes = document.getElementsByClassName("box-even");

for (let i = 0; i < odd.length; i++) {
  const box = document.createElement("div");
  box.className = "box";
  box.textContent = odd[i];
  box.style.backgroundColor = "red";
  oddBoxes[i].appendChild(box);
}

for (let i = 0; i < even.length; i++) {
  const box = document.createElement("div");
  box.className = "box";
  box.textContent = even[i];
  box.style.backgroundColor = "blue";
  evenBoxes[i].appendChild(box);
}
