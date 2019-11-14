console.log("yay!");
let theObject;
let theEvent, theBody;
//
//
theEvent = $(".event");
theBody = $("body");
//
theEvent.click(function() {
  console.log("click!")
})
//
let theContainer, theImage, theLocation;
$.getJSON("theEvents.json", function(theData) {
  // console.log(theData);
  //
  //
  for (let location in theData.theEvents) {
    theObject = theData.theEvents[location]
    console.log(theObject.map)
    for (var i = 0; i < theEvent.length; i++) {
      // create div w/ jq
      // theBody.append("<div> is this working?</div>");
      theContainer = document.createElement("div");
      theContainer.className = 'event';
      // create html element in
      theImage = document.createElement("img");
      theImage.src = theObject.map;
      theContainer.appendChild(theImage);
      theBody.append(theContainer)
    }
  }
  console.log(typeof theEvent)
})
