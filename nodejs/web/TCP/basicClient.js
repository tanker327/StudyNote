var net = require('net');


var client = net.connect({port: 8124}, function () {
    console.log("Client connected");
    client.write("world!\r\n");
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});

client.on("end", function () {
    console.log("Client disconnected!");
});