var app = angular.module('quetionnaireApp', []);

app.controller('quetionnaireFormCtrl', ['$scope', function ($scope) {
    $scope.name = "Rajan";
    console.log($scope.name);
}]);