Value properties
================

#Infinity

The initial value of Infinity is **Number.POSITIVE_INFINITY**. The value Infinity (positive infinity) is greater than any other number. This value behaves mathematically like infinity

#NaN

The global **NaN** property is a value representing Not-A-Number.

**Equality operator (== and ===) cannot be used to test a value against NaN. Use Number.isNaN() or isNaN() instead.**

```js
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
Object.is(NaN, Number.NaN)  //  true
```
