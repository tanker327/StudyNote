Strict Mode
===========

Summary from this [Document](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)

1.  strict mode eliminates some JavaScript silent errors by changing them to throw errors. 
2.  strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. 
3.  strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.



Invoking strict mode
=====================
##Strict mode for scripts

```js
// Whole-script strict mode syntax
"use strict";
var v = "Hi!  I'm a strict mode script!";
```

##Strict mode for functions
```js
function strict(){
  // Function-level strict mode syntax
  'use strict';
  function nested() { return "And so am I!"; }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }
```

Changes in strict mode
======================

##Converting mistakes into errors

1.  strict mode makes it impossible to accidentally create global variables. 
2.  strict mode makes assignments which would otherwise silently fail throw an exception. 
3.  strict mode makes attempts to delete undeletable properties throw (where before the attempt would simply have no effect)
4.  strict mode requires that all properties named in an object literal be unique.
5.  strict mode requires that function parameter names be unique
6.  strict mode forbids octal syntax


##Simplifying variable uses
1.  strict mode prohibits with.
2.  eval of strict mode code does not introduce new variables into the surrounding scope.
3.  strict mode forbids deleting plain names. delete name in strict mode is a syntax error:
4.  

##Making eval and arguments simpler
1.  the names eval and arguments can't be bound or assigned in language syntax. All these attempts to do so are syntax errors:
2.  strict mode code doesn't alias properties of arguments objects created within it.
3.  arguments.callee is no longer supported.


##"Securing" JavaScript
1. the value passed as this to a function in strict mode isn't boxed into an object. 
2. in strict mode it's no longer possible to "walk" the JavaScript stack via commonly-implemented extensions to ECMAScript.
3. arguments for strict mode functions no longer provide access to the corresponding function call's variables.
4. 

##Paving the way for future ECMAScript versions
1.  in strict mode a short list of identifiers become reserved keywords. **These words are implements, interface, let, package, private, protected, public, static, and yield.**
2.  strict mode prohibits function statements not at the top level of a script or function


Strict mode in browsers
=======================

Browsers don't reliably implement strict mode yet, so don't blindly depend on it. Strict mode changes semantics. Relying on those changes will cause mistakes and errors in browsers which don't implement strict mode. Exercise caution in using strict mode, and back up reliance on strict mode with feature tests that check whether relevant parts of strict mode are implemented. Finally, make sure to test your code in browsers that do and don't support strict mode. If you test only in browsers that don't support strict mode, you're very likely to have problems in browsers that do, and vice versa.
