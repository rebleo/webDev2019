console.log("hello JS");
// grab the button + pass into a variable
var theButton = $("#theSubmit").on("click", myFunction);

function myFunction(data) {
  console.log("button click!");
  // console.log($("#theText").val());
}
