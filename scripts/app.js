var app = angular.module('quetionnaireApp', []);

app.controller('quetionnaireFormCtrl', ['$scope', function ($scope) {
    var temp = {
        fullname: ''
        , email: ''
        , phone: ''
        , 'websitetype': ''
        , owner: ''
        , audience: ''
        , 'ownerfeatures': ''
        , 'audiencefeatures': ''
        , content: ''
        , 'pageno': ''
        , domain: ''
        , host: ''
    };

    $scope.questionnaire = temp;

    $("button[type='submit']").click(function () {
        console.log($scope.questionnaire);


    });

    $scope.submitForm = function (isValid) {
        if (isValid) {
            console.log('Hello');
        }
    }
    console.log($scope.questionnaire);

}]);