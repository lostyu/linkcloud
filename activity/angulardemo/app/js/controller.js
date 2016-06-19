var myController = angular.module('myController', []);

myController.controller('HelloCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {
    	$rootScope.title = 'index';

        $scope.greeting = {
            text: 'Hello'
        };

    }
]);

myController.controller('FormCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {
    	$rootScope.title = 'form';

        $scope.userInfo = {
        	email: 'hackTony@163.com',
        	password: '123456',
        	autoLogin: true
        };
        $scope.getData = function(){
        	console.log($scope.userInfo);
        };
        $scope.setData = function(){
        	$scope.userInfo = {
	        	email: 'lostyu789@163.com',
	        	password: '789654',
	        	autoLogin: false
	        };
        };
        $scope.resetData = function(){
        	$scope.userInfo = {
	        	email: 'hackTony@163.com',
	        	password: '123456',
	        	autoLogin: true
	        };
        };
    }
]);