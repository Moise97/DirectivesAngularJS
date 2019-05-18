angular.module("directiveApp",[])
.controller("defaultCtrl", ["$scope", "dataService",
    function($scope, dataService){
        dataService.getData()
            .then(function(result){
                $scope.dates = result;
            })

        $scope.viewFile = function(){
            return $scope.showList ? "app/views/list.html" : "app/views/table.html";
        }
    }
]);