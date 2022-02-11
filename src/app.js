/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suit = ["♦", "♥", "♠", "♣"];

  let randomNumbers = Math.floor(Math.random() * numbers.length);
  let randomSuit = Math.floor(Math.random() * suit.length);

  document.getElementById("number").innerHTML = numbers[randomNumbers];
  document.getElementById("suitUp").innerHTML = suit[randomSuit];
  document.getElementById("suitDown").innerHTML = suit[randomSuit];
  if (suit[randomSuit] == "♥" || suit[randomSuit] == "♦") {
    document.getElementById("suitUp").className = "rojo";
    document.getElementById("suitDown").className = "rojo";
    document.getElementById("number").className = "rojo";
  }
};
