var express = require("express");
var bodyParser = require ("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
var port = 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/controllers"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/models/"));

require("./controllers/burgers_controller.js")(app);


app.listen(port);
