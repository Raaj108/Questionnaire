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
    $scope.phoneNumbr = /^[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
    $scope.questionnaire = temp;
    $scope.master = {};


    $scope.submitForm = function (isValid) {
        if (isValid) {
            console.log($scope.questionnaire);
        }
    }

    /*$('button[name="reset"]').click(function () {
        if (typeof temp == "object") {
            console.log('obj');
            $.each(temp, function (k, v) {
                // k is either an array index or object key
                v = "";

            });
        }
        $scope.questionnaire = temp;
    });*/

    $scope.reset = function () {
        $scope.questionnaire = angular.copy($scope.master);
    };

    console.log($scope.questionnaire);

}]);