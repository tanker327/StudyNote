var express = require('express'),
    app = express(),
    cons = require("consolidate"),
    bodyParser = require("body-parser");

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views',__dirname + '/views');
//app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(app.router);


function errorHandler(err, req, res, next){
    console.log("This is in error handler");
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_template',{error:err});
}

app.use(errorHandler);

app.get('/', function (req, res, next) {
    res.render('fruitPicker',{'fruits':['apple','orange','banana','peach']});
});

app.post('/favorite_fruit', function (req, res, next) {
    var favorite = req.body.fruit;
    if(typeof  favorite === 'undefined'){
        next(Error('Please choose a fruit.'));
    }
    else{
        res.send("Your favorite fruit is "+favorite);
    }
});

app.listen(8080);
console.log('server is running in 8080');

