var net = require('net');

var client =  net.connect({host:'google.com',port:80}, function () {
    console.log("Connected to google");
    client.write('hello');
});

client.on('data', function (data) {
    console.log(data);
});

client.on('end', function () {
    console.log("Connect end");
});

/// It works but nothing to show.