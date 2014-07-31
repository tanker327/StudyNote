Equality comparisons
====================

There are three way for **Equality comparisons**

* == (Loose equality)
* === (strict equality)
* Object.is

=== (Strict equality)
=====================

1. Neither value is implicitly converted to some other value before being compared. 
2. If the values have different types, the values are considered unequal.  
3. Otherwise, if the values have the same type and are not numbers, they're considered equal if they have the same value.  
4. Finally, if both values are numbers, they're considered equal if they're both not NaN and are the same value, or if one is +0 and one is -0.

```js
NaN === NaN //false

```
