/*This file is used to test the console object in nodejs*/


// console.time and console.timeEnd are used to caculate the dural time.
console.time('100-elements');

setTimeout(function(){
    console.timeEnd('100-elements');
},1000);

