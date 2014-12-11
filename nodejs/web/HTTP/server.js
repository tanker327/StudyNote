var http = require('http');


http.createServer(function (req, res) {

    console.log(
        "req.method: "+ req.method,
       "req.url: "+ req.url,
       "req.httpVersion: "+ req.httpVersion
    );

    //console.dir(req);


    req.on('data', function (data) {
        console.log("data is coming...");
    });


    res.writeHead(200, {'Content-Type': 'text/plain'});

    //res.setHeader("Content-Length","hello world".length);
    //res.statusCode(200);


    res.end('Hello world');

}).listen(1337, '127.0.0.1');

console.log('Server is running at http://127.0.0.1:1337/');



//< ::  curl -v http://127.0.0.1:1337
//    * Rebuilt URL to: http://127.0.0.1:1337/
//    * Hostname was NOT found in DNS cache
//*   Trying 127.0.0.1...
//* Connected to 127.0.0.1 (127.0.0.1) port 1337 (#0)
//> GET / HTTP/1.1
//> User-Agent: curl/7.37.1
//> Host: 127.0.0.1:1337
//> Accept: */*
// >
// < HTTP/1.1 200 OK
// < Content-Type: text/plain
// < Date: Tue, 09 Dec 2014 19:31:01 GMT
// < Connection: keep-alive
// < Transfer-Encoding: chunked
// <
// * Connection #0 to host 127.0.0.1 left intact
// Hello world%



