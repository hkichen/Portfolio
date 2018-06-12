var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.sendfile(__dirname + '/coverPage.html');
 });
 app.get("/bio", function(req, res) {
  res.sendFile(__dirname + '/bio.html')
})
app.get("/contact", function(req, res) {
  res.sendFile(__dirname + '/contact.html')
}) 
app.get("/portfolio", function(req, res) {
  res.sendFile(__dirname + '/portfolio.html')
}) 






app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});