Value properties
================

#Infinity

The initial value of Infinity is **Number.POSITIVE_INFINITY**. The value Infinity (positive infinity) is greater than any other number. This value behaves mathematically like infinity

```js
if(Infinity) console.log("sdfs");  // sdfs -> Infinity works as true in if()
Infinity ||"asfsdf"  //Infinity -> Infinity works as true in if()
Infinity == true  // false -> but Infinity is not true

typeof Infinity  //"number"
```

#NaN

The global **NaN** property is a value representing Not-A-Number.

**Equality operator (== and ===) cannot be used to test a value against NaN. Use Number.isNaN() or isNaN() instead.**

```js
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
Object.is(NaN, Number.NaN)  //  true

if(NaN) console.log("sdfs");  //  undefined
NaN ||"asfsdf"   //  "asfsdf"
NaN == true  // false
NaN == false  // false

typeof NaN  // "number"
```

#undefined

The global **undefined** value property represents the value undefined. It is one of JavaScript's primitive types.


1. A variable that has not been assigned a value is of type undefined. 
2. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. 
3. A function returns undefined if a value was not returned.

Since **undefined is not a reserved word**, it can be used as an identifier (variable name) in any scope other than the global scope.

```js
// logs "foo string"
(function(){ var undefined = 'foo'; console.log(undefined, typeof undefined); })();

// logs "foo string"
(function(undefined){ console.log(undefined, typeof undefined); })('foo');
```


```js
undefined == undefined  // true
undefined === undefined // true
if(undefined) console.log("sdfsdf")  // undefined  -> undefined works as false in if()
undefined || "hello "  // "hello "
undefined == false // false
undefined == true  // false
undefined == NaN  // false
undefined == null  // true
```

### Use typeof to check undefined

```js
typeof undefined  // "undefined"
typeof undefined === "undefined"   // true

var x;
if (typeof x === 'undefined') {
   // these statements execute
}
```

One reason to use typeof is that it does not throw an error if the variable has not been defined.

```js
// x has not been defined before
if (typeof x === 'undefined') { // evaluates to true without errors
   // these statements execute
}

if(x === undefined){ // throws a ReferenceError

}
```

###void

The void operator evaluates the given expression and then returns undefined.

```html
<a href="javascript:void(0);">
  Click here to do nothing
</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

```js
void(console.log("sdf")) // this statment will print  'sdf'  then return  a undefined
```


The void operator is a third alternative.
```js
var x;
if (x === void 0) {
   // these statements execute
}

// y has not been defined before
if (y === void 0) {
   // throws a ReferenceError (in contrast to `typeof`)
}
```


#null

The value null is a JavaScript literal representing null or an "empty" value, i.e. no object value is present. It is one of JavaScript's primitive values.

```js
typeof null        // object (bug in ECMAScript, should be null)
typeof undefined   // undefined
null === undefined // false
null  == undefined // true

if(null) console.log("sdfsdf")  // undefined  -> undefined works as false in if()
null || "asdf"  //"asdf"
null == false  //false
null == true  //false
null == undefined  //true
null ==NaN  //false
```
