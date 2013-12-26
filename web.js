var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var buf = new Buffer('test');
var stream = fs.readFileSync("index.html");
var output2 = stream.toString();

app.get('/', function(request, response) {
  response.send(output2);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
