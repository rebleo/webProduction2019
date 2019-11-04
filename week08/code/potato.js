console.log("hello!");
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


//
//
// string data
let myFirst = "rebecca";
let myLast = "leopold";
console.log(myFirst +" "+ myLast);
//
// numeric data
let theQuanity = 19;
let thePrice = 299.99;
let theMoney = theQuanity * thePrice;
//
console.log(theMoney + " "+ myFirst);


// functions
function sayHello() {
	console.log("hello!");


}
sayHello();

console.log(theText.textContent);

document.addEventListener("keydown", theEvent => {
	console.log("they pressed a key!");
	if (theEvent.keyCode === 8 ){
		console.log("they pressed delete!");
		theText.textContent = "you pressed back!"
	}
})


// function myFunction(theEvent){
// 	if(theEvent.keyCode === 32){
// 		console.log("key 32!");
// 		theText.textContent = "you pressed space!"
// 	} else {
	
// 		if(theEvent.keyCode === 82){
// 			console.log("r!!");
// 			theText.textContent = "you pressed r";
// 		}
// 	}

// }













