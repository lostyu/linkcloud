var appModule = angular.module('appModule', ['ui.router']);

// run
appModule.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.modalShow = false;

        $rootScope.showModal = function () {
            $rootScope.modalShow = true;
        };
        $rootScope.hideModal = function () {
            $rootScope.modalShow = false;
        };
    }
]);

// config
appModule.config(function ($stateProvider, $urlRouterProvider) {

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
        });

});

// controller
appModule.controller('listCtrl', function ($scope, $http) {

    $scope.items = [];
    $scope.voteCount = 10;

    $http({method: 'GET', url: 'list-data.json'}).success(function (data, status, headers, config) {
        $scope.items = data;
    }).error(function (data, status, headers, config) {

    });

    $scope.vote = function (id) {
        if ($scope.voteCount > 0) {
            $scope.voteCount--;
            console.log($scope.voteCount);
        }else{
            return;
        }
    };

});
appModule.controller('detailCtrl', function ($scope, $http, $stateParams) {

    var url = 'userInfo-data.json?id=' + $stateParams.id;

    $scope.userInfo = {};
    $scope.bShowBtn = true;
    $scope.bShowCnt = false;

    // 方法
    $scope.showPl = function () {
        $scope.bShowBtn = false;
        $scope.bShowCnt = true;
    };
    $scope.hidePl = function () {
        $scope.bShowBtn = true;
        $scope.bShowCnt = false;
    };

    $scope.saveCommit = function () {
        $scope.hidePl();
    };

    $scope.cancelCommit = function () {
        $scope.hidePl();
    };


    // 初始化数据
    $http({method: 'GET', url: url}).success(function (data, status, headers, config) {
        $scope.userInfo = data;
    }).error(function (data, status, headers, config) {

    });

});
appModule.controller('signUpCtrl', function ($scope) {

    $scope.showNext = false;

    $scope.user = {};
    $scope.user.text = '';
    $scope.len = 0;

    $scope.reg = /^\d{11}$/;
    $scope.isUnTel = true;

    $scope.imgUrl = 'xxx';
    $scope.showImgBox = false;

    $scope.checkValid = function (formValid) {
        console.log($scope.myForm.utel.$invalid);
        if (!formValid.$invalid && $scope.isUnTel == false) {
            $scope.showNext = true;
            console.log($scope);
        }
    };

    $scope.checkText = function () {

        if ($scope.user.text && $scope.user.text.length) {
            $scope.len = $scope.user.text.length;

            if ($scope.user.text.length > 200) {
                $scope.user.text = $scope.user.text.substr(0, 200);
            }
        } else {
            $scope.len = 0;
        }

    };

    $scope.checkTel = function () {
        if (!$scope.reg.test($scope.user.tel)) {
            $scope.isUnTel = true;
        } else {
            $scope.isUnTel = false;
        }
    };

    $scope.uploadFile = function (event) {

        // 如果浏览器不支持FileReader，则不处理  

        if (!window.FileReader) return;

        var files = event.target.files;

        for (var i = 0, f; f = files[i]; i++) {

            if (!f.type.match('image.*')) {

                continue;

            }


            var reader = new FileReader();

            reader.onload = (function (theFile) {

                return function (e) {


                    $scope.imgUrl = e.target.result;
                    $scope.$apply();

                };

            })(f);


            reader.readAsDataURL(f);

        }
        $scope.showImgBox = true;

    };


});

// directive
appModule.directive('customOnChange', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var onChangeHandler = scope.$eval(attrs.customOnChange);
            element.bind('change', onChangeHandler);
        }
    };
});

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





















