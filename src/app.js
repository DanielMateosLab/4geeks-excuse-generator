/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The cat", "My partner", "His beard", "My stove"];
let action = ["ate", "ruined", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function selectRandomItemFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

window.onload = function() {
  const excuseComponents = [who, action, what, when];

  const randomExcuse = excuseComponents
    .map(component => selectRandomItemFromArray(component))
    .join(" ");

  document.getElementById("excuse").innerText = randomExcuse;
};
