console.log("hello js")
// grab the button + pass into a variable
var theButton = $("#myButton").on("click", myFunction);
// when click button add text to the header 3
function myFunction() {
  console.log("button clicked");
  $("h3").append("<p> you pushed the button!");
}
// making a div a button
// displaying to another div
$("#target").click(function() {
  $("#other").text("Now the txt is this!");
})
// accessing user input
// setting it as a global variable so you can access it later in the code
var theText;
$("#theSubmit").click(function() {
  theText = $("#theText").val();
  console.log(theText);
})
// more ideas, will need more inputs + interface
var theNoun;
var theAdjective;
var theVerb;
var theSillWord;
