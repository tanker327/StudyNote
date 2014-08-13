var express = require('express');
var app = express();
var cons = require("consolidate");

app.engine('html', cons.swig);
app.set("view engine", "html");
app.set("views", __dirname+"/views");


app.get("/", function (req,res) {
    res.render("hello", {"name":"swig"});
});

app.get("*", function (req, res) {
    res.send("Page not found.");
});

app.listen(8080);
console.log("Server is listening to 8080.");