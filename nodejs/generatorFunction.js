

function* idMaker(){
    var index = 0;
    while(true) yield index++;
}

var gen = idMaker();



for(var i = 0 ; i<10 ;i++)
    console.log(gen.next().value());

// The result should be  0 , 1, 2, 3, 4, 5.....9