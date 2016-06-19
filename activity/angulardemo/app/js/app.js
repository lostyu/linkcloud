var app = angular.module('app', ['ngRoute', 'myController']);

app.config(function($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl: 'tpls/index.html',
        controller: 'HelloCtrl'
    }).when('/form', {
        templateUrl: 'tpls/form.html',
        controller: 'FormCtrl'
    }).otherwise({
        redirectTo: '/index'
    })
});
