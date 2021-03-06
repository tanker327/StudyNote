#API
Got IP and location:   http://api.hostip.info/get_json.php


#App

[nodemon](https://www.npmjs.org/package/nodemon) : Auto restart server 

[pm2](https://www.npmjs.org/package/pm2) : production process manager 

[http-server](https://www.npmjs.org/package/http-server) : Simple http server

#Express

[express-unless](https://www.npmjs.com/package/express-unless) : Add exception to express middleware.
[express-jwt](https://github.com/auth0/express-jwt)

#DB
[sequelize](http://sequelizejs.com) Mysql - DB

#Lib

[events](https://github.com/Gozala/events)  Node's event emitter for all engines.

[socket.io](https://www.npmjs.org/package/socket.io) 

Time Display : [Moment.js](http://momentjs.com)

gzip: [compression](https://www.npmjs.org/package/compression)
```
var compress = require('compression');
app.use(compress()); 
```

Hash password : [bcrypt](https://www.npmjs.org/package/bcrypt)

Form Validation : [validator](https://www.npmjs.org/package/validator)

Debug : [debug](https://www.npmjs.org/package/debug)

async: [async](https://www.npmjs.org/package/async)

tasks scheduler : [cron](https://www.npmjs.org/package/cron)

ms.js: miliseconds conversion utility :[ms](https://www.npmjs.org/package/ms)

Enable Cors: [cors](https://www.npmjs.org/package/cors)

UnderScore & Lo-Dash

cookie : [cookie](https://www.npmjs.org/package/cookie)

Crypto/Hash/md5: [crypto](from core lib)

parse/stringfy form(query) string: [querystring](http://nodejs.org/api/querystring.html)

file upload : [formidable](https://www.npmjs.com/package/formidable)

Test express : [supertest](https://www.npmjs.com/package/supertest)

make value same as key : [keyMirror](https://github.com/STRML/keyMirror)

Files names in a dir to object : [requireDir](https://github.com/aseemk/requireDir)


A few examples of modules I find useful:

validator for validating user input
sqlite3 for easy & lightweight data persistence  (I use a NoSQL data store like Redis for storing sessions & stuff like that but I like SQLite for holding accounts & user data)
bcrypt for storing passwords (why bcrypt?)
i18n for internationalization / localization
nodemailer with email-templates
express-subdomains for routing subdomains
express-expose for exposing JS objects to the client
gm for validating & resizing uploaded pictures
marked for inline markdown support in my Jade templates / i18n files
