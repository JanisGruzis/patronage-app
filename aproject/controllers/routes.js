controllers.controller('routes', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('/rest/route/list/' + $routeParams.type)
                .success(function(data) {

                    $scope.routes = data;
                });
    }
]);
