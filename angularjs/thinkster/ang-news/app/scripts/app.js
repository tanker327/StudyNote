/* global app:true */

'use strict';


/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
// angular
//   .module('angNewsApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });




var app = angular.module('angNewsApp',[
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'views/main.html',
      contorller:'MainCtrl'
    })
    .when('/about', {
      templateUrl :'views/about.html',
      controller:'AboutCtrl'
    })
    .when('/post',{
      templateUrl:'views/post.html',
      controller:'PostCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});