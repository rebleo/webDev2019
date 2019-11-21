console.log("yay!");
//
//
var theButton = $("#mySecondButton").on("click", myFunction);
//
let theLat, theLong, theURL;
//
function myFunction() {
  console.log("click!");
  $("h3").append("<p> yr location is: " + theLat + " latitude" + theLong + " Longitude!")
  // window.open(theURL)
}
// test for user's browser specs
// need geolocaiton
if ("geolocation" in navigator) {
  console.log("connected!");
} else {
  console.log("not connected :(")
}
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude)
  theLat = position.coords.latitude;
  theLong = position.coords.longitude;
  theURL = "https://www.google.com/maps/@" + theLat + "," + theLong;
});
///
//
// get user's web camera streaming
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported :(")
}
navigator.mediaDevices.enumerateDevices().then(function(devices) {
  devices.forEach(function(device) {
    console.log(device.kind + ": " + device.label + " id=" + device.deviceID)
  });
}).catch(function(err) {
  console.log(err.name + ": " + err.message);
});
var constraints = {
  audio: false,
  video: {
    width: 640,
    height: 360
  }
}
navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
  let theVideo = document.querySelector('video');
  theVideo.srcObject = mediaStream;
  theVideo.onloadedmetadata = function(e) {
    theVideo.play();
  }
})
