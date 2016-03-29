var app = angular.module('quetionnaireApp', []);

app.controller('quetionnaireFormCtrl', ['$scope', function ($scope) {
    $scope.fullname = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.owner = "";


    $("button[type='submit']").click(function () {
        console.log($scope.fullname);
        console.log($scope.email);
        console.log($scope.phone);


    });
    console.log($scope.fullname);
    console.log($scope.email);
    console.log($scope.phone);
}]);