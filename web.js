var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var buf = new Buffer();
var stream = fs.readFileSync("index.html");
var output = stream.toString();

app.get('/', function(request, response) {
//  response.send('Hello World2!');
  response.send("output"+output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
