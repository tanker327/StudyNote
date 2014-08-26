// Define a lib named Lib
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory();
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory();
  } else {
    root.Lib = factory();
  }

}(this, function () {
  'use strict';

  // code goes here
  var Lib = function (options) {

  };

  return Lib;
}));
