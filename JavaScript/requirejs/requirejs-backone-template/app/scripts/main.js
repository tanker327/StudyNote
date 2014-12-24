require.config({

    paths:{
        "backbone":"vendor/backbone/backbone",
        "jquery":"vendor/jquery/dist/jquery.min",
        "underscore":"vendor/underscore/underscore"
    }
});


require(['views/app'], function (AppView) {
    new AppView;
})