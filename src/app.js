import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
  let icons = ["♦", "♥", "♠", "♣"];

  let randomNumb = numbers[Math.floor(Math.random() * numbers.length)];
  let randomIcons = icons[Math.floor(Math.random() * icons.length)];

  let card = document.querySelector("#center")
  let domIcon1 = document.querySelector("#pintaUp")
  let domIcon2 = document.querySelector("#pintaDown")

  if (randomIcons === "♥" || randomIcons === "♦"){
    domIcon1.style.color = "red";
    domIcon2.style.color = "red";
  }

  card.innerText = randomNumb;
  domIcon1.innerText = randomIcons;
  domIcon2.innerText = randomIcons;

}
