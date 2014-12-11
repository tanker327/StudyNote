var http = require('http');
var qs = require('querystring');
var items =[];

var server = http.createServer(function (req, res) {
    if('/'===req.url){
        switch (req.method){
            case 'GET':
                show(res);
                break;
            case 'POST':
                add(req, res);
                break;
            default :
                badRequst(res);

        }
    } else {
        notFound(res);
    }
});

server.listen(3000, function () {
    console.log("Server is running at port 3000......");
});

function show(res){
    var html =  '<h1>To Do List</h1>'
                +'<ul>'
                +items.map(function (item) {
                    return '<li>'+item+'</li>';
                }).join('')
                +'</ul>'
                +'<form method="post" action="/">'
                +'<p><input type="text" name="item"/></p>'
                +'<p><input type="submit" value="Add Item"/></p>'
                +'</form>';
    res.setHeader('Content-Length',Buffer.byteLength(html));
    res.setHeader('Content-Type','text/html');
    res.end(html);
}

function add( req, res){
    var body = '';
    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        var obj = qs.parse(body);
        items.push(obj.item);
        show(res);
    })
}

function errorHandle(res, statusCode, desc){
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'text/plain');
    res.end(desc);
}

function notFound(res) {
    errorHandle(res, 400, 'Not Found');
}

function badRequst(res){
    errorHandle(res, 404, 'Bad Request');
}