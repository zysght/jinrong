var app = angular.module("myApp", []);
app.controller("main", ['$scope', '$http', function ($scope, $http) {
    $http({
        url: "http://localhost:3000/goodslist"
    })
        .then(function (result) {
            $scope.data = result.data;
        }, function (err) {
            throw new Error(error);
        })
    $scope.vm = [
        {"list": "服务"},
        {"list": "金融"}
    ];
    var selected = $scope.selected;
    $scope.show = function (index) {
        $scope.selected = index;
    };
}])
app.directive('tab', function () {
    return {
        restrict: 'E',
        templateUrl: './App/View/tab.html',
        scope: {
            data: "="
        },
        controller: ['$scope', function ($scope) {
            $scope.$watch('data', function (newVal, oldVal) {
                if (newVal) {
                    $scope.value = newVal[0].value;
                }
            })
            $scope.fn = function (value) {
                $scope.value = value;
            }
        }]
    }
})