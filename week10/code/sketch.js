console.log(Date.now())
let theStart = Date.now();
let theEnd;
let theInterval;
console.log(theInterval)
$("button").on("click", myFunction);

function myFunction() {
  theEnd = Date.now();
  theInterval = theEnd - theStart;
  console.log(theInterval);
  $("h1").append("<p>it's been " + theInterval + " milliseconds")
  $("h1").append("<div> is htis s new div?")
}
$("#target").click(function() {
  $("#other").text("now the text is this!")
})
var theText;
$("#theSubmit").click(function() {
  theText = $("#theText").val();
  console.log(theText)
})
