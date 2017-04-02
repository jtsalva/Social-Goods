(function () {

    var expenditureController = function($scope, dataService) {
        dataService.loadData().then(function (response) {
            $scope.transactions = response.data.transactions;
            dataService.processData($scope.transactions);
        });

        $scope.balance = 150;
        $scope.lastValue = 150;
        
        var calculateDeposit = function (transactionAmount) {
            $scope.lastValue = $scope.lastValue - transactionAmount;
            return $scope.lastValue;
        }

    }

    var app = angular.module("socialgoodhack"); 
    app.controller("expenditureController", expenditureController);
})();