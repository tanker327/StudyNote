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
