var appModule = angular.module('appModule', ['ui.router']);

// run
appModule.run(['$rootScope', '$state', '$stateParams', '$location',
    function($rootScope, $state, $stateParams, $location) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.modalShow =  false;

        $rootScope.showModal = function(){
            $rootScope.modalShow = true;
        };
        $rootScope.hideModal = function(){
            $rootScope.modalShow = false;
        };
    }
]);

// config
appModule.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index');

    $stateProvider
    	.state("index", {
            url: "/index",
            templateUrl: "tpls/index.html"
        })
        .state("list", {
            url: "/list",
            templateUrl: "tpls/list.html",
            controller: 'listCtrl'
        })
        .state("detail", {
            url: "/detail/:id",
            templateUrl: "tpls/detail.html",
            controller: 'detailCtrl'
        })
        .state("signUp", {
            url: "/signUp",
            templateUrl: "tpls/signUp.html",
            controller: 'signUpCtrl'
        })

});

// controller
appModule.controller('listCtrl', function($scope, $http){

    $scope.items = [];

    $http({method: 'GET', url: 'list-data.json'}).
    success(function(data, status, headers, config) {
        $scope.items = data;
    }).
    error(function(data, status, headers, config) {

    });
});
appModule.controller('detailCtrl', function($scope, $http, $stateParams){

    var url = 'userInfo-data.json?id='+$stateParams.id;

    $scope.userInfo = {};
    $scope.bShowBtn = true;
    $scope.bShowCnt = false;

    // 方法
    $scope.showPl = function(){
        $scope.bShowBtn = false;
        $scope.bShowCnt = true;
    };
    $scope.hidePl = function(){
        $scope.bShowBtn = true;
        $scope.bShowCnt = false;
    };

    $scope.saveCommit = function(){
        $scope.hidePl();
    };

    $scope.cancelCommit = function(){
        $scope.hidePl();
    };


    // 初始化数据
    $http({method: 'GET', url: url}).
    success(function(data, status, headers, config) {
        $scope.userInfo = data;
    }).
    error(function(data, status, headers, config) {

    });

});
appModule.controller('signUpCtrl', function($scope, $http){

    $scope.checkForm = function(){

    };

});

// directive
//appModule.directive('modal', function(){
//    return{
//        restrict: 'E',
//        replace: true,
//        scope: {
//
//        },
//        templateUrl: 'tpls/directive-modal.html'
//    }
//});





















