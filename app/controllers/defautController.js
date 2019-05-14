angular.module("directiveApp",[])
.controller("defaultCtrl", ["$scope", "dataService",
    function($scope, dataService){
        dataService.getData()
            .then(function(result){
                $scope.dates = result;
            })
    }
]);