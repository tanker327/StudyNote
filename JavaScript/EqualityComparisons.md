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
{} === {} // false, two object
"hello" ==="hello" // true
new String("hello")  === new String("hello")  // false, two object
0 === "0" //false
null === null //true
undefined === undefined //true
null === undefined  //false
```
Strict equality treats NaN as unequal to every other value -- including itself.  
(The only case in which (x !== x) is true is is when x is NaN.)


== (Loose Equality)
===================

1. Loose equality compares two values for equality, after converting both values to a common type.  
2. After conversions (one or both sides may undergo conversions), the final equality comparison is performed exactly as === performs it.


Check table below for detail:

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row">&nbsp;</th>
   <th colspan="7" scope="col" style="text-align: center;">Operand B</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">&nbsp;</th>
   <td>&nbsp;</td>
   <td style="text-align: center;">Undefined</td>
   <td style="text-align: center;">Null</td>
   <td style="text-align: center;">Number</td>
   <td style="text-align: center;">String</td>
   <td style="text-align: center;">Boolean</td>
   <td style="text-align: center;">Object</td>
  </tr>
  <tr>
   <th colspan="1" rowspan="6" scope="row">Operand A</th>
   <td>Undefined</td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>IsFalsy(B)</code></td>
  </tr>
  <tr>
   <td>Null</td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>IsFalsy(B)</code></td>
  </tr>
  <tr>
   <td>Number</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
   <td style="text-align: center;"><code>A === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>ToNumber(B) === A</code></td>
   <td style="text-align: center;"><code>ToPrimitive(B) == A</code></td>
  </tr>
  <tr>
   <td>String</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>B === ToNumber(A)</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>ToPrimitive(B) == A</code></td>
  </tr>
  <tr>
   <td>Boolean</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === B</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
   <td style="text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td>Object</td>
   <td style="text-align: center;"><code>IsFalsy(A)</code></td>
   <td style="text-align: center;"><code>IsFalsy(A)</code></td>
   <td style="text-align: center;"><code>ToPrimitive(A) == B</code></td>
   <td style="text-align: center;"><code>ToPrimitive(A) == B</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;">
    <p><code>A === B</code></p>
   </td>
  </tr>
 </tbody>
</table>


* all objects are loosely unequal to undefined and null.


```js
new String("hello")  == new String("hello")  //false

NaN == NaN  // false

null == undefined  //true

null==null  //true
null == 0  // false
null == false // false

undefined == undefined  //true
undefined == 0 // false
undefined == false  //false

3 == "3"  //  true

0 == false  // true
1 == true  // true
3 == true  // false
3 == false  //  false
```


Object.is()
===========

The **Object.is()** method determines whether two values are the same value.

####Syntax

```js
var isSame = Object.is(value1, value2);
```

Two values are the same if one of the following holds:

* both undefined
* both null
* both true or both false
* both strings of the same length with the same characters
* both the same object
* both numbers and
  * both +0
  * both -0
  * both NaN
  * or both non-zero and both not NaN and both have the same value


```js
Object.is({},{})  // false
Object.is(new String("hello"),new String("hello"))  // false
Object.is([],[])  // false
Object.is("hello","hello")  // true
Object.is(null,null)  // true
Object.is(undefined, undefined)  //  true
Object.is(NaN, NaN)  // true
