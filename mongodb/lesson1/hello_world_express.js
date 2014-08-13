var express = require('express');
var app = express();


app.get("/", function (req,res) {
    res.send("hello world js");
})

app.listen(8080);
console.log("Server is listening to 8080.");