##commands for mongodb:

mongo  // connent to shell

show dbs  // list all databases

use XXX  // use one of database

db.things.find() // find documents in things collection in current db

db.things.insert({"a":1, "b":2, "c":3})

db.things.find({"a":1})

for(var i=0; i<10; i++) { db.things.insert({"x":i});}

db.things.find().pretty()
