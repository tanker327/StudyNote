1.  Check if it is an array 
```js
Array.isArray = function(value) {
  return Object.prototype.toString.call(value)==="[object Array]";
};
```
