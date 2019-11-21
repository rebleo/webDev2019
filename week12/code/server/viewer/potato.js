console.log("hello JS");
// getting started w/ jQuery
var theFirst, theLast;
// grab the button + pass into a variable
var theButton = $("#theSubmit").on("click", myFunction);

function myFunction(data) {
  $.post("/potato", data);
  console.log("button click!");
  // console.log($("#theText").val());
  theFirst = $("#theText").val();
  theLast = $("#theText2").val();
  console.log(theFirst + theLast);
  $("h3").append(theFirst + "‼️");
}
