controllers.controller('transport', ['$scope', '$http',
    function ($scope, $http) {
         $http.get('/rest/transport/list/')
                .success(function(data) {
                    $scope.transports = data;
                });
    }
]);
