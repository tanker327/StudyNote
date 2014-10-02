* Check if it is an array 
```js
Array.isArray = function(value) {
  return Object.prototype.toString.call(value)==="[object Array]";
};
```
* Arguments in function is not a pure array. It is an Object. It can be convert to array by:
```js
 var array = Array.slice.call(arguments,0);
 [].reverse.call(arguments) // this works as well
```

* reduce() for array. Don't forget the init value 0
```js
[].reduce(function(a,b){return a+b;}, 0);
```

* use slice() smartly 
```js
"abcd".slice(-1)==="d"
```
* Methods Within Constructor vs Prototype in Javascript
 * Methods Within Constructor is acturally a varible for every instance which hold a function object
 * So every instance will have different copy of that function.
 * Methods in Prototype is single function shared by all the instance. Faster
 * The good part of Methods Within Constructor is that it can access private variables.

* Array.prototype.sort() can sort both number and string

* Using < > ==  to compare string/char

* customize getter and setter
* ```js
* function Archiver() {
    var temperature = null;
    var archive = [];
    //TODO: implement "Archiver" as a self-archiving object
    //...ensure that when "temperature" property is
    //...set, that the array returned by getArchive
    //...gets a log entry in the form of {date:,val:}
    
    
    
    Object.defineProperty(this, 'temperature', {
    get: function() {
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ date: new Date(),val: temperature });
    }
  });
    
    this.getArchive = function() {return archive;};
}
```
