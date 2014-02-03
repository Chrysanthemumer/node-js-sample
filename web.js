var fs = require('fs');
var webpage = fs.readFileSync("index.html", "utf-8");


//var buffer = fs.readFileSync("index.html");
//var webpage = buffer.toString();


var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(webpage);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
