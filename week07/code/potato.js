console.log("yaya!!!");
// get the button element from the html + pass into a variable
const theButton = document.querySelector("#myButton");
const theOtherButton = document.querySelector("#mySecondButton");
let theBody = document.querySelector("body");
let theText = document.querySelector("h3");
//
//
// add an addEventListener + function to the button
theButton.addEventListener('click', clickButton);
theOtherButton.addEventListener('click', changeColor);

function clickButton() {
  console.log("they clicked!");
  theText.append(":   is awesome!")
}

function changeColor() {
  theBody.style.color = "yellow";
}
