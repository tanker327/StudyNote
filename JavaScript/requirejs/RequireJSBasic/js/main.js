requirejs.config({
    baseUrl:"js",
    paths:{
        jquery:"lib/jquery/dist/jquery"
    }
});



require(['jquery', 'message','log'], function ($, message, m) {
    $('#output').html(message);
    console.log(m);
});