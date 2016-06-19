var appModule = angular.module('appModule', ['ui.router']);

appModule.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index');

    $stateProvider
    	.state("index", {
            url: "/index",
            templateUrl: "tpls/index.html"
        })
        .state("list", {
            url: "/list",
            templateUrl: "tpls/list.html"
        })
        .state("detail", {
            url: "/detail",
            templateUrl: "tpls/detail.html"
        })

});


