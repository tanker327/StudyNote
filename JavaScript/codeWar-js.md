1.  Check if it is an array 
```js
Array.isArray = function(value) {
  return Object.prototype.toString.call(value)==="[object Array]";
};
```
2.  Arguments in function is not a pure array. It is an Object. It can be convert to array by:
```js
 var array = Array.slice.call(arguments,0);
```

3. reduce() for array. Don't forget the init value 0
```js
[].reduce(function(a,b){return a+b;}, 0);
```

4. use slice() smartly 
```js
"abcd".slice(-1)==="d"
```
5. Methods Within Constructor vs Prototype in Javascript
  a. Methods Within Constructor is acturally a varible for every instance which hold a function object
  b. So every instance will have different copy of that function.
  c. Methods in Prototype is single function shared by all the instance. Faster
  d. The good part of Methods Within Constructor is that it can access private variables.
