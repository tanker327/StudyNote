var http = require('http');
var url = require('url');


var todos = [];

var server = http.createServer(function (req, res) {
   switch (req.method){
       case 'GET':
           //todos.forEach(function (item, index) {
           //    res.write(index+1 + "): "+item +"\n");
           //});

           res.write(todos.map(function (item, i) {
               return i+1 +'): '+item;
           }).join('\n'));
           res.end();
           break;
       case 'POST':
           var dataChunks = [];
           var data;
           req.on('data', function (data) {
               dataChunks.push(data);
           });
           req.on('end', function () {
               data = Buffer.concat(dataChunks);
               console.log(data.toString());
               todos.push(data.toString());
               res.statusCode = 201;
               res.end();
           });

           break;
       case 'DELETE':
           var path = url.parse(res.url).pathname;
           var i = parseInt(path.slice(1), 10);

           if(isNaN(i)){
               res.statusCode = 400;
               res.end('Invalid item id.');
           }else if(!dataChunks[i]){
               res.statusCode = 404;
               res.end('Item not found.');
           }else{
               dataChunks.splice(i,1);
               res.end('OK');
           }
           break;
   }
});

server.listen(3000, function () {
    console.log("Server is running at port 3000.....");
});