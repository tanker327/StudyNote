var mongoClient = require('mongodb').MongoClient;


mongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    if(err) throw err;

    db.collection('coll').findOne({}, function (err, doc) {
       if(err) throw err;

       console.dir(doc);

        db.close();
    });

    console.dir("called findOne.");
});


