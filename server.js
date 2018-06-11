var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.sendfile(__dirname + '/home.html');
 }); 

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});