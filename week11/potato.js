let theFirst, theLast;
let theLat, theLong, theUrl;
let theSearch = $("#theySearch").on("click", locateMe)
let theReturn;
//
//
console.log("hello js!");
var theButton = $("#theSubmit").on("click", myFunction);
const theGeo = $('#mySecondButton').on("click", locateMe);

function myFunction() {
  console.log("yay");
  theFirst = $("#theText").val();
  console.log(theFirst);
  theLast = $("#theText2").val();
  console.log(theFirst + theLast);
  $("h3").append(" " + theFirst + "!!");
}
//
//
function locateMe() {
  console.log("you are");
  $("#youAreHere").append(theLong, +" " + theLat);
  window.open(theURL, "+ also here");
  theReturn = $('#theInput').val();
  console.log(theReturn)
}
if ("geolocation" in navigator) {
  console.log("connected!")
} else {
  console.log("not connected :(")
}
//
//
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  theLong = position.coords.latitude;
  theLat = position.coords.longitude;
  theURL = "https://www.google.com/maps/search@" + theLat + "," + theLong;
  // theURL = "https://www.google.com/maps/search/" + theReturn;
})
