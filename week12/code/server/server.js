// basic server using express
// to run this you need to install:
// node, npm, body-parser, cors
// run from command line using node
//
//
const fs = require('fs');
const thePort = 12345;
//
//
//// --- --- --- { theServer } --- --- --- ///
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const server = app.listen(thePort, console.log("app listening on port 12345"));
//
// for parsing form data
// will need to install this: https://www.npmjs.com/package/body-parser
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);
// this is automatically serving this static folder
app.use(express.static('viewer'));
//
app.post('/potato', theCallback);

function theCallback() {
  console.log("yip!");
}

function theCallback(theData) {
  // this is the entire http get request
  console.log(theData);
}
// app.get('/', theMessage);
// // express apps want two parameters to the call back
// // the client's request + the server's response
// function theMessage(theRequest, theResponse) {
//   console.log(theRequest);
//   // now parse the theRequest
//   console.log(theRequest.body.theFirst)
//   // Create an object using JSON
//   var data = {
//     first: theRequest.body.theFirst,
//     last: theRequest.body.theLast
//   };
//   console.log(data)
//   // theResponse.send(data)
// }
