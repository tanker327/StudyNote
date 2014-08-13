var express = require('express');
var app = express();
var cons = require("consolidate");
var MongoClinet = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

var mongoClient = new MongoClinet( new Server('localhost',27017, {'native_parser':true}));
var db = mongoClient.db('test');

app.engine('html', cons.swig);
app.set("view engine", "html");
app.set("views", __dirname+"/views");


app.get("/", function (req,res) {
    db.collection('hello_mongo_express').findOne({}, function (err, doc) {
        if(err) throw err;
        res.render("hello", doc);
    });
});

app.get("*", function (req, res) {
    res.send("Page not found.");
});

mongoClient.open(function(err, mongoclinet){
    app.listen(8080);
    console.log("Server is listening to 8080.");
});

