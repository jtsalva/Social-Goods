(function () {

    var futurePredictionsController = function($scope, dataService) {
        $scope.expenses = [];
        $scope.amount = '';
        $scope.frequency = '';

        $scope.add = function () {
            $scope.expenses.push({
                Amount: $scope.amount,
                Frequency: $scope.frequency
            });
            calculateRemainingBalance();
        }

        var calculateRemainingBalance = function () {
            $scope.allReccurringExpenses = function () {
                var sum = 0;
                for (var i = 0; i < $scope.expenses.length; i++) {
                    sum += parseFloat($scope.expenses[i].Amount);
                }
                return sum;
            }
            $scope.availableBalance = $scope.mostRecentBalance - parseFloat($scope.allReccurringExpenses());
        }

        dataService.loadData().then(function (response) {
            $scope.transactions = response.data.transactions;
            dataService.processData($scope.transactions);
            
            $scope.mostRecentBalance = $scope.transactions[0].details.new_balance.amount;
            calculateRemainingBalance();
        });
    }

    var app = angular.module("socialgoodhack");
    app.controller("futurePredictionsController", futurePredictionsController);
})();