(function () {
    var app = angular.module("socialgoodhack", []);

    app.filter('makePositive', function() {
        return function(num) { return Math.abs(num); 
        }
    })

})();