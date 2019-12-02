console.log("hello js!");
// declare empty varibles to pass user data into
let theFirst;
let theLast;
let theTeam;
// grap the main html element
// pass it into a variable
let theMain = $("main");
// grap theSubmit id element and
// pass it into a variable w/ an onclick call back
var theButton = $("#theSubmit").on("click", myFunction);
//do the same w/ theTeam id button
var theTeamButton = $("#teamButton").on("click", teamFunction);
// name function trigged on line 11
function myFunction() {
  console.log("yay");
  theFirst = $("#theText").val();
  // console.log(theFirst);
  theLast = $("#theText2").val();
  // console.log(theFirst + theLast);
  $("h3").append(" " + theFirst + "!!");
  $("h3").css("background-color", "yellow");
  // theMain.append("user is: " + theFirst + theLast);
  // theMain.css("background-color", "rgb(255,0,0)");
  //
}
//
function teamFunction() {
  theTeam = $("textarea").val();
  // console.log(theTeam)
  theMain.append("yr favorite team is: " + theTeam);
  theMain.css("background-color", "rgb(255,0,0)");
}
