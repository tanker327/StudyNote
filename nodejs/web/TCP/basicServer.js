var net = require('net');

var server = net.createServer(function (socket) {

    socket.on('data', function (data) {
        socket.write("Hello! ");
        console.log("Data: " + data);
    });

    socket.on('end', function () {
        console.log("Connection end!");
    });

    socket.write("Hello From Server, (This is from inside of create server).");
});


server.listen(8124, function () {
    console.log("Server is running now ....");
});

